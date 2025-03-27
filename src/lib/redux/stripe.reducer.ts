import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { loadStripe } from "@stripe/stripe-js"
import { RootState } from "./store"

interface StripeState {
  clientSecret: string | null
  subscriptions: any[]
  loading: boolean
  error: string | null
}

const initialState: StripeState = {
  clientSecret: null,
  subscriptions: [],
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

      const session = await stripe.redirectToCheckout({
        lineItems: [],
        customer: stripeCustomerId,
        mode: "subscription",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
      })

      if (session.error) throw session.error
      return session
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to create checkout session")
    }
  }
)

export const getUserSubscriptions = createAsyncThunk(
  "stripe/getUserSubscriptions",
  async (_, { rejectWithValue }) => {
    try {
      const stripe = await stripePromise
      if (!stripe) throw new Error("Stripe failed to initialize")

      return []
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
      .addCase(createCheckoutSession.rejected, (state, action) => {
        state.error = action.payload as string
        state.loading = false
      })
      .addCase(getUserSubscriptions.fulfilled, (state, action) => {
        state.subscriptions = action.payload
        state.loading = false
      })
      .addCase(cancelSubscription.fulfilled, (state, action) => {
        state.subscriptions = state.subscriptions.filter((sub) => sub.id !== action.payload)
      })
  }
})

export default stripeSlice.reducer
export { stripePromise }
