import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  AuthProvider
} from "firebase/auth"
import { auth, db } from "@/lib/firebase/firebaseConfig.ts"
import { collection, doc, getDoc } from "firebase/firestore"

interface AuthState {
  user: string | null
  rank: number
  loading: boolean
  stripeCustomerId: string | null
  error: string | null
}

const initialState: AuthState = {
  user: null,
  rank: 0,
  loading: false,
  stripeCustomerId: null,
  error: null
}

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const userRef = doc(collection(db, "users"), userCredential.user.uid)
      const userdoc = await getDoc(userRef)

      let customerid: string = userdoc.data()["customer_id"]
      let rank: number = userdoc.data()["rank"]

      return { email: userCredential.user.email, stripeCustomerId: customerid, rank: rank }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (
    {
      email,
      password,
      firstName,
      lastName
    }: {
      email: string
      password: string
      firstName: string
      lastName: string
    },
    { rejectWithValue }
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(userCredential.user, { displayName: `${firstName} ${lastName}` })
      const userRef = doc(collection(db, "users"), userCredential.user.uid)
      const userdoc = await getDoc(userRef)

      let customerid: string = userdoc.data["customer_id"]
      return { user: userCredential.user.email, customer_id: customerid }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const socialLogin = createAsyncThunk(
  "auth/socialLogin",
  async (provider: AuthProvider, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithPopup(auth, provider)
      const userRef = doc(collection(db, "users"), userCredential.user.uid)
      const userdoc = await getDoc(userRef)

      let customerid: string = userdoc.data()["customer_id"]
      let rank: number = userdoc.data()["rank"]

      return { email: userCredential.user.email, stripeCustomerId: customerid, rank: rank }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await signOut(auth)
  return null
})

const handleRejected = (state, action) => {
  console.log("AUTH ERROR : ", action.payload)
  state.error = action.payload
  state.loading = false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(socialLogin.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.email
        state.stripeCustomerId = action.payload.stripeCustomerId
        state.loading = false
        state.rank = action.payload.rank
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.stripeCustomerId = action.payload.customer_id
        state.loading = false
      })
      .addCase(socialLogin.fulfilled, (state, action) => {
        state.user = action.payload.email
        state.stripeCustomerId = action.payload.stripeCustomerId
        state.loading = false
        state.rank = action.payload.rank
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null
        state.rank = 0
        state.stripeCustomerId = null
        state.loading = false
      })
      .addCase(loginUser.rejected, handleRejected)
      .addCase(registerUser.rejected, handleRejected)
      .addCase(socialLogin.rejected, handleRejected)
  }
})

export default authSlice.reducer
