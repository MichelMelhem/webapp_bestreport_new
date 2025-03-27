import { Label } from "@/components/ui/label.tsx"
import { Input } from "@/components/ui/input.tsx"
import { reporter, ValidationMessage } from "@felte/reporter-react"
import { Button } from "@/components/ui/button.tsx"
import { Link, useNavigate } from "react-router-dom"
import type React from "react"
import { useForm } from "@felte/react"
import { validator } from "@felte/validator-zod"
import { signUpFormValues, signUpSchema } from "@/pages/signup/lib/schema.ts"
import { LoaderCircle } from "lucide-react"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "@/lib/redux/store"
import { loginUser, registerUser } from "@/lib/redux/auth.reducer"

export default function SignInForm() {
  const { form, isValid, isSubmitting } = useForm({
    extend: [validator({ schema: signUpSchema }), reporter],
    onSubmit: handleSubmit
  })
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const isLoading = useSelector((state: RootState) => state.auth.loading);

  async function handleSubmit(values: signUpFormValues) {
    let action = await dispatch(registerUser({ email: values.email, password: values.password, firstName: values.firstname, lastName: values.lastname }));
    if (registerUser.fulfilled.match(action)) {
      navigate("/")
    }
  }

  return (
    <form ref={form} className="p-6 md:p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Welcome</h1>
          <p className="text-balance text-muted-foreground">Create your BestReport account</p>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lastname">Lastname</Label>
          <Input name="lastname" id="lastname" type="text" />
          <ValidationMessage for="lastname">
            {(messages) => <span className="text-xs text-red-600">{messages?.[0]}</span>}
          </ValidationMessage>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="firstname">Firstname</Label>
          <Input name="firstname" id="firstname" type="text" />
          <ValidationMessage for="firstname">
            {(messages) => <span className="text-xs text-red-600">{messages?.[0]}</span>}
          </ValidationMessage>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input name="email" id="email" type="email" placeholder="m@example.com" />
          <ValidationMessage for="email">
            {(messages) => <span className="text-xs text-red-600">{messages?.[0]}</span>}
          </ValidationMessage>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input name="password" id="password" type="password" />
          <ValidationMessage for="password">
            {(messages) => <span className="text-xs text-red-600">{messages?.[0]}</span>}
          </ValidationMessage>
        </div>
        <Button type="submit" disabled={!isValid() || isSubmitting() || isLoading} >
          {isSubmitting() || isLoading ? <LoaderCircle className="animate-spin" /> : "Create"}
        </Button>

        <div className="text-center text-sm">
          You have an account?{" "}
          <Link to="/signin" className="underline underline-offset-4">
            {" "}
            Sign in
          </Link>
        </div>
      </div>
    </form >
  )
}
