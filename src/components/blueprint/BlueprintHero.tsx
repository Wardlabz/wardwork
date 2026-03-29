"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { BLUEPRINT_SCROLL_MARGIN_PX } from "@/lib/blueprint-nav";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function BlueprintHero() {
  return (
    <section
      id="vision"
      className="relative isolate overflow-hidden pt-44 md:pt-48 pb-20 bg-transparent"
      style={{ scrollMarginTop: BLUEPRINT_SCROLL_MARGIN_PX }}
    >
      {/* Same soft teal glow language as the home hero — ties pages together */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 58% 48% at 50% 38%, rgba(20,154,155,0.085) 0%, transparent 68%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center w-full"
        >
          {/* Brand mark — large, clean, no surface behind (like ref image #2) */}
          <motion.div variants={item} className="mb-6">
            <div
              className="text-[clamp(3rem,10vw,7.75rem)] font-black tracking-tight leading-none whitespace-nowrap select-none"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(31,184,185,1) 0%, rgba(20,154,155,1) 45%, rgba(34,224,226,0.95) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
              aria-label="WARDWORK"
            >
              WARDWORK
            </div>
          </motion.div>

          {/* Eyebrow — matches Use Cases / app-wide marketing heroes */}
          <motion.div variants={item}>
            <div className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-neu-raised text-theme-primary bg-bg-base inline-flex items-center gap-2.5">
              <Layers size={14} className="shrink-0 opacity-90" aria-hidden />
              Strategic roadmap
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-content-primary max-w-4xl"
          >
            The Blueprint of Global Orchestration
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-12 text-content-secondary"
          >
            Mapping the technical evolution of the WARDWORK ecosystem, from core engine to global
            marketplace templates.
          </motion.p>

          {/* Single raised surface — same vocabulary as Use Cases feature cards */}
          <motion.div variants={item} className="w-full max-w-3xl">
            <div className="rounded-[2rem] bg-bg-elevated p-8 md:p-10 shadow-neu-raised transition-shadow duration-300 hover:shadow-neu-raised-hover">
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full aspect-[4/3] rounded-2xl bg-bg-base shadow-neu-sunken-subtle" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-content-muted">
                    Core
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full aspect-[4/3] rounded-2xl bg-bg-base shadow-neu-raised-sm" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-content-muted">
                    Engine
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full aspect-[4/3] rounded-2xl bg-bg-base shadow-neu-sunken-subtle" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-content-muted">
                    Templates
                  </span>
                </div>
              </div>
              <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-content-secondary">
                Ecosystem structure
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
