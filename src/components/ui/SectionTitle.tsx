"use client";

import { motion } from "framer-motion";
import { ANIMATION } from "@/lib/constants";

interface SectionTitleProps {
  highlight: string;
  text: string;
  highlightColor?: "cyan" | "purple" | "blue";
  gradientFrom?: string;
  gradientTo?: string;
  isInView: boolean;
}

const colorMap = {
  cyan: "text-neon-cyan",
  purple: "text-neon-purple",
  blue: "text-neon-blue",
} as const;

export default function SectionTitle({
  highlight,
  text,
  highlightColor = "cyan",
  gradientFrom = "neon-cyan",
  gradientTo = "neon-purple",
  isInView,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={ANIMATION.fadeInUp.initial}
      animate={isInView ? ANIMATION.fadeInUp.animate : {}}
      transition={{ duration: ANIMATION.duration.slow }}
      className="text-center mb-20"
    >
      <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-5xl font-bold mb-6">
        <span className={colorMap[highlightColor]}>{highlight}</span>{" "}
        <span className="text-white">{text}</span>
      </h2>
      <div
        className={`w-24 h-1 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} mx-auto`}
      />
    </motion.div>
  );
}
