import React from "react";
import { BlueprintMotionSection } from "@/components/blueprint/BlueprintMotionSection";

export default function EvolutionTimeline() {
  return (
    <BlueprintMotionSection id="evolution" className="py-20 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black text-content-primary">Evolution Timeline</h2>
        <p className="mt-4 font-medium text-content-secondary">
          Visualizing the path forward.
        </p>
      </div>
    </BlueprintMotionSection>
  );
}
