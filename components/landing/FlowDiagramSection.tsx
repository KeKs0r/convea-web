import Image from "next/image";
import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function FlowDiagramSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-100/30 to-transparent"></div>
        <Card className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-white to-gray-50/50 p-8 shadow-xl backdrop-blur-sm">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="mb-1 text-2xl font-bold">
                Smart Flow Architecture
              </h2>
              <p className="text-gray-600">
                Automated intelligence for your email campaigns
              </p>
            </div>
          </div>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl bg-white p-12">
            <Image
              src="/flow.svg"
              alt="Smart Flow Diagram"
              fill
              className="object-contain p-8"
            />
          </div>
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">Active Flows</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="text-sm text-gray-600">AI Optimization</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span className="text-sm text-gray-600">Revenue Tracking</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
