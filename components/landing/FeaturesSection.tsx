import {
  ArrowUpRight,
  Sparkles,
  Bell,
  ShoppingCart,
  Mail,
  MessageSquare,
  Tag,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CTAButton } from "../ui/cta-button";

const features = [
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Automated Notifications",
    description: "Get notified when important events happen in your store.",
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "Abandoned Cart Recovery",
    description: "Win back lost sales with automated email reminders.",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Personalized Emails",
    description: "Send targeted emails based on customer behavior.",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Automated Chatbots",
    description: "Engage customers with automated chatbots.",
  },
  {
    icon: <Tag className="h-6 w-6" />,
    title: "Product Recommendations",
    description: "Recommend products based on customer preferences.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Reach",
    description: "Reach customers worldwide with automated email campaigns.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mb-16 max-w-3xl">
        <h2 className="mb-4 text-4xl font-bold">
          Intelligent flows for every scenario
        </h2>
        <p className="text-xl text-gray-600">
          Our AI-powered flows automatically adapt to your customers&apos;
          behavior, maximizing engagement and revenue at every touchpoint
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <Card
            key={i}
            className="group relative overflow-hidden rounded-3xl border-0 p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"></div>
            <div className="relative space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="flex items-center gap-2 text-sm font-medium">
                Learn more
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* AI Automation Card */}
      <Card className="mt-12 overflow-hidden rounded-3xl border-0 bg-black p-12 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="mb-4 text-3xl font-bold">
            Having a hard time automating flows?
          </h3>
          <p className="mb-8 text-xl text-gray-400">
            Our AI assistant takes your instructions and turns them into
            sophisticated automation workflows. No coding required – just
            describe what you want to achieve.
          </p>
          <CTAButton size="lg">
            Try AI Automation
            <Sparkles className="ml-2 h-4 w-4" />
          </CTAButton>
        </div>
      </Card>
    </section>
  );
}
