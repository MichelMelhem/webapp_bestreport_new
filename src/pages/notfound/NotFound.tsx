import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Background } from "@/components/layout/Background.tsx"

export default function NotFound() {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <Background>
      <div className="space-y-2">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
      </div>

      <p className="text-lg text-muted-foreground">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <div className="flex flex-wrap justify-center gap-4 pt-2">
        <Button variant="outline" onClick={handleGoBack}>
          Go Back
        </Button>
        <Button asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </Background>
  )
}
