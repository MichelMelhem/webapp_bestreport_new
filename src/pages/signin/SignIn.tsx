import type React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import SignInForm from "./components/SignInForm.tsx"
import { Background } from "@/components/layout/Background.tsx"


export default function SignIn({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <Background>
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <SignInForm />
          </CardContent>
        </Card>
        <div className="flex flex-col gap-4">
          <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
            By clicking continue, you agree to our <a href="/cgu">Terms of Service</a> and{" "}
            <a href="/cgv">Privacy Policy</a>.
          </div>
          <a
            href="/"
            className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
            Return to Home
          </a>
        </div>
      </div>
    </Background>
  )
}
