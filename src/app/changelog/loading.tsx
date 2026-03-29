import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

function TimelineEntrySkeleton({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className={`relative flex flex-col md:flex-row items-start md:items-center md:justify-between ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-bg-base shadow-neu-raised-sm z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-theme-primary/40" />
      </div>

      <div className={`hidden md:block w-5/12 ${reverse ? "text-left" : "text-right"}`}>
        <div className="h-3 w-28 bg-bg-elevated rounded-full shadow-neu-raised-sm animate-pulse inline-block" />
      </div>

      <div className="w-full md:w-5/12 pl-12 md:pl-0">
        <div className="bg-bg-elevated rounded-[2.5rem] p-8 md:p-10 shadow-neu-raised animate-pulse">
          <div className="flex items-center justify-between mb-6 gap-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-20 rounded bg-bg-base" />
              <div className="h-5 w-16 rounded-full bg-bg-base" />
            </div>
            <div className="h-4 w-20 rounded bg-bg-base md:hidden" />
          </div>

          <div className="h-6 w-2/3 rounded bg-bg-base mb-4" />
          <div className="h-4 w-full rounded bg-bg-base mb-2" />
          <div className="h-4 w-5/6 rounded bg-bg-base mb-6" />

          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 rounded-full bg-theme-primary/40 shrink-0" />
                <div className="h-4 w-4/5 rounded bg-bg-base" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChangelogLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-24">
            <div className="h-3 w-24 rounded mx-auto bg-bg-elevated shadow-neu-raised-sm mb-4 animate-pulse" />
            <div className="h-12 md:h-14 w-2/3 mx-auto rounded bg-bg-elevated shadow-neu-raised mb-6 animate-pulse" />
            <div className="h-5 w-5/6 md:w-2/3 mx-auto rounded bg-bg-elevated shadow-neu-raised-sm animate-pulse" />
          </header>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 transform md:-translate-x-1/2 bg-theme-primary/10 dark:bg-theme-primary/30 rounded-full" />

            <div className="space-y-16 md:space-y-24">
              <TimelineEntrySkeleton reverse />
              <TimelineEntrySkeleton />
              <TimelineEntrySkeleton reverse />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
