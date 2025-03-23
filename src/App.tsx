import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/home"
import { ThemeProvider } from "./components/theme/ThemeProvider"

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<p className="text-white">Loading...</p>}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
