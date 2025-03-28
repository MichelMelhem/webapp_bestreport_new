import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"Account" | "Subscription">("Account")

  return (
    <div className="max-w-5xl mx-auto p-10 h-screen">
      <div className="space-y-0.5 mb-6">
        <h2 className="text-2xl font-bold">Settings</h2>
        <p className="text-gray-500">Manage your account settings and subscription.</p>
      </div>

      <hr className="border-gray-200 my-6" />

      <div className="flex flex-col md:flex-row md:gap-8">
        <div className="md:w-64 shrink-0">
          <nav className="w-full">
            {["Account", "Subscription"].map((tab) => (
              <div key={tab} className="mb-1">
                <button
                  onClick={() => setActiveTab(tab as "Account" | "Subscription")}
                  className={cn(
                    activeTab === tab ? "bg-gray-100" : "hover:bg-gray-50",
                    "w-full text-left px-4 py-2 font-medium text-sm rounded-md"
                  )}>
                  {tab}
                </button>
              </div>
            ))}
          </nav>
        </div>

        <ScrollArea className="w-full h-[calc(100vh-187px)]">
          <div className="flex-1 mt-6 md:mt-0">
            {activeTab === "Account" && (
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
            )}

            {activeTab === "Subscription" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Subscription</h3>
                  <p className="text-gray-500 text-sm">
                    Manage your subscription plan and billing information.
                  </p>
                </div>

                <Card className="border border-gray-200">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>Current Plan</CardTitle>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        Active
                      </Badge>
                    </div>
                    <CardDescription>You are currently on the Pro plan.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-500">Plan</p>
                        <p className="font-medium">Pro Plan</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-500">Price</p>
                        <p className="font-medium">$15/month</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-500">Billing Cycle</p>
                        <p className="font-medium">Monthly</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-500">Expiry Date</p>
                        <p className="font-medium">April 28, 2025</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Manage Subscription</Button>
                  </CardFooter>
                </Card>

                <Card className="border border-gray-200">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      {/* If essai gratuit en cours*/}
                      <CardTitle>Upgrade Subscription</CardTitle>

                      {/* If essai gratuit fini
                        <CardTitle>No Active Subscription</CardTitle>
                       */}
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Inactive</Badge>
                    </div>
                    <CardDescription>
                      Choose a subscription plan to access premium features.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Card className="border border-gray-200 relative">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Pro Plan</CardTitle>
                          <CardDescription>
                            <span className="text-lg font-bold">15 €</span>
                            <span className="text-gray-500">/month</span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-2">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-green-500" />
                              <span>Unlimited worksites</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-green-500" />
                              <span>Unlimited stakeholders</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-green-500" />
                              <span>Unlimited building trades</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-green-500" />
                              <span>Unlimited plans</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-green-500" />
                              <span>Report generation</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="outline"
                            className="w-full border border-gray-300 rounded-md h-10">
                            Choose Pro
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card className="border border-gray-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Custom Plan</CardTitle>
                          <CardDescription>
                            <span className="text-lg font-bold">200 €</span>
                            <span className="text-gray-500">/month</span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-2">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-green-500" />
                              <span>Unlimited worksites</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-green-500" />
                              <span>Unlimited stakeholders</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-green-500" />
                              <span>Unlimited building trades</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-green-500" />
                              <span>Unlimited plans</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-green-500" />
                              <span>Custom report</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-green-500" />
                              <span>24h support</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-green-500" />
                              <span>Remote installation/configuration</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="outline"
                            className="w-full border border-gray-300 rounded-md h-10">
                            Contact sales
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-sm text-gray-500">
                  <p>
                    Need help with your subscription?{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Contact support
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
