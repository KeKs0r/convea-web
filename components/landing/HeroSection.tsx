import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-100/30 via-transparent to-transparent"></div>
      <div className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-purple-300/30 to-pink-300/30 blur-3xl"></div>
      <div className="absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-blue-300/30 to-purple-300/30 blur-3xl"></div>

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Increase your
              <br />
              Klaviyo revenue
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-xl text-gray-600">
            Deploy intelligent email flows that boost your revenue by 25% with
            zero development effort
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
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
      </div>
    </section>
  );
}
