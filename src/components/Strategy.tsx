"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks";
import { STRATEGIES, ANIMATION } from "@/lib/constants";
import { SectionTitle, GlassCard } from "@/components/ui";

export default function Strategy() {
  const { ref, isInView } = useSectionInView();

  return (
    <section id="strategy" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          highlight="TRADING"
          text="STRATEGY"
          highlightColor="purple"
          gradientFrom="neon-purple"
          gradientTo="neon-cyan"
          isInView={isInView}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STRATEGIES.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: ANIMATION.duration.normal, delay: 0.2 + index * 0.1 }}
              className="glass-card rounded-2xl p-8 group hover:neon-border-purple transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="text-4xl">{strategy.icon}</div>
                <div>
                  <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-white mb-3 group-hover:text-neon-purple transition-colors">
                    {strategy.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {strategy.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
