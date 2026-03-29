import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import LoadingBar from "@/components/ui/LoadingBar";

import BlueprintHero from "@/components/blueprint/BlueprintHero";
import BlueprintSectionNav from "@/components/blueprint/BlueprintSectionNav";
import OrchestratorShowcase from "@/components/blueprint/OrchestratorShowcase";
import MarketplaceTemplate from "@/components/blueprint/MarketplaceTemplate";
import EvolutionTimeline from "@/components/blueprint/EvolutionTimeline";

export default function BlueprintPage() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <LoadingBar />
      <Navbar />
      
      <main className="flex-grow">
        <BlueprintHero />
        <BlueprintSectionNav />
        <OrchestratorShowcase />
        <MarketplaceTemplate />
        <EvolutionTimeline />
      </main>

      <Footer />
    </div>
  );
}
