import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth"
import { auth, db } from "@/lib/firebase/firebaseConfig.ts"
import { getDoc } from "firebase/firestore"

interface AuthState {
  user: string | null
  loading: boolean
  stripeCustomerId: string | null
  error: string | null
}

const initialState: AuthState = {
  user: null,
  loading: false,
  stripeCustomerId: null,
  error: null
}

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: { email: string; password: string }) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user.email
  }
)

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }: { email: string; password: string }) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential.user.email
  }
)

export const socialLogin = createAsyncThunk("auth/socialLogin", async (provider: any) => {
  const userCredential = await signInWithPopup(auth, provider)
  let userdoc = await getDoc("users/userCredential.user.uid")
  let customerid: string = userdoc.data()["stripeCustomerId"]

  return userCredential.user.email
})

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await signOut(auth)
  return null
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
      })
      .addCase(socialLogin.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null
      })
  }
})

export default authSlice.reducer
