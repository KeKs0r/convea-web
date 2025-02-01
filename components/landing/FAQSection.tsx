import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "Currently we are looking for early adopters. If you are eligible you can use Convea for free for the next 3 months. After that you only pay us if we increase your revenue. We guarantee it will be only a small percentage of your Klaviyo base fee.",
  },
  {
    question: "What platforms does it support?",
    answer:
      "We currently support Shopify + Klaviyo integration. We're working on expanding our platform support in the future.",
  },
  {
    question: "How does Convea compare to existing Klaviyo features?",
    answer:
      "Convea enhances Klaviyo's capabilities by providing AI-driven optimization, automated flow creation, and advanced personalization. While Klaviyo offers powerful email marketing tools, Convea takes it a step further with intelligent automation and revenue optimization.",
  },
  {
    question: "How do I get started with Convea?",
    answer:
      "Getting started is easy! Simply sign up for our waitlist, and once you're approved, we'll guide you through a simple 5-minute setup process to connect your Shopify and Klaviyo accounts. Our AI will then analyze your data and start optimizing your flows within 24 hours.",
  },
  {
    question: "Is my data safe with Convea?",
    answer:
      "Absolutely. We take data privacy and security very seriously. Convea is SOC 2 compliant and uses industry-standard encryption to protect your data. We only access the information necessary to optimize your email flows and never share your data with third parties.",
  },
];

export default function FAQSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, index) => (
            <AccordionItem
              key={`item-${index + 1}`}
              value={`item-${index + 1}`}
            >
              <AccordionTrigger className="text-left text-xl font-bold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="text-gray-600 pt-2">{item.answer}</p>
                  </motion.div>
                </AnimatePresence>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
