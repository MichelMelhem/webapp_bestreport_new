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
import { error } from "console"
import internal from "stream"

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
  async ({ email, password }: { email: string; password: string }) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const userRef = doc(collection(db, "users"), userCredential.user.uid)
    const userdoc = await getDoc(userRef)

    let customerid: string = userdoc.data()["customer_id "]
    let rank: number = userdoc.data()["rank"]

    return { email: userCredential.user.email, stripeCustomerId: customerid, rank: rank }
  }
)

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({
    email,
    password,
    firstName,
    lastName
  }: {
    email: string
    password: string
    firstName: string
    lastName: string
  }) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(userCredential.user, { displayName: `${firstName} ${lastName}` })
    return userCredential.user.email
  }
)

export const socialLogin = createAsyncThunk("auth/socialLogin", async (provider: AuthProvider) => {
  const userCredential = await signInWithPopup(auth, provider)
  const userRef = doc(collection(db, "users"), userCredential.user.uid)
  const userdoc = await getDoc(userRef)

  let customerid: string = userdoc.data()["customer_id "]
  let rank: number = userdoc.data()["rank"]

  return { email: userCredential.user.email, stripeCustomerId: customerid, rank: rank }
})

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await signOut(auth)
  return null
})

const handleRejected = (state, action) => {
  console.log("AUTH ERROR : ", action.error.message)
  state.error = action.error.message
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
        state.user = action.payload
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
        state.loading = false
      })
      .addCase(loginUser.rejected, handleRejected)
      .addCase(registerUser.rejected, handleRejected)
      .addCase(socialLogin.rejected, handleRejected)
  }
})

export default authSlice.reducer
