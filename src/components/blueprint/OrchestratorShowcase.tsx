import React from "react";
import { BlueprintMotionSection } from "@/components/blueprint/BlueprintMotionSection";

export default function OrchestratorShowcase() {
  return (
    <BlueprintMotionSection id="orchestrator" className="py-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl bg-bg-elevated py-20 px-6 lg:px-8 shadow-neu-raised">
          <h2 className="text-3xl font-black text-center text-content-primary">
            The Orchestrator
          </h2>
          <p className="mt-4 text-center font-medium text-content-secondary">
            Technical showcase of the payment engine.
          </p>
        </div>
      </div>
    </BlueprintMotionSection>
  );
}
