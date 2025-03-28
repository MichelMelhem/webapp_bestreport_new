import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function AccountSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-gray-500 text-sm">
          Manage your personal information and account security.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="firstname">Firstname</Label>
          <Input type="text" id="firstname" defaultValue="John" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastname">Lastname</Label>
          <Input type="text" id="lastname" defaultValue="Doe" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" defaultValue="john.doe@example.com" />
          <p className="text-xs text-gray-500 mt-1">
            This is the email address you use to sign in.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" defaultValue="azerty123" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <Button variant="outline">Save changes</Button>
        <Button variant="destructive">Logout</Button>
      </div>
    </div>
  )
}
