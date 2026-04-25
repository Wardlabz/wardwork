import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/* ── Use-Case Switcher (top tab row) ────────────────────────────────────────── */
function UseCaseSwitcherSkeleton() {
  return (
    <section className="pt-28 pb-0 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-3">
        {[148, 128, 132, 148, 176].map((w, i) => (
          <div
            key={i}
            className="h-10 rounded-2xl bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised animate-pulse"
            style={{ width: w }}
          />
        ))}
      </div>
    </section>
  );
}

/* ── Hero (per-use-case — approximated with standard 2-col hero) ─────────────── */
function HeroSkeleton() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div className="animate-pulse">
            <div className="h-3 w-24 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded mb-6" />
            <div className="h-14 w-full bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised rounded-xl mb-3" />
            <div className="h-14 w-4/5 bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised rounded-xl mb-6" />
            <div className="space-y-2 mb-8">
              <div className="h-5 w-full bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded" />
              <div className="h-5 w-5/6 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded" />
              <div className="h-5 w-4/6 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded" />
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-40 rounded-xl bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised" />
              <div className="h-12 w-36 rounded-xl bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised" />
            </div>
          </div>
          {/* Visual column */}
          <div className="rounded-[2rem] bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised animate-pulse p-8">
            <div className="h-56 w-full rounded-2xl bg-[#d1d5db] dark:bg-[#3d3d5c]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Sticky Section Navigation (5 tabs) ────────────────────────────────────── */
function SectionNavSkeleton() {
  return (
    <div className="sticky top-[80px] z-40 py-6 pointer-events-none">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex justify-center">
        <div className="pointer-events-auto flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-2xl bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised animate-pulse">
          {/* Overview, Features, Metrics, Architecture, SDK */}
          {[96, 88, 80, 112, 64].map((w, i) => (
            <div key={i} className="h-10 rounded-xl bg-[#d1d5db] dark:bg-[#3d3d5c]" style={{ width: w }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Features Section (3 cards) ────────────────────────────────────────────── */
function FeaturesSkeleton() {
  return (
    <section className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-10 rounded-[2rem] bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised animate-pulse"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#d1d5db] dark:bg-[#3d3d5c] mb-8" />
              <div className="h-6 w-36 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded mb-4" />
              <div className="space-y-2 w-full">
                <div className="h-4 w-full bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" />
                <div className="h-4 w-5/6 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded mx-auto" />
                <div className="h-4 w-4/6 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Metrics Section (StellarImpactCards — 4 stat cards) ───────────────────── */
function MetricsSkeleton() {
  return (
    <section className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-[2rem] bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised animate-pulse p-8 text-center"
            >
              <div className="h-10 w-20 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded mx-auto mb-3" />
              <div className="h-4 w-24 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded mx-auto mb-2" />
              <div className="h-3 w-16 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Architecture Section (EscrowFlowDiagram centered) ─────────────────────── */
function ArchitectureSkeleton() {
  return (
    <section className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center animate-pulse">
        <div className="w-16 h-16 rounded-2xl bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised mx-auto mb-8" />
        <div className="h-12 w-96 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded-xl shadow-raised mx-auto mb-6" />
        <div className="space-y-2 mb-16">
          <div className="h-5 w-2/3 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded shadow-raised mx-auto" />
          <div className="h-5 w-1/2 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded shadow-raised mx-auto" />
        </div>
        {/* Flow diagram box */}
        <div className="rounded-[2rem] bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised mx-auto max-w-3xl p-6">
          <div className="h-64 w-full rounded-2xl bg-[#d1d5db] dark:bg-[#3d3d5c]" />
        </div>
      </div>
    </section>
  );
}

/* ── SDK / Code Integration Section (CodeIntegrationShowcase) ──────────────── */
function SdkSkeleton() {
  return (
    <section className="relative bg-transparent py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Text column */}
          <div className="animate-pulse">
            <div className="h-3 w-16 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded mb-6" />
            <div className="h-10 w-80 bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised rounded-xl mb-4" />
            <div className="space-y-2 mb-8">
              <div className="h-4 w-full bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded" />
              <div className="h-4 w-5/6 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded" />
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 shrink-0 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" />
                  <div className="flex-1 space-y-1">
                    <div className="h-4 w-3/4 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded shadow-raised" />
                    <div className="h-3 w-full bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Code panel */}
          <div className="rounded-[2rem] bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised animate-pulse p-6">
            <div className="flex gap-2 mb-4">
              {[80, 72, 88].map((w, i) => (
                <div key={i} className="h-7 rounded-lg bg-[#d1d5db] dark:bg-[#3d3d5c]" style={{ width: w }} />
              ))}
            </div>
            <div className="space-y-2">
              {[90, 70, 55, 80, 65, 75, 50, 85].map((pct, i) => (
                <div
                  key={i}
                  className="h-4 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded"
                  style={{ width: `${pct}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function UseCasesLoading() {
  return (
    <div className="bg-transparent min-h-[100dvh]">
      <Navbar />

      <main>
        <UseCaseSwitcherSkeleton />
        <HeroSkeleton />
        <SectionNavSkeleton />
        <FeaturesSkeleton />
        <MetricsSkeleton />
        <ArchitectureSkeleton />
        <SdkSkeleton />
      </main>

      <Footer />
    </div>
  );
}
