import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth.reducer"
import stripeReducer from "./stripe.reducer"
import { useDispatch } from "react-redux"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage" // Uses localStorage

const persistConfig = (key: string) => ({
  key: key,
  storage
})

const persistedAuthReducer = persistReducer(persistConfig("auth"), authReducer)
const persistedStripeReducer = persistReducer(persistConfig("stripe"), stripeReducer)

export const store = configureStore({
  reducer: {
    stripe: persistedStripeReducer,
    auth: persistedAuthReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
