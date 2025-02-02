import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  ClockIcon,
  DollarSignIcon,
  CodeIcon,
  CheckCircleIcon,
  ActivityIcon,
  ZapIcon,
} from "lucide-react";

export default function ValuePropositionSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-100/30 to-transparent"></div>
        <div className="relative space-y-12">
          <h2 className="text-4xl font-bold leading-tight lg:text-6xl">
            What if this would take you 5 minutes instead of weeks?
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="relative overflow-hidden rounded-3xl border-0">
              <div className="relative w-full h-full">
                <Image
                  src="/klaviyo-flow-overload-2.png"
                  alt="Complex Flow"
                  fill
                  className="object-cover w-full h-full brightness-110 transition-all duration-500 group-hover:scale-110 group-hover:blur-none"
                />
                <div className="absolute inset-0 bg-white/80 transition-opacity duration-500 group-hover:opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <h3 className="mb-4 text-2xl font-bold text-black">
                      Traditional Setup
                    </h3>
                    <p className="mb-4 text-lg text-gray-700">
                      Requires weeks of work with expensive consultants to
                      achieve sophisticated automation
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
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
              <div className="h-full w-full p-6">
                <div className="flex h-full flex-col justify-between gap-8">
                  <div>
                    <h3 className="mb-4 text-2xl font-bold">
                      Convea.ai Solution
                    </h3>
                    <p className="mb-4 text-lg text-gray-700">
                      Deploy intelligent email flows that boost your revenue by
                      25% with zero development effort
                    </p>
                  </div>
                  <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
                    <div className="space-y-3 py-2">
                      <div className="flex items-center text-green-700">
                        <CheckCircleIcon className="mr-2 h-5 w-5" />
                        <h4 className="font-semibold">Install</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Connect to your store
                      </p>
                      <p className="text-xl font-bold text-pink-500">5 mins</p>
                    </div>
                    <div className="space-y-3 py-2">
                      <div className="flex items-center text-green-700">
                        <ActivityIcon className="mr-2 h-5 w-5" />
                        <h4 className="font-semibold">AI Analysis</h4>
                      </div>
                      <p className="text-sm text-gray-600">Optimize flows</p>
                      <p className="text-xl font-bold text-pink-500">24 hrs</p>
                    </div>
                    <div className="space-y-3 py-2">
                      <div className="flex items-center text-green-700">
                        <ZapIcon className="mr-2 h-5 w-5" />
                        <h4 className="font-semibold">Go Live</h4>
                      </div>
                      <p className="text-sm text-gray-600">Start earning</p>
                      <p className="text-xl font-bold text-pink-500">Instant</p>
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
              <span className="text-sm font-medium">Zero coding required</span>
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
  );
}
