import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useNavigate } from "react-router"

export default function SettingsHeader() {
  const navigate = useNavigate()

  return (
    <div className="space-y-0.5 mb-6">
      <div className="flex items-center gap-1 mb-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8"
                onClick={() => navigate("/")}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-black">
              <p>Return Home</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <h2 className="text-2xl font-bold">Settings</h2>
      </div>
      <p className="text-gray-500">Manage your account settings and subscription.</p>
    </div>
  )
}
