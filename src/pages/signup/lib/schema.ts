import { z } from "zod"

const SignUpSchema = z.object({
  lastname: z.string().nonempty(),
  firstname: z.string().nonempty(),
  email: z.string().email().nonempty(),
  password: z.string().nonempty()
})

type SignUpFormValues = z.infer<typeof SignUpSchema>

export { SignUpSchema, type SignUpFormValues }
