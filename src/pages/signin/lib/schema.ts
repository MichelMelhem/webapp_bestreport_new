import { z } from "zod"

const signInSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty()
})

type signInFormValues = z.infer<typeof signInSchema>

export { signInSchema, type signInFormValues }
