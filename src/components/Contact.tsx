"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks";
import { CONTACT_EMAIL, ANIMATION } from "@/lib/constants";
import { Button } from "@/components/ui";

function MailIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

export default function Contact() {
  const { ref, isInView } = useSectionInView();

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={ANIMATION.fadeInUp.initial}
          animate={isInView ? ANIMATION.fadeInUp.animate : {}}
          transition={{ duration: ANIMATION.duration.slow }}
        >
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">GET IN TOUCH</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Interested in how a proprietary crypto trading family office operates
            with 100% in-house capital and algorithmic strategies?
            Reach out to discuss our approach and potential collaboration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: ANIMATION.duration.normal, delay: 0.3 }}
        >
          <Button href={`mailto:${CONTACT_EMAIL}`} variant="gradient" size="lg">
            <MailIcon />
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
