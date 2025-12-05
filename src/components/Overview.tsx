"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks";
import { OVERVIEW_STATS, ANIMATION } from "@/lib/constants";
import { SectionTitle, GlassCard } from "@/components/ui";

export default function Overview() {
  const { ref, isInView } = useSectionInView();

  return (
    <section id="overview" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          highlight="SERVICE"
          text="OVERVIEW"
          highlightColor="cyan"
          isInView={isInView}
        />

        <GlassCard
          isInView={isInView}
          delay={0.2}
          className="p-8 md:p-12 mb-16"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
            alunir is a proprietary crypto trading family office operating with
            <span className="text-neon-cyan font-semibold"> 100% in-house capital</span>
            . We deploy advanced algorithmic strategies in cryptocurrency markets,
            focusing on systematic risk management and consistent performance.
          </p>
        </GlassCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OVERVIEW_STATS.map((stat, index) => (
            <GlassCard
              key={stat.label}
              isInView={isInView}
              delay={ANIMATION.duration.fast + index * 0.1}
              hoverEffect="cyan"
              className="rounded-xl p-8 text-center group"
            >
              <div className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-bold gradient-text mb-3">
                {stat.value}
              </div>
              <div className="text-gray-400 uppercase tracking-widest text-sm">
                {stat.label}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
