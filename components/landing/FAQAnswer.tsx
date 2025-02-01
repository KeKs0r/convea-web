"use client";
import { AccordionContent } from "@radix-ui/react-accordion";
import { AnimatePresence } from "framer-motion";

import { motion } from "framer-motion";

export function FAQAnswer({ answer }: { answer: string }) {
  return (
    <AccordionContent>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <p className="text-gray-600 pt-2">{answer}</p>
        </motion.div>
      </AnimatePresence>
    </AccordionContent>
  );
}
