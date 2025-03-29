import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home.tsx"
import Settings from "@/pages/settings/Settings.tsx"
import Contact from "./pages/contact/Contact.tsx"
import NotFound from "@/pages/notfound/NotFound.tsx"

import SignIn from "@/pages/signin/SignIn.tsx"
import SignUp from "@/pages/signup/SignUp.tsx"
import { persistor, store } from "@/lib/redux/store.ts"
import { Provider } from "react-redux"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/sonner"
import { PersistGate } from "redux-persist/integration/react"
import CGU from "./pages/cgu/cgu.tsx"
import CGV from "./pages/cgv/cgv.tsx"
import ProtectedRoute from "./ProtectedRoute.tsx"
import SubscriptionSuccess from "./pages/subsucess/SubSucess.tsx"

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster richColors />
        <Suspense fallback={<p className="text-white">Loading...</p>}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="settings" element={<ProtectedRoute children={<Settings />} />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="cgu" element={<CGU />} />
            <Route path="cgv" element={<CGV />} />
            <Route path="subscription/sucess" element={<SubscriptionSuccess />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </PersistGate>
    </Provider>
  )
}

export default App
