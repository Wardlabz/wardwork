import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/* ── Vision / Hero ─────────────────────────────────────────────────────────── */
function VisionSkeleton() {
  return (
    <section className="relative pt-44 md:pt-48 pb-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Brand name — large gradient text */}
        <div className="h-[clamp(3rem,10vw,7.75rem)] w-2/3 rounded-2xl bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised animate-pulse mb-6" />
        {/* Eyebrow badge */}
        <div className="h-8 w-40 rounded-full bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised animate-pulse mb-8" />
        {/* h1 */}
        <div className="h-16 w-3/4 rounded-xl bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised animate-pulse mb-3" />
        <div className="h-16 w-2/3 rounded-xl bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised animate-pulse mb-8" />
        {/* Description */}
        <div className="h-5 w-2/3 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded shadow-raised animate-pulse mb-2" />
        <div className="h-5 w-1/2 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded shadow-raised animate-pulse mb-12" />
        {/* Preview card — 3-column diagram */}
        <div className="w-full max-w-3xl rounded-[2rem] bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised animate-pulse p-8 md:p-10">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-full aspect-[4/3] rounded-2xl bg-[#d1d5db] dark:bg-[#3d3d5c]" />
                <div className="h-2 w-14 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" />
              </div>
            ))}
          </div>
          <div className="mt-8 h-3 w-40 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded mx-auto" />
        </div>
      </div>
    </section>
  );
}

/* ── Section Navigation pill ────────────────────────────────────────────────── */
function SectionNavSkeleton() {
  return (
    <div className="sticky top-[80px] z-40 py-6 pointer-events-none">
      <div className="max-w-3xl mx-auto px-6 flex justify-center">
        <div className="pointer-events-auto flex items-center gap-1 sm:gap-1.5 p-2 rounded-2xl bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised animate-pulse">
          {["Vision", "Orchestrator", "Templates", "Evolution"].map((label) => (
            <div key={label} className="h-10 w-24 sm:w-28 rounded-xl bg-[#d1d5db] dark:bg-[#3d3d5c]" />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Orchestrator Showcase ──────────────────────────────────────────────────── */
function OrchestratorSkeleton() {
  return (
    <section className="px-6 py-24 bg-transparent">
      <div className="mx-auto max-w-7xl">
        {/* Outer raised card */}
        <div className="rounded-[2.5rem] bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised animate-pulse p-10">
          {/* 2-col: text left, flow diagram right */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              {/* Eyebrow */}
              <div className="h-8 w-44 rounded-full bg-[#d1d5db] dark:bg-[#3d3d5c] mb-6" />
              {/* h2 */}
              <div className="h-10 w-full bg-[#d1d5db] dark:bg-[#3d3d5c] rounded mb-2" />
              <div className="h-10 w-5/6 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded mb-5" />
              {/* p */}
              <div className="space-y-2 mb-8">
                <div className="h-4 w-full bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" />
                <div className="h-4 w-5/6 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" />
                <div className="h-4 w-4/6 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" />
              </div>
              {/* 3 stat mini-cards */}
              <div className="grid gap-4 sm:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-[1.5rem] bg-[#d1d5db] dark:bg-[#3d3d5c] p-4 h-16" />
                ))}
              </div>
            </div>
            {/* Flow diagram placeholder */}
            <div className="rounded-[2rem] bg-[#d1d5db] dark:bg-[#3d3d5c] h-64 w-full" />
          </div>

          {/* Flow legend row */}
          <div className="mt-10 flex gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-6 w-28 rounded-full bg-[#d1d5db] dark:bg-[#3d3d5c]" />
            ))}
          </div>

          {/* 3 detail cards — dark outer, light inner (inverted neumorphic layer) */}
          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-[2rem] bg-[#d1d5db] dark:bg-[#3d3d5c] p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 rounded-[1.25rem] bg-[#f3f4f6] dark:bg-[#0d1525]" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-20 bg-[#f3f4f6] dark:bg-[#0d1525] rounded" />
                      <div className="h-6 w-36 bg-[#f3f4f6] dark:bg-[#0d1525] rounded" />
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-full bg-[#f3f4f6] dark:bg-[#0d1525]" />
                </div>
                <div className="space-y-1.5 mb-4">
                  <div className="h-4 w-full bg-[#f3f4f6] dark:bg-[#0d1525] rounded" />
                  <div className="h-4 w-5/6 bg-[#f3f4f6] dark:bg-[#0d1525] rounded" />
                </div>
                <div className="flex gap-2">
                  <div className="h-6 w-20 rounded-full bg-[#f3f4f6] dark:bg-[#0d1525]" />
                  <div className="h-6 w-24 rounded-full bg-[#f3f4f6] dark:bg-[#0d1525]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Marketplace Templates ──────────────────────────────────────────────────── */
function TemplatesSkeleton() {
  return (
    <section className="py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="h-8 w-44 rounded-full bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised animate-pulse mx-auto mb-4" />
          <div className="h-9 w-72 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded-xl shadow-raised animate-pulse mx-auto mb-4" />
          <div className="h-4 w-96 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded shadow-raised animate-pulse mx-auto mb-2" />
          <div className="h-4 w-80 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded shadow-raised animate-pulse mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — view toggle + dashboard preview */}
          <div className="flex flex-col items-center gap-6 animate-pulse">
            {/* Toggle pill */}
            <div className="h-11 w-80 rounded-full bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised" />
            {/* Dashboard card */}
            <div className="w-full rounded-3xl bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised p-4">
              {/* Browser chrome bar */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl mb-3 bg-[#d1d5db] dark:bg-[#3d3d5c]">
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((i) => (
                    <span key={i} className="w-2.5 h-2.5 rounded-full bg-[#f3f4f6] dark:bg-[#0d1525]" />
                  ))}
                </div>
                <div className="flex-1 h-4 bg-[#f3f4f6] dark:bg-[#0d1525] rounded-full mx-2" />
              </div>
              {/* Dashboard content */}
              <div className="rounded-2xl bg-[#d1d5db] dark:bg-[#3d3d5c] min-h-[280px] p-4 space-y-3">
                <div className="h-4 w-40 bg-[#f3f4f6] dark:bg-[#0d1525] rounded" />
                <div className="rounded-xl bg-[#f3f4f6] dark:bg-[#0d1525] p-4 space-y-2">
                  <div className="h-3 w-32 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" />
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-8 w-full bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" />
                  ))}
                </div>
                <div className="rounded-xl bg-[#f3f4f6] dark:bg-[#0d1525] p-4">
                  <div className="h-3 w-24 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded mb-2" />
                  <div className="h-8 w-28 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Right — quick start + feature list */}
          <div className="flex flex-col gap-6 animate-pulse">
            <div>
              <div className="h-4 w-24 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded mb-3 shadow-raised" />
              <div className="rounded-2xl bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised p-6 space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-4 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" style={{ width: `${70 + i * 8}%` }} />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#d1d5db] dark:bg-[#3d3d5c] mt-0.5 shrink-0" />
                  <div className="flex-1 space-y-1">
                    <div className="h-4 w-3/4 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded shadow-raised" />
                    <div className="h-3 w-full bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" />
                  </div>
                </div>
              ))}
            </div>
            <div className="h-10 w-40 rounded-xl bg-[#d1d5db] dark:bg-[#3d3d5c]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Evolution Timeline ─────────────────────────────────────────────────────── */
function EvolutionSkeleton() {
  return (
    <section className="py-24 bg-[#e5e7eb] dark:bg-[#0d1525]">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-4 text-center">
          <div className="h-8 w-36 rounded-full bg-[#d1d5db] dark:bg-[#3d3d5c] shadow-raised animate-pulse mx-auto mb-4" />
          <div className="h-11 w-80 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded-xl shadow-raised animate-pulse mx-auto mb-3" />
          <div className="h-4 w-96 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded shadow-raised animate-pulse mx-auto" />
        </div>

        {/* Stats row */}
        <div className="mb-10 mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl bg-[#d1d5db] dark:bg-[#3d3d5c] shadow-raised animate-pulse p-5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-xl bg-[#f3f4f6] dark:bg-[#0d1525] p-3 text-center">
              <div className="h-8 w-12 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded mx-auto mb-1" />
              <div className="h-3 w-20 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded mx-auto" />
            </div>
          ))}
        </div>

        {/* Domain filter tabs */}
        <div className="mb-14 flex gap-2 overflow-x-auto rounded-2xl bg-[#d1d5db] dark:bg-[#3d3d5c] shadow-raised animate-pulse p-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-9 w-24 shrink-0 rounded-xl bg-[#f3f4f6] dark:bg-[#0d1525]" />
          ))}
        </div>

        {/* Timeline cards */}
        <div className="relative flex flex-col gap-10">
          {/* Vertical connector line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-[#d1d5db] dark:bg-[#3d3d5c]" />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative pl-12 sm:pl-0">
              {/* Connector dot */}
              <div className="absolute left-3 sm:left-1/2 top-5 w-4 h-4 rounded-full bg-[#d1d5db] dark:bg-[#3d3d5c] -translate-x-1.5 sm:-translate-x-2 z-10" />
              {/* Phase card — alternating sides on large screens */}
              <div
                className={`rounded-[2rem] bg-[#d1d5db] dark:bg-[#3d3d5c] shadow-raised animate-pulse p-6 sm:w-[46%] ${
                  i % 2 === 0 ? "sm:ml-auto" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-6 w-6 rounded bg-[#f3f4f6] dark:bg-[#0d1525]" />
                  <div className="h-3 w-20 bg-[#f3f4f6] dark:bg-[#0d1525] rounded" />
                  <div className="h-5 w-16 rounded-full bg-[#f3f4f6] dark:bg-[#0d1525] ml-auto" />
                </div>
                <div className="h-6 w-3/4 bg-[#f3f4f6] dark:bg-[#0d1525] rounded mb-3" />
                <div className="space-y-1.5 mb-4">
                  <div className="h-3 w-full bg-[#f3f4f6] dark:bg-[#0d1525] rounded" />
                  <div className="h-3 w-5/6 bg-[#f3f4f6] dark:bg-[#0d1525] rounded" />
                </div>
                {/* Progress bar */}
                <div className="h-1.5 w-full rounded-full bg-[#f3f4f6] dark:bg-[#0d1525]">
                  <div className="h-full rounded-full bg-gray-400" style={{ width: `${40 + i * 12}%` }} />
                </div>
                <div className="flex gap-2 mt-3">
                  {[1, 2].map((j) => (
                    <div key={j} className="h-5 w-16 rounded-full bg-[#f3f4f6] dark:bg-[#0d1525]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlueprintLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />

      <main className="flex-grow">
        <VisionSkeleton />
        <SectionNavSkeleton />
        <OrchestratorSkeleton />
        <TemplatesSkeleton />
        <EvolutionSkeleton />
      </main>

      <Footer />
    </div>
  );
}
