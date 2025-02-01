import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FlowDiagram } from "@/components/landing/flow-diagram";

import {
  ActivityIcon,
  CheckCircleIcon,
  ClockIcon,
  CodeIcon,
  DollarSignIcon,
  ZapIcon,
} from "lucide-react";
import { Mail, ShoppingCart, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Navigation */}
      <nav className="container mx-auto flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">convea.ai</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="#" className="text-sm hover:text-gray-600">
            About
          </Link>
          <Link href="#" className="text-sm hover:text-gray-600">
            Features
          </Link>
          <Link href="#" className="text-sm hover:text-gray-600">
            Blog
          </Link>
          <Button variant="outline" className="rounded-full">
            Join Waitlist
          </Button>
        </div>
      </nav>

      {/* Enhanced Hero Section with Interactive Flow */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-100/30 via-transparent to-transparent"></div>
        </div>

        <div className="container relative mx-auto px-6">
          <div className="grid min-h-[calc(100vh-5rem)] items-center lg:grid-cols-2">
            <div className="relative z-10 space-y-8 pt-24 lg:pt-0">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Increase your
                    <br />
                    Klaviyo revenue
                  </span>
                </h1>
                <p className="max-w-xl text-xl text-gray-600">
                  Our AI automatically processes customer events and creates
                  personalized email flows that boost your revenue by 25%
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-black text-white hover:bg-gray-800"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  See How It Works
                </Button>
              </div>
            </div>

            <div className="absolute right-0 top-0 h-full w-full lg:relative">
              <FlowDiagram />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center space-y-4">
          <p className="text-sm font-medium text-gray-600">
            Scroll to discover
          </p>
          <div className="h-12 w-[1px] animate-bounce bg-gradient-to-b from-gray-600 to-transparent"></div>
        </div>
      </section>

      {/* Value Proposition Section with Smooth Transition */}
      <section className="container mx-auto px-6 py-24">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-100/30 to-transparent"></div>
          <div className="relative space-y-12">
            <h2 className="text-4xl font-bold leading-tight lg:text-6xl">
              What if this would take you 5 minutes instead of weeks?
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="relative overflow-hidden rounded-3xl border-0 bg-black text-white">
                <div className="group aspect-[16/9] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q2H8TYxm3zXAjum8zyxzQyYas0jFAA.png"
                      alt="Complex Flow"
                      fill
                      className="scale-90 transform object-contain opacity-25 transition-all duration-500 group-hover:scale-100 group-hover:opacity-40"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-center">
                      <h3 className="mb-4 text-2xl font-bold">
                        Traditional Setup
                      </h3>
                      <p className="mb-4 text-lg text-gray-300">
                        Requires weeks of work with expensive consultants to
                        achieve sophisticated automation
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-center justify-center">
                          <ClockIcon className="mr-2 h-4 w-4" />
                          Weeks of setup time
                        </li>
                        <li className="flex items-center justify-center">
                          <DollarSignIcon className="mr-2 h-4 w-4" />
                          $10k+ in consulting fees
                        </li>
                        <li className="flex items-center justify-center">
                          <CodeIcon className="mr-2 h-4 w-4" />
                          Complex coding required
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="relative overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-purple-100 to-pink-100">
                <div className="aspect-[16/9] w-full p-6">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <h3 className="mb-4 text-2xl font-bold">
                        Convea.ai Solution
                      </h3>
                      <p className="mb-4 text-lg text-gray-700">
                        Deploy intelligent email flows that boost your revenue
                        by 25% with zero development effort
                      </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <div className="flex items-center text-green-700">
                          <CheckCircleIcon className="mr-2 h-5 w-5" />
                          <h4 className="font-semibold">Install</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Connect to your store
                        </p>
                        <p className="text-xl font-bold text-pink-500">
                          5 mins
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-green-700">
                          <ActivityIcon className="mr-2 h-5 w-5" />
                          <h4 className="font-semibold">AI Analysis</h4>
                        </div>
                        <p className="text-sm text-gray-600">Optimize flows</p>
                        <p className="text-xl font-bold text-pink-500">
                          24 hrs
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-green-700">
                          <ZapIcon className="mr-2 h-5 w-5" />
                          <h4 className="font-semibold">Go Live</h4>
                        </div>
                        <p className="text-sm text-gray-600">Start earning</p>
                        <p className="text-xl font-bold text-pink-500">
                          Instant
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="rounded-full bg-green-500/10 px-4 py-2 text-green-700">
                <span className="text-sm font-medium">5 minute setup</span>
              </div>
              <div className="rounded-full bg-green-500/10 px-4 py-2 text-green-700">
                <span className="text-sm font-medium">
                  Zero coding required
                </span>
              </div>
              <div className="rounded-full bg-green-500/10 px-4 py-2 text-green-700">
                <span className="text-sm font-medium">
                  AI-powered optimization
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="relative overflow-hidden rounded-3xl border-0 bg-black p-8 text-white">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 opacity-50 blur-2xl"></div>
            <div className="relative">
              <p className="mb-2 text-4xl font-bold">2x</p>
              <p className="text-gray-400">Average Basket Size</p>
            </div>
          </Card>
          <Card className="relative overflow-hidden rounded-3xl border-0 bg-purple-100 p-8">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-purple-300 opacity-50 blur-2xl"></div>
            <div className="relative">
              <p className="mb-2 text-4xl font-bold">90%</p>
              <p className="text-gray-600">Better Click Rates</p>
            </div>
          </Card>
          <Card className="relative overflow-hidden rounded-3xl border-0 bg-pink-100 p-8">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-pink-300 opacity-50 blur-2xl"></div>
            <div className="relative">
              <p className="mb-2 text-4xl font-bold">4x</p>
              <p className="text-gray-600">Increase in ARPU</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold">
            Smart flows that drive exponential growth
          </h2>
          <p className="text-xl text-gray-600">
            Leverage AI to create personalized customer journeys that convert
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
      </section>

      {/* Founder Experience */}
      <section className="container mx-auto px-6 py-24">
        <div className="rounded-3xl bg-black p-16 text-white">
          <div className="mb-12 max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold">
              Built by experienced founders
            </h2>
            <p className="text-gray-400">
              Our team brings deep expertise from leading tech companies in
              analytics, AI, and e-commerce
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/localytics-9h6Cgyp7PDQ85AsJh2DvuvS1dZ0PMv.png"
              alt="Localytics"
              width={200}
              height={80}
              className="object-contain brightness-200"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laserfocus-ulotQXcSwUSuz2ODUxOndYK2KoMiic.png"
              alt="Laserfocus"
              width={200}
              height={80}
              className="object-contain brightness-200"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/onefootball-zY5oeT2uMod4Vz1BeoqAgbJVNaU2Z9.png"
              alt="OneFootball"
              width={200}
              height={80}
              className="object-contain brightness-200"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yc-ksfZNR1OSDq3niurk0ZO8HiKVikHDy.png"
              alt="Y Combinator"
              width={200}
              height={80}
              className="object-contain brightness-200"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <Card className="relative overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-purple-100 to-pink-100 p-16">
          <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-300 to-pink-300 opacity-20 blur-3xl"></div>
          <div className="relative">
            <h2 className="mb-4 text-4xl font-bold">
              Ready to grow your revenue?
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Join our Design Partner Program and get 6 months free access
            </p>
            <Button
              size="lg"
              className="rounded-full bg-black text-white hover:bg-gray-800"
            >
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}

const features = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Smart Abandonment",
    description:
      "AI-powered recovery campaigns that convert 2x better than standard flows",
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "Smart Replenishment",
    description:
      "Automated reorder campaigns with dynamic product recommendations",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Smart Basket Rules",
    description: "Cross-sell optimization based on real-time purchase patterns",
  },
];
