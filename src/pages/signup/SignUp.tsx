import type React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import SignUpForm from "./components/SignUpForm.tsx"
import { Background } from "@/components/layout/Background.tsx"
import { useNavigate } from "react-router-dom"

export default function SignUp({ className, ...props }: React.ComponentProps<"div">) {
  const navigate = useNavigate();

  return (
    <Background>
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <SignUpForm />
          </CardContent>
        </Card>
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
          By clicking continue, you agree to our <a onClick={() => {
            navigate("/cgv");
          }}>Terms of Service</a> and{" "}
          <a onClick={() => {
            navigate("/cgu");
          }}>Privacy Policy</a>.
        </div>
      </div>
    </Background>
  )
}
