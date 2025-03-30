import React, { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/lib/firebase/firebaseConfig.ts" // Adjust the path as needed

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [])

  if (loading) return <div>Loading...</div>

  return user != null ? children : <Navigate to="/login" />
}

export default ProtectedRoute
