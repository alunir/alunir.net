"use client";

import { motion } from "framer-motion";
import { ANIMATION } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION.duration.slow, ease: "easeOut" }}
          className="font-[family-name:var(--font-orbitron)] text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-6"
        >
          <span className="gradient-text">alunir</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION.duration.slow, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 tracking-wide"
        >
          Proprietary Crypto Trading Family Office
          <br />
          <span className="text-neon-cyan">running 100% in-house capital with algorithmic trading</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION.duration.slow, delay: 0.4, ease: "easeOut" }}
        >
          <a
            href="#overview"
            className="inline-block px-8 py-4 border border-neon-cyan text-neon-cyan font-semibold tracking-widest uppercase text-sm hover:bg-neon-cyan hover:text-black transition-all duration-300 neon-border"
          >
            Explore
          </a>
        </motion.div>

        <motion.div
          initial={ANIMATION.fadeIn.initial}
          animate={ANIMATION.fadeIn.animate}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-neon-cyan rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
