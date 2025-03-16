import React from "react";
import { motion } from "framer-motion";
import { Check, HelpCircle, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: { name: string; included: boolean }[];
  popular?: boolean;
  buttonText?: string;
}

const PricingSection = () => {
  const monthlyPlans: PricingPlan[] = [
    {
      title: "Standard",
      price: "$49",
      description:
        "Essential monitoring for small construction projects and individual contractors.",
      features: [
        { name: "Daily reports", included: true },
        { name: "Photo documentation", included: true },
        { name: "Basic analytics", included: true },
        { name: "Up to 3 projects", included: true },
        { name: "Email support", included: true },
        { name: "Advanced analytics", included: false },
        { name: "Team collaboration", included: false },
      ],
      buttonText: "Get Started",
    },
    {
      title: "Professional",
      price: "$99",
      description:
        "Advanced monitoring for medium-sized construction companies with multiple projects.",
      features: [
        { name: "Daily reports", included: true },
        { name: "Photo documentation", included: true },
        { name: "Basic analytics", included: true },
        { name: "Up to 10 projects", included: true },
        { name: "Priority email support", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Team collaboration", included: true },
        { name: "Custom reporting", included: false },
      ],
      popular: true,
      buttonText: "Try Professional",
    },
    {
      title: "Enterprise",
      price: "$199",
      description:
        "Institutional-grade monitoring for large construction firms with complex needs.",
      features: [
        { name: "Daily reports", included: true },
        { name: "Photo documentation", included: true },
        { name: "Basic analytics", included: true },
        { name: "Unlimited projects", included: true },
        { name: "24/7 phone support", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Team collaboration", included: true },
        { name: "Custom reporting", included: true },
        { name: "API access", included: true },
      ],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 px-4 md:px-8 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Select the appropriate tier for your construction monitoring needs. All plans include our core reporting infrastructure.
          </p>
        </div>

        <Tabs defaultValue="monthly" className="w-full max-w-4xl mx-auto mb-10">
          <TabsList className="grid w-full h-15 max-w-xs mx-auto grid-cols-2 bg-gray-200 rounded-lg p-1">
            <TabsTrigger value="monthly" className="rounded-lg py-3 text-gray-800">Monthly</TabsTrigger>
            <TabsTrigger value="yearly" className="rounded-lg py-3 text-gray-800">Annual (Save 20%)</TabsTrigger>
          </TabsList>

          <TabsContent value="monthly">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {monthlyPlans.map((plan, index) => (
                <div key={index} className={`p-6 border rounded-lg shadow-sm ${plan.popular ? "border-blue-500" : "border-gray-300"}`}>
                  {plan.popular && (
                    <div className="text-xs font-bold px-3 py-1 bg-black text-white rounded-full inline-block mb-4">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-sm mb-6 text-gray-600">{plan.description}</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm ml-2 text-gray-600">/month</span>
                  </div>
                  <Button className={`w-full ${plan.popular ? "bg-black text-white" : "bg-gray-200 text-gray-800"}`}>{plan.buttonText}</Button>
                  <div className="mt-6">
                    <p className="text-sm font-medium mb-4">FEATURES</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          {feature.included ? <Check className="h-5 w-5 text-black-500 mr-2" /> : <HelpCircle className="h-5 w-5 text-gray-400 mr-2" />}
                          <span className={feature.included ? "text-gray-900" : "text-gray-500"}>{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PricingSection;
