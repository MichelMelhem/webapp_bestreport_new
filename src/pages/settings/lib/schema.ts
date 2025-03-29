import { z } from "zod"

const AccountSchema = z.object({
  lastname: z.string().nonempty(),
  firstname: z.string().nonempty(),
  email: z.string().email().nonempty(),
  password: z.string().nonempty()
})

type AccountFormValues = z.infer<typeof AccountSchema>

export { AccountSchema, type AccountFormValues }
