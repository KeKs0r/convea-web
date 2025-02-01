import { Card } from "@/components/ui/card";

export default function StatsSection() {
  return (
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
  );
}
