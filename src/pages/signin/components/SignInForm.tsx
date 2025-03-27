import { Label } from "@/components/ui/label.tsx"
import { Input } from "@/components/ui/input.tsx"
import { reporter, ValidationMessage } from "@felte/reporter-react"
import { Button } from "@/components/ui/button.tsx"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "@felte/react"
import { validator } from "@felte/validator-zod"
import { signInFormValues, signInSchema } from "@/pages/signin/lib/schema.ts"
import { LoaderCircle } from "lucide-react"
import { RootState, useAppDispatch } from "@/lib/redux/store"
import { loginUser, socialLogin } from "@/lib/redux/auth.reducer"
import { GoogleAuthProvider, OAuthProvider, sendPasswordResetEmail } from "firebase/auth"
import { useSelector } from "react-redux"
import { auth } from "@/lib/firebase/firebaseConfig"
import { toast } from "react-hot-toast";
import { useState } from "react"
export default function SignInForm() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [resetError, setResetError] = useState("");
  const isLoading = useSelector((state: RootState) => state.auth.loading);

  const { form, isValid, isSubmitting } = useForm({
    extend: [validator({ schema: signInSchema }), reporter],
    onSubmit: handleSubmit
  })


  async function handleForgotPassword(email: string | undefined) {
    if (!email) {
      setResetError("Please enter a valid email.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setResetError("");
      toast.success("Password reset email sent.");
    } catch (error) {
      setResetError("Error sending reset email. Try again.");
      console.error(error);
    }
  }
  async function handleSubmit(values: signInFormValues) {
    const action = await dispatch(loginUser({ email: values.email, password: values.password }));
    if (loginUser.fulfilled.match(action)) {
      navigate("/")
    }
    console.log(values)
  }

  return (
    <form ref={form} className="p-6 md:p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-balance text-muted-foreground">Login to your BestReport account</p>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input name="email" id="email" type="email" placeholder="m@example.com" />
          <ValidationMessage for="email">
            {(messages) => <span className="text-xs text-red-600">{messages?.[0]}</span>}
          </ValidationMessage>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <span className="ml-auto"></span>
            <a onClick={() => {
              const emailInput = document.getElementById("email") as HTMLInputElement;
              handleForgotPassword(emailInput?.value);

            }} href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
              Forgot your password?
            </a>

          </div>
          {resetError && <span className="text-xs text-red-600 ml-auto">{resetError}</span>}

          <Input name="password" id="password" type="password" />
          <ValidationMessage for="password">
            {(messages) => <span className="text-xs text-red-600">{messages?.[0]}</span>}
          </ValidationMessage>
        </div>
        <Button type="submit" className="w-full" disabled={!isValid() || isSubmitting() || isLoading}>
          {isSubmitting() || isLoading ? <LoaderCircle className="animate-spin" /> : "Login"}
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full" disabled={isLoading} onClick={async () => {
            const action = dispatch(socialLogin(new OAuthProvider('apple.com')))
            if (socialLogin.fulfilled.match(action)) {
              navigate("/")
            };
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                fill="currentColor"
              />
            </svg>
            <span className="sr-only">Login with Apple</span>
          </Button>
          <Button variant="outline" className="w-full" disabled={isLoading} onClick={async () => {
            const action = await dispatch(socialLogin(new GoogleAuthProvider()));
            if (socialLogin.fulfilled.match(action)) {
              navigate("/")
            };
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            <span className="sr-only">Login with Google</span>
          </Button>
        </div>
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="underline underline-offset-4">
            {" "}
            Sign up
          </Link>
        </div>
      </div>
    </form >
  )
}
