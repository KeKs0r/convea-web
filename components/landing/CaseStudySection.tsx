"use client";

import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { motion } from "framer-motion";

const stats = [
  {
    value: "2x",
    label: "Average Basket Size",
    color: "from-pink-500 to-red-500",
  },
  {
    value: "90%",
    label: "Better Click Rates",
    color: "from-purple-500 to-indigo-500",
  },
  {
    value: "4x",
    label: "Increase in ARPU",
    color: "from-blue-500 to-cyan-500",
  },
];

export default function CaseStudySection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Success Story: E-commerce Giant Boosts Revenue
        </h2>
        <p className="text-xl text-gray-600">
          See how a leading online retailer transformed their email marketing
          with Convea.ai
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3 mb-12">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="relative overflow-hidden rounded-3xl border-0 bg-white p-8 shadow-lg">
              <div
                className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${stat.color} opacity-20 blur-2xl`}
              ></div>
              <div className="relative">
                <p
                  className={`mb-2 text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <CTAButton size="lg">Request Full Case Study</CTAButton>
      </motion.div>
    </section>
  );
}
