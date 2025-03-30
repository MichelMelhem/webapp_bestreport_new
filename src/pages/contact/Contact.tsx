import AppBar from "@/components/layout/AppBar.tsx"

import Footer from "@/components/layout/Footer.tsx"
import React from "react"

const Contact = () => {
  return (
    <div className="bg-background h-screen">
      <AppBar />
      <main>
        <h1>Contact</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/">Return to Home</a>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
