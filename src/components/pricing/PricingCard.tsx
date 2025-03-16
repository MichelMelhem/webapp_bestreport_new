import React from "react";
import { Check } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText?: string;
  period?: string;
  onSelect?: () => void;
}

const PricingCard = ({
  title = "Basic",
  price = "$49",
  description = "Perfect for small construction projects and individual contractors.",
  features = [
    { name: "Daily reports", included: true },
    { name: "Photo documentation", included: true },
    { name: "Basic analytics", included: true },
    { name: "Up to 3 projects", included: true },
    { name: "Email support", included: true },
    { name: "Advanced analytics", included: false },
    { name: "Team collaboration", included: false },
  ],
  popular = false,
  buttonText = "Get Started",
  period = "month",
  onSelect = () => {},
}: PricingCardProps) => {
  return (
    <Card
      className={`w-full max-w-sm transition-all duration-300 hover:shadow-lg ${popular ? "border-primary shadow-md scale-105" : "border-border"}`}
    >
      <CardHeader className="space-y-1 text-center">
        {popular && (
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
            Popular
          </Badge>
        )}
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-extrabold">{price}</span>
          <span className="text-sm text-muted-foreground ml-1">/{period}</span>
        </div>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature.included ? (
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              ) : (
                <div className="h-5 w-5 mr-2 flex-shrink-0" />
              )}
              <span
                className={
                  feature.included
                    ? "text-foreground"
                    : "text-muted-foreground line-through"
                }
              >
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onSelect}
          className={`w-full ${popular ? "bg-primary hover:bg-primary/90" : ""}`}
          variant={popular ? "default" : "outline"}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
