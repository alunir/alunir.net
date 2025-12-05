"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  isInView?: boolean;
  delay?: number;
  variants?: Variants;
  hoverEffect?: "cyan" | "purple" | "none";
}

const hoverEffectMap = {
  cyan: "hover:neon-border",
  purple: "hover:neon-border-purple",
  none: "",
} as const;

export default function GlassCard({
  children,
  className = "",
  isInView = true,
  delay = 0,
  variants,
  hoverEffect = "none",
}: GlassCardProps) {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={variants ?? defaultVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay }}
      className={`glass-card rounded-2xl ${hoverEffectMap[hoverEffect]} transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
