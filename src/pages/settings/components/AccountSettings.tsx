import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useForm } from "@felte/react"
import { validator } from "@felte/validator-zod"
import { AccountSchema, type AccountFormValues } from "../lib/schema.ts"
import { reporter } from "@felte/reporter-react"
import { LoaderCircle } from "lucide-react"
import { toast } from "sonner"
import { auth } from "@/lib/firebase/firebaseConfig.ts"

import { useAppDispatch } from "@/lib/redux/store.ts"
import { updateAccount } from "@/lib/redux/auth.reducer.ts"

export default function AccountSettings() {
  const user = auth.currentUser

  const dispatch = useAppDispatch()
  const names = user.displayName?.split(" ") || ["", ""]

  const initialValues = {
    firstname: names[0],
    lastname: names[1],
    email: user.email || "",
    password: "randompassword"
  }
  const { form, isValid, isSubmitting, reset, isDirty } = useForm({
    initialValues: initialValues,
    extend: [validator({ schema: AccountSchema }), reporter],
    onSubmit: handleSubmit
  })

  async function handleSubmit(values: AccountFormValues) {
    const action = await dispatch(updateAccount(values))
    if (updateAccount.fulfilled.match(action)) {
      await auth.currentUser.reload()
      toast.success("Update successful")
    } else if (updateAccount.rejected.match(action)) {
      toast.error(`Update failed: ${action.payload}`)
      reset()
    }
  }

  return (
    <form ref={form} className="space-y-6 p-1">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-gray-500 text-sm">
          Manage your personal information and account security.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="firstname">Firstname</Label>
          <Input type="text" id="firstname" name="firstname" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastname">Lastname</Label>
          <Input type="text" id="lastname" name="lastname" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" />
          <p className="text-xs text-gray-500 mt-1">
            This is the email address you use to sign in.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <Button
          variant="outline"
          type="submit"
          disabled={!isValid() || isSubmitting() || !isDirty()}>
          {isSubmitting() ? <LoaderCircle className="animate-spin" /> : "Save changes"}
        </Button>
      </div>
    </form>
  )
}
