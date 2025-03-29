import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useForm } from "@felte/react"
import { validator } from "@felte/validator-zod"
import { AccountSchema, type AccountFormValues } from "../lib/schema.ts"
import { reporter } from "@felte/reporter-react"
import { LoaderCircle } from "lucide-react"
import { toast } from "sonner"

const initialValues = {
  firstname: "Firas",
  lastname: "Maamoun",
  email: "firas.maamoun@gmail.com",
  password: "azerty123!"
}

export default function AccountSettings() {
  const { form, isValid, isSubmitting, reset, isDirty } = useForm({
    initialValues: initialValues,
    extend: [validator({ schema: AccountSchema }), reporter],
    onSubmit: handleSubmit
  })

  async function handleSubmit(values: AccountFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 5000)) // only for tests
    let success = true // only for tests
    if (success) {
      toast.success("Changement réussi")
    } else {
      toast.error("Erreur lors du changement")
      reset()
    }
  }

  function handleLogout() {
    alert("Logout : en cours de dev")
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
        <Button type="button" variant="destructive" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </form>
  )
}
