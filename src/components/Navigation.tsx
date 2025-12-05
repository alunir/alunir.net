"use client";

import { motion } from "framer-motion";
import { useScrolled } from "@/hooks";
import { NAV_ITEMS, CONTACT_EMAIL } from "@/lib/constants";
import { Button } from "@/components/ui";

export default function Navigation() {
  const scrolled = useScrolled();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#030014]/80 backdrop-blur-lg border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-[family-name:var(--font-orbitron)] text-xl font-bold gradient-text"
        >
          alunir
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-400 hover:text-neon-cyan transition-colors text-sm uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
        </div>
        <Button href={`mailto:${CONTACT_EMAIL}`} variant="outline" size="sm">
          Contact
        </Button>
      </div>
    </motion.nav>
  );
}
