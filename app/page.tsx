import {
  ArrowRight,
  CheckCircle,
  Mail,
  ShoppingCart,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/50 to-black">
      {/* Navigation */}
      <nav className="container mx-auto flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder.svg"
            alt="Convea.ai Logo"
            width={32}
            height={32}
            className="rounded-lg bg-pink-500"
          />
          <span className="text-xl font-bold text-white">convea.ai</span>
        </div>
        <Button
          variant="secondary"
          className="bg-pink-500 text-white hover:bg-pink-600"
        >
          Join Waitlist
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Increase your Klaviyo revenue
          <span className="block text-gray-400">with no extra work</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
          Make your Klaviyo email flows smarter with no development work. Deploy
          AI-powered flows in minutes instead of weeks.
        </p>
        <Button size="lg" className="bg-pink-500 text-white hover:bg-pink-600">
          Join Waitlist
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>

      {/* Flow Diagram */}
      <section className="container mx-auto px-6 py-12">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q1h5c0oGpW55nd4giZljMjAwDMK9IQ.png"
          alt="Convea.ai Smart Flows Diagram"
          width={1200}
          height={400}
          className="mx-auto rounded-xl"
        />
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Smart Flows that Drive Revenue
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Cart Abandonment</CardTitle>
              <CardDescription>AI-powered recovery campaigns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-green-500">
                <TrendingUp className="h-5 w-5" />
                <span>2x average revenue per user</span>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  User-specific coupon generation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Smart timing optimization
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Smart Replenishment</CardTitle>
              <CardDescription>Automated reorder campaigns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-green-500">
                <TrendingUp className="h-5 w-5" />
                <span>1.5x revenue per user</span>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Dynamic product recommendations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  AI-generated subject lines
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Smart Basket Rules</CardTitle>
              <CardDescription>Cross-sell optimization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-green-500">
                <TrendingUp className="h-5 w-5" />
                <span>40% increase in order value</span>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Frequently bought together items
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Hourly updated recommendations
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          How It Works
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-500 text-white">
                1
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Install Our App
                </h3>
                <p className="text-gray-400">
                  Connect Convea.ai to your Shopify store in just 5 minutes
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-500 text-white">
                2
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  AI Analysis
                </h3>
                <p className="text-gray-400">
                  Our AI analyzes your customer behavior and creates optimized
                  flows
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-500 text-white">
                3
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Watch Revenue Grow
                </h3>
                <p className="text-gray-400">
                  See immediate results with our smart, automated email flows
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8">
            <div className="absolute inset-0 rounded-xl bg-gray-900/50 backdrop-blur-sm" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-4">
                <ShoppingCart className="h-8 w-8 text-pink-500" />
                <div>
                  <p className="text-2xl font-bold text-white">2x</p>
                  <p className="text-gray-400">Average Basket Size</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-8 w-8 text-pink-500" />
                <div>
                  <p className="text-2xl font-bold text-white">90%</p>
                  <p className="text-gray-400">Better Click Rates</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Sparkles className="h-8 w-8 text-pink-500" />
                <div>
                  <p className="text-2xl font-bold text-white">4x</p>
                  <p className="text-gray-400">Increase in ARPU</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 p-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to Supercharge Your Email Revenue?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Join our Design Partner Program and get 6 months free access.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-pink-600 hover:bg-gray-100"
          >
            Join Waitlist
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
