import type React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import SignUpForm from "./components/SignUpForm.tsx"
import { Background } from "@/components/layout/Background.tsx"

export default function SignUp({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <Background>
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <SignUpForm />
          </CardContent>
        </Card>
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
          By clicking continue, you agree to our <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </Background>
  )
}
