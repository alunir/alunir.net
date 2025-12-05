"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks";
import { FEATURES, ANIMATION } from "@/lib/constants";
import { SectionTitle } from "@/components/ui";

export default function Features() {
  const { ref, isInView } = useSectionInView();

  return (
    <section id="features" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          highlight="KEY"
          text="FEATURES"
          highlightColor="blue"
          gradientFrom="neon-blue"
          gradientTo="neon-cyan"
          isInView={isInView}
        />

        <div className="space-y-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: ANIMATION.duration.normal, delay: 0.2 + index * 0.15 }}
              className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden group"
            >
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${feature.gradient}`}
              />
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-lg">{feature.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} opacity-20 
                                group-hover:opacity-40 transition-opacity duration-300`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
