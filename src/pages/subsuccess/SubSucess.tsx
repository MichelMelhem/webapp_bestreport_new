import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Background } from "@/components/layout/Background.tsx"
import { HashLink } from "react-router-hash-link"

export default function SubscriptionSuccess() {
  const navigate = useNavigate()

  return (
    <Background>
      <div className="space-y-2">
        <h1 className="text-6xl font-bold">Success!</h1>
        <h2 className="text-2xl font-semibold">Subscription Confirmed</h2>
      </div>

      <p className="text-lg text-muted-foreground">
        To use your subscription, please download the app and log in with your account.
      </p>

      <div className="flex flex-wrap justify-center gap-4 pt-2">
        <Button asChild>
          <HashLink smooth to="/#download">
            Download the app
          </HashLink>
        </Button>
        <Button variant="outline">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </Background>
  )
}
