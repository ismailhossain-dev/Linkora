
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import SubscribeButton from "./SubscribeButton";


const pricingData = {
  title: "Premium Plan",
  description: "Unlock every premium story, cancel anytime.",
  price: 9.99,
  currency: "$",
  duration: "/month",
  features: [
    { id: 1, text: "Unlimited premium articles" },
    { id: 2, text: "Early access to new stories" },
    { id: 3, text: "Support independent journalism" },
  ],
};

export function PricingSection() {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {pricingData.title}
        </CardTitle>

        <CardDescription>
          {pricingData.description}
        </CardDescription>

        <div className="pt-4">
          <span className="text-4xl font-bold">
            {pricingData.currency}
            {pricingData.price}
          </span>
          <span className="text-muted-foreground">
            {pricingData.duration}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {pricingData.features.map((feature) => (
            <li
              key={feature.id}
              className="flex items-center gap-3 text-sm"
            >
              <CheckIcon className="size-4 text-primary" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>

       <SubscribeButton/>
      </CardContent>
    </Card>
  );
}
