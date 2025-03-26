import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home.tsx"
import Account from "./pages/account/Account.tsx"
import Contact from "./pages/contact/Contact.tsx"
import Error from "./pages/error/Error.tsx"

import SignIn from "@/pages/signin/SignIn.tsx"
import SignUp from "@/pages/signup/SignUp.tsx"
import { store } from "@/lib/redux/store.ts"
import { Provider } from "react-redux"
import { Suspense } from "react"

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<p className="text-white">Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </Provider>
  )
}

export default App
