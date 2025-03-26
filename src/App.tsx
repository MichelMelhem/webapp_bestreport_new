import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home.tsx"
import Account from "./pages/account/Account.tsx"
import Contact from "./pages/contact/Contact.tsx"
import SignIn from "./pages/signin/SignIn.tsx"
import SignUp from "./pages/signup/SignUp.tsx"
import Error from "./pages/error/Error.tsx"

import { ThemeProvider } from "./components/theme/ThemeProvider"

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<p className="text-white">Loading...</p>}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
