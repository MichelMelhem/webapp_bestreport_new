import { useDispatch } from "react-redux"
import { registerUser } from "@/lib/redux/auth.reducer"
import { AppDispatch } from "@/lib/redux/store"

export default function SignUp() {
  const dispatch = useDispatch<AppDispatch>()
  console.log("SignUp component mounted")
  return (
    <div>
      <h2>Register</h2>
      <button
        onClick={() =>
          dispatch(registerUser({ email: "test@example.com", password: "password123" }))
        }>
        Register
      </button>
    </div>
  )
}
