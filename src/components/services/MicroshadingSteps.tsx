import React from "react";
import { Leaf, ArrowRight } from "lucide-react";

export default function MicroshadingSteps() {
  const steps = [
    "Consultation",
    "Dessin de la forme",
    "Validation",
    "Microshading",
  ];

  return (
    <div className="my-10 w-full flex flex-col items-start">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-950/30 border border-green-500/30 rounded-full mb-8">
        <Leaf size={16} className="text-green-500" />
        <span className="font-inter text-sm text-green-400 tracking-wide">
          Pigments 100% organiques
        </span>
      </div>

      {/* Timeline */}
      <div className="w-full flex-col lg:flex-row flex items-start lg:items-center justify-between gap-4 border-l-2 lg:border-l-0 lg:border-t-2 border-brand-primary/20 pl-6 lg:pl-0 pt-0 lg:pt-6">
        {steps.map((step, index) => (
          <div key={index} className="flex relative items-center gap-4 lg:flex-col lg:items-start group">
            {/* Dot indicator over the border */}
            <div className="absolute -left-[31px] lg:left-0 lg:-top-[31px] w-4 h-4 rounded-full bg-brand-primary/20 group-hover:bg-brand-primary transition-colors border-2 border-[#0A0A0A]" />
            <h5 className="font-playfair text-white text-xl">{step}</h5>
            {index !== steps.length - 1 && (
              <ArrowRight className="hidden lg:block text-brand-primary/30 ml-4 absolute -right-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
