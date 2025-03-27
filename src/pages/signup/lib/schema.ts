import { z } from "zod"

const signUpSchema = z.object({
  lastname: z.string().nonempty(),
  firstname: z.string().nonempty(),
  email: z.string().email().nonempty(),
  password: z.string().nonempty()
})

type signUpFormValues = z.infer<typeof signUpSchema>

export { signUpSchema, type signUpFormValues }
