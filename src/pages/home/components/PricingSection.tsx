import React from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "@/lib/redux/store"
import { createCheckoutSession } from "@/lib/redux/stripe.reducer"

interface PricingPlan {
  title: string
  price: string
  description: string
  features: { name: string; included: boolean }[]
  popular?: boolean
  button: {
    label: string
    href: string
    onClick?: () => void
  }
}

const PricingSection = () => {
  const rank = useSelector((state: RootState) => state.auth.rank)
  const user = useSelector((state: RootState) => state.auth.user)
  const dispatch = useAppDispatch()

  const monthlyPlans: PricingPlan[] = [
    {
      title: "Trial",
      price: "0 €",
      description: "30-day trial with essential features for small projects.",
      features: [
        { name: "1 Worksite", included: true },
        { name: "30 days trial", included: true },
        { name: "Unlimited building trades", included: true },
        { name: "Unlimited plans", included: true },
        { name: "No report generation", included: false }
      ],
      button: {
        label: "Try Now",
        href: user == null ? "/signup" : "/#download"
      }
    },
    {
      title: "Pro",
      price: "15 €",
      description: "Full-featured plan for professionals handling multiple projects.",
      features: [
        { name: "Unlimited worksites", included: true },
        { name: "Unlimited stakeholders", included: true },
        { name: "Unlimited building trades", included: true },
        { name: "Unlimited plans", included: true },
        { name: "Report generation", included: true }
      ],
      button: {
        label: rank == 0 ? "Subscribe Now" : "You are already subscribed",
        href: user == null ? "/signup" : "/",
        onClick:
          rank == 0 && user != null
            ? () => {
                console.log("Creating checkout session")
                dispatch(createCheckoutSession(import.meta.env.VITE_MONTHLY_PLAN_ID as string))
              }
            : undefined
      },
      popular: true
    },
    {
      title: "Custom",
      price: "200 €",
      description: "Tailored solutions for large-scale projects with premium support.",
      features: [
        { name: "Unlimited worksites", included: true },
        { name: "Unlimited stakeholders", included: true },
        { name: "Unlimited building trades", included: true },
        { name: "Unlimited plans", included: true },
        { name: "Custom report", included: true },
        { name: "24h Support", included: true },
        { name: "Remote installation/configuration", included: true }
      ],
      button: {
        label: "Contact Sales",
        href: "/contact"
      }
    }
  ]

  const yearlyPlans: PricingPlan[] = monthlyPlans.map((plan) => ({
    ...plan,
    price: `${parseInt(plan.price) * 10 * 0.8} €`,
    description: plan.description + " Save 20% with annual billing.",
    button: {
      ...plan.button,
      onClick:
        plan.title === "Pro"
          ? () => {
              if (rank == 0 && user != null) {
                dispatch(createCheckoutSession(import.meta.env.VITE_YEARLY_PLAN_ID as string))
              }
            }
          : plan.button.onClick
    }
  }))

  return (
    <section id="pricing" className="relative py-24 md:py-32 px-4 md:px-8 bg-[#0A0B0D]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">Pricing</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
          Choose a plan that fits your construction monitoring needs.
        </p>
        <Tabs defaultValue="monthly" className="w-full mx-auto">
          <TabsList className="flex w-fit mx-auto bg-[#0F0F0F] rounded-md p-1 ring-1 ring-gray-700">
            <TabsTrigger
              value="monthly"
              className="flex-1 px-6 py-2 rounded-md transition-all duration-200 text-white hover:bg-gray-800 
      data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:shadow-md">
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="flex-1 px-6 py-2 rounded-md transition-all duration-200 text-white hover:bg-gray-800 
      data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:shadow-md">
              Annual <span className="text-red-500 text-sm ml-1 whitespace-nowrap">(Save 20%)</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="monthly">
            <PricingGrid plans={monthlyPlans} yearly={false} />
          </TabsContent>
          <TabsContent value="yearly">
            <PricingGrid plans={yearlyPlans} yearly={true} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

const PricingGrid = ({ plans, yearly }: { plans: PricingPlan[]; yearly: boolean }) => {
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mt-12">
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`relative w-full max-w-[340px] rounded-lg mx-auto bg-[#0F0F0F] border border-gray-800 p-8 
            ${plan.popular ? "border-2 border-white shadow-xl" : "shadow-md"}`}>
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="mb-8">
                <h3 className="text-3xl font-extrabold text-white mt-4 mb-2">{plan.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <div className="flex justify-center items-baseline mt-6 space-x-2">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-sm text-gray-400"> {yearly ? "/ year" : "/ month"}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 text-sm">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-400 mr-3" />
                    ) : (
                      <X className="h-5 w-5 text-gray-500 mr-3" />
                    )}
                    {feature.name}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              className={`w-full py-4 rounded-sm text-base font-semibold transition-all
    ${plan.popular ? "bg-white text-black hover:bg-gray-200" : "bg-[#1A1B1D] text-white hover:bg-[#222] border border-gray-700"}`}
              onClick={plan.button.onClick ?? (() => (window.location.href = plan.button.href))}>
              {plan.button.label}
            </Button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default PricingSection
