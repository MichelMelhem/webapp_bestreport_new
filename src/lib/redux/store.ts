// lib/redux/store.ts
import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { persistReducer } from "redux-persist"
import storage from "./storage"
import authReducer from "./auth.reducer"
import stripeReducer from "./stripe.reducer"

const persistConfig = (key: string) => ({
  key,
  storage
})

const persistedAuthReducer = persistReducer(persistConfig("auth"), authReducer)
const persistedStripeReducer = persistReducer(persistConfig("stripe"), stripeReducer)

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    stripe: persistedStripeReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
