import { Link } from "react-router-dom"
import AppBar from "@/components/layout/AppBar.tsx"
import Footer from "@/components/layout/Footer.tsx"
import React from "react"

const Error = () => {
  return (
    <div className="bg-background h-screen">
      <AppBar />
      <main>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Return to Home</Link>
      </main>
      <Footer />
    </div>
  )
}

export default Error
