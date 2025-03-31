import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Check, LoaderCircle } from "lucide-react"
import { useSelector } from "react-redux"
import { type RootState, useAppDispatch } from "@/lib/redux/store"
import { useEffect, useState } from "react"
import { createCheckoutSession, getUserSubscriptions } from "@/lib/redux/stripe.reducer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SubscriptionSettings() {
  const rank = useSelector((state: RootState) => state.auth.rank)
  const loading = useSelector((state: RootState) => state.stripe.loading)
  const subscription = useSelector((state: RootState) => state.stripe.subscription)
  const dispatch = useAppDispatch()
  const [billingInterval, setBillingInterval] = useState<"monthly" | "annual">("monthly")

  useEffect(() => {
    console.log(rank);

    if (rank == 1) {
      dispatch(getUserSubscriptions())
    }
  }, [dispatch, rank])

  // Calculate annual prices (20% discount)
  const monthlyProPrice = 15
  const annualProPrice = Math.round(monthlyProPrice * 12 * 0.8)
  const monthlyCustomPrice = 200
  const annualCustomPrice = Math.round(monthlyCustomPrice * 12 * 0.8)

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Subscription</h3>
        <p className="text-gray-500 text-sm">
          Manage your subscription plan and billing information.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-24">
          <LoaderCircle className="animate-spin" />
        </div>
      ) : rank == 1 && subscription != null ? (
        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Current Plan</CardTitle>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
            </div>
            <CardDescription>You are currently on the {subscription.name} plan.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-500">Plan</p>
                <p className="font-medium">{subscription.name}</p>
              </div>
              <div>
                <p className="font-medium text-gray-500">Price</p>
                <p className="font-medium">
                  €{subscription.price}/{subscription.billingInterval}
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-500">Billing Cycle</p>
                <p className="font-medium">{subscription.billingInterval}</p>
              </div>
              <div>
                <p className="font-medium text-gray-500">Expiry Date</p>
                <p className="font-medium">{subscription.periodEnd}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => {
                window.location.assign("https://billing.stripe.com/p/login/eVa9CDfDY8wY4CY8ww")
              }}
              variant="outline">
              Manage Subscription
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Upgrade Subscription</CardTitle>
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Inactive</Badge>
            </div>
            <CardDescription>
              Choose a subscription plan to access premium features.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4 space-y-6">
            <Tabs
              defaultValue="monthly"
              className="w-full"
              onValueChange={(v) => setBillingInterval(v as "monthly" | "annual")}>
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annual" className="relative">
                  Annual
                  <span className="absolute -top-2 -right-2 bg-green-100 text-green-800 text-xs px-1 rounded">
                    Save 20%
                  </span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="monthly" className="mt-0">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="border border-gray-200 relative">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Pro Plan</CardTitle>
                      <CardDescription>
                        <span className="text-lg font-bold">{monthlyProPrice} €</span>
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
                        onClick={() =>
                          dispatch(
                            createCheckoutSession(import.meta.env.VITE_MONTHLY_PLAN_ID as string)
                          )
                        }
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
                        <span className="text-lg font-bold">{monthlyCustomPrice} €</span>
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
                        <a href="mailto:contact@bestreport.fr">Contact sales</a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="annual" className="mt-0">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="border border-gray-200 relative">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Pro Plan</CardTitle>
                      <CardDescription>
                        <span className="text-lg font-bold">{annualProPrice} €</span>
                        <span className="text-gray-500">/year</span>
                        <div className="text-xs text-green-600 mt-1">
                          Save {Math.round(monthlyProPrice * 12 - annualProPrice)} € per year
                        </div>
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
                        onClick={() =>
                          dispatch(
                            createCheckoutSession(import.meta.env.VITE_ANNUAL_PLAN_ID as string)
                          )
                        }
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
                        <span className="text-lg font-bold">{annualCustomPrice} €</span>
                        <span className="text-gray-500">/year</span>
                        <div className="text-xs text-green-600 mt-1">
                          Save {Math.round(monthlyCustomPrice * 12 - annualCustomPrice)} € per year
                        </div>
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
                        <a href="mailto:contact@bestreport.fr">Contact sales</a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      <div className="text-sm text-gray-500">
        <p>
          Need help with your subscription?{" "}
          <a href="mailto:contact@bestreport.fr" className="text-blue-600 hover:underline">
            Contact support
          </a>
        </p>
      </div>
    </div>
  )
}
