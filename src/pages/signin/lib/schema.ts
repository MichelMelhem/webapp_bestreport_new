import { z } from "zod"

const SignInSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty()
})

type SignInFormValues = z.infer<typeof SignInSchema>

export { SignInSchema, type SignInFormValues }
