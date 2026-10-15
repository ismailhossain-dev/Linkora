import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import SubscribeButton from "./SubscribeButton";
import { getSubscriptionStatus } from "../../_actions/getSubscriptionStatus";
import { Badge } from "@/components/ui/badge";

const pricingData = {
  price: 999,
  currency: "$",
  duration: "/yearly",
  features: [
    { id: 1, text: "Unlimited premium articles" },
    { id: 2, text: "Early access to new stories" },
    { id: 3, text: "Support independent journalism" },
  ],
};

export async function PricingSection() {
  const statusResult = await getSubscriptionStatus();

  const isActive = Boolean(
    statusResult.success && statusResult.data.isSubscribed,
  );
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex justify-between items-center">
          Premium Plan
          {isActive && <Badge>Active</Badge>}
        </CardTitle>

        <CardDescription>
          {isActive && statusResult.data.currentPeriodEnd
            ? `Renews on ${new Date(statusResult.data.currentPeriodEnd).toLocaleDateString()}`
            : "Unlock every premium story, cancel anytime."}
        </CardDescription>

        <div className="pt-4">
          <span className="text-4xl font-bold">
            {pricingData.currency}
            {pricingData.price}
          </span>
          <span className="text-muted-foreground">{pricingData.duration}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {pricingData.features.map((feature) => (
            <li key={feature.id} className="flex items-center gap-3 text-sm">
              <CheckIcon className="size-4 text-primary" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>

        {!isActive && <SubscribeButton />}
      </CardContent>
    </Card>
  );
}
