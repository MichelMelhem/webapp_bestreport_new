import { Button } from "@/components/ui/button"
import { Background } from "@/components/layout/Background.tsx"
import Link from "next/link"
import { useRouter } from "next/router"

export default function SubscriptionSuccess() {
  const router = useRouter()

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
          <Link scroll={true} href="/#download">
            Download the app
          </Link>
        </Button>
        <Button variant="outline">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </Background>
  )
}
