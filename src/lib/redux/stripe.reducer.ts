import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { loadStripe } from "@stripe/stripe-js"
import { RootState } from "./store"
import { functions } from "../firebase/firebaseConfig"
import { httpsCallable } from "firebase/functions"

interface StripeState {
  clientSecret: string | null
  subscription: Subscription | null
  loading: boolean
  error: string | null
}

const initialState: StripeState = {
  clientSecret: null,
  subscription: null,
  loading: false,
  error: null
}

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

export const createCheckoutSession = createAsyncThunk(
  "stripe/createCheckoutSession",
  async (priceId: string, { getState, rejectWithValue }) => {
    try {
      const stripe = await stripePromise

      if (!stripe) throw new Error("Stripe failed to initialize")
      const state = getState() as RootState
      if (state.auth.user == null || state.auth.stripeCustomerId == null)
        throw new Error("User is not properly authenticated for checkout")
      const stripeCustomerId = state.auth.stripeCustomerId

      if (!stripeCustomerId) throw new Error("Stripe customer ID not found")

      const createSession = httpsCallable(functions, "createCheckoutSession")

      const response = await createSession({ domain: "https://bestreport.fr", plan: priceId })

      // Get the session URL from the response
      const sessionUrl: string = response.data as string
      if (!sessionUrl) throw new Error("Failed to retrieve session ID")

      // Redirect the user to the Stripe Checkout page
      window.location.assign(sessionUrl)

      return null
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to create checkout session")
    }
  }
)

export const getUserSubscriptions = createAsyncThunk(
  "stripe/getUserSubscriptions",
  async (_, { rejectWithValue }) => {
    try {
      const request = httpsCallable(functions, "getUserSubscriptionDetails")
      const subscriptionDetails = await (await request()).data

      const subscriptionPayload: Subscription = {
        periodEnd: subscriptionDetails["subscriptionPeriodEnd"],
        periodStart: subscriptionDetails["subscriptionPeriodStart"],
        price: subscriptionDetails["price"],
        name: subscriptionDetails["planNickName"],
        billingInterval: subscriptionDetails["billingInterval"],
        id: subscriptionDetails["id"],
        credidCard: {
          cardLastDigits: subscriptionDetails["paymentMethodLastDigits"],
          cardBrand: subscriptionDetails["cardBrand"],
          cardExpiration: subscriptionDetails["cardExpiration"],
          name: subscriptionDetails["creditCardName"]
        }
      }

      return subscriptionPayload
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch subscriptions")
    }
  }
)

export const cancelSubscription = createAsyncThunk(
  "stripe/cancelSubscription",
  async (subscriptionId: string, { rejectWithValue }) => {
    try {
      const stripe = await stripePromise
      if (!stripe) throw new Error("Stripe failed to initialize")

      const result = await stripe.paymentRequest({
        country: "FR",
        currency: "eur",
        total: { label: "Cancel Subscription", amount: 0 },
        requestPayerName: true,
        requestPayerEmail: true
      })

      return result
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to cancel subscription")
    }
  }
)
const handleRejected = (state, action) => {
  console.log("STRIPE REDUCER ERROR : ", action.payload)
  state.error = action.payload
  state.loading = false
}

const stripeSlice = createSlice({
  name: "stripe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCheckoutSession.pending, (state) => {
        state.loading = true
      })
      .addCase(createCheckoutSession.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(createCheckoutSession.rejected, handleRejected)
      .addCase(getUserSubscriptions.rejected, handleRejected)
      .addCase(getUserSubscriptions.fulfilled, (state, action) => {
        state.subscription = action.payload
        state.loading = false
      })
  }
})

export default stripeSlice.reducer
export { stripePromise }
