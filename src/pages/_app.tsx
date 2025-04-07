// pages/_app.tsx
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "@/lib/redux/store"
import { Toaster } from "@/components/ui/sonner"
import '@/styles/globals.css'

function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Toaster richColors />
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    )
}

export default App
