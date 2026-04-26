import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

function PricingHeroSkeleton() {
  return (
    <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
      {/* Badge pill */}
      <div className="h-8 w-28 rounded-full bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised animate-pulse mb-8" />
      {/* h1 – two lines */}
      <div className="h-14 w-3/4 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded-xl shadow-raised animate-pulse mb-3" />
      <div className="h-14 w-2/3 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded-xl shadow-raised animate-pulse mb-8" />
      {/* Subtitle paragraph */}
      <div className="h-5 w-full bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded shadow-raised animate-pulse mb-2" />
      <div className="h-5 w-5/6 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded shadow-raised animate-pulse mb-2" />
      <div className="h-5 w-4/6 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded shadow-raised animate-pulse" />
    </div>
  );
}

function PricingCardSkeleton() {
  return (
    <div className="rounded-[2.5rem] bg-[#e5e7eb] dark:bg-[#1e2a4a] shadow-raised animate-pulse p-10 flex flex-col">
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-[#d1d5db] dark:bg-[#3d3d5c]" />
      {/* Name */}
      <div className="mt-5 h-7 w-36 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" />
      {/* Price label */}
      <div className="mt-2 h-3 w-24 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" />
      {/* Description */}
      <div className="mt-4 space-y-1.5">
        <div className="h-4 w-full bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" />
        <div className="h-4 w-5/6 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" />
        <div className="h-4 w-4/6 bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" />
      </div>
      {/* Features list */}
      <ul className="mt-6 space-y-3 flex-grow">
        {[1, 2, 3, 4].map((i) => (
          <li key={i} className="flex items-start gap-2">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#d1d5db] dark:bg-[#3d3d5c] shrink-0" />
            <div className="h-4 w-full bg-[#d1d5db] dark:bg-[#3d3d5c] rounded" />
          </li>
        ))}
      </ul>
      {/* CTA button */}
      <div className="mt-8 h-12 w-full rounded-xl bg-[#d1d5db] dark:bg-[#3d3d5c]" />
    </div>
  );
}

export default function PricingLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <PricingHeroSkeleton />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <PricingCardSkeleton key={i} />
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-10 flex justify-center">
            <div className="h-4 w-80 bg-[#e5e7eb] dark:bg-[#1e2a4a] rounded shadow-raised animate-pulse" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
