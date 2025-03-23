import React from "react"
import { motion } from "framer-motion"
import { Check, HelpCircle, ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Button } from "../ui/button"

interface PricingPlan {
  title: string
  price: string
  description: string
  features: { name: string; included: boolean }[]
  popular?: boolean
  buttonText?: string
}

const PricingSection = () => {
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
      buttonText: "Try Now"
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
      buttonText: "Subscribe Now"
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
      buttonText: "Contact Sales"
    }
  ]

  const yearlyPlans: PricingPlan[] = monthlyPlans.map((plan) => ({
    ...plan,
    price: `${parseInt(plan.price.replace("€", "")) * 10 * 0.8} €`,
    description: plan.description + " Save with annual billing."
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <section id="pricing" className="py-24 md:py-32 px-4 md:px-8 bg-[#0A0B0D] relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
            Pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Select the appropriate tier for your construction monitoring needs. All plans include
            our core reporting infrastructure.
          </motion.p>
        </div>

        <Tabs defaultValue="yearly" className="w-full max-w-5xl mx-auto mb-10">
          <TabsList className="grid w-full max-w-xs mx-auto grid-cols-2 bg-[#0F0F0F] rounded-none p-0.5 border border-gray-800">
            <TabsTrigger
              value="monthly"
              className="rounded-none data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none py-3">
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="rounded-none data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none py-3">
              Annual <div className="text-red-600 "> (Save 20%)</div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="monthly">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-px mt-12 bg-gray-800">
              {monthlyPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="bg-[#0A0B0D]">
                  <div
                    className={`h - full transition - all duration - 300 ${plan.popular ? "border-t-2 border-t-white" : ""}`}>
                    <div className="p-8 bg-[#0F0F0F]">
                      {plan.popular && (
                        <div className="inline-block bg-white text-black text-xs font-bold px-3 py-1 mb-4">
                          MOST POPULAR
                        </div>
                      )}
                      <h3 className="text-xl font-bold mb-2 text-white">{plan.title}</h3>
                      <p className="text-sm mb-6 text-gray-400 h-12">{plan.description}</p>
                      <div className="flex items-baseline mb-6">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-sm ml-2 text-gray-400">/month</span>
                      </div>
                      <button
                        className={`w - full py - 3 px - 4 font - medium transition - all duration - 300 ${
                          plan.popular
                            ? "bg-white text-black hover:bg-gray-100"
                            : "bg-[#0F0F0F] text-white border border-gray-700 hover:border-white/50"
                        }`}>
                        {plan.buttonText}
                      </button>
                    </div>

                    <div className="p-8 bg-[#0F0F0F] border-t border-gray-800">
                      <p className="text-sm font-medium mb-4 text-gray-300">FEATURES</p>
                      <ul className="space-y-4">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            {feature.included ? (
                              <Check className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                            ) : (
                              <HelpCircle className="h-5 w-5 text-gray-700 mr-3 mt-0.5 flex-shrink-0" />
                            )}
                            <span className={feature.included ? "text-gray-300" : "text-gray-600"}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="yearly">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-px mt-12 bg-gray-800">
              {yearlyPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="bg-[#0A0B0D]">
                  <div
                    className={`h - full transition - all duration - 300 ${plan.popular ? "border-t-2 border-t-white" : ""}`}>
                    <div className="p-8 bg-[#0F0F0F]">
                      {plan.popular && (
                        <div className="inline-block bg-white text-black text-xs font-bold px-3 py-1 mb-4">
                          MOST POPULAR
                        </div>
                      )}
                      <h3 className="text-xl font-bold mb-2 text-white">{plan.title}</h3>
                      <p className="text-sm mb-6 text-gray-400 h-12">{plan.description}</p>
                      <div className="flex items-baseline mb-6">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-sm ml-2 text-gray-400">/year</span>
                      </div>
                      <button
                        className={`w - full py - 3 px - 4 font - medium transition - all duration - 300 ${
                          plan.popular
                            ? "bg-white text-black hover:bg-gray-100"
                            : "bg-[#0F0F0F] text-white border border-gray-700 hover:border-white/50"
                        }`}>
                        {plan.buttonText}
                      </button>
                    </div>

                    <div className="p-8 bg-[#0F0F0F] border-t border-gray-800">
                      <p className="text-sm font-medium mb-4 text-gray-300">FEATURES</p>
                      <ul className="space-y-4">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            {feature.included ? (
                              <Check className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                            ) : (
                              <HelpCircle className="h-5 w-5 text-gray-700 mr-3 mt-0.5 flex-shrink-0" />
                            )}
                            <span className={feature.included ? "text-gray-300" : "text-gray-600"}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 p-8 bg-[#0F0F0F] border border-gray-800 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                You have further questions ?
              </h3>
              <p className="text-gray-400 mb-0">
                Our enterprise team can create a custom package for your specific requirements.
              </p>
            </div>
            <Button className="bg-[#0F0F0F] text-white border border-gray-700 hover:border-white/50 hover:bg-[#0F0F0F] rounded-none whitespace-nowrap flex items-center gap-2">
              Contact Enterprise Sales <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
