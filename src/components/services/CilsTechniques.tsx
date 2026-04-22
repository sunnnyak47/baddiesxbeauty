import React from "react";
import { Layers, Eye, Wand2 } from "lucide-react";

export default function CilsTechniques() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
      <div className="bg-[#111] border border-brand-primary/20 rounded-xl p-6 flex flex-col items-center text-center">
        <Eye className="text-brand-primary mb-4" size={32} />
        <h4 className="font-playfair text-white text-lg mb-2">Cil à cil</h4>
        <p className="font-inter text-brand-accent/60 text-sm">Pose ultra naturelle, une extension sur chaque cil.</p>
      </div>
      <div className="bg-[#111] border border-brand-primary/20 rounded-xl p-6 flex flex-col items-center text-center">
        <Wand2 className="text-brand-primary mb-4" size={32} />
        <h4 className="font-playfair text-white text-lg mb-2">Hybride</h4>
        <p className="font-inter text-brand-accent/60 text-sm">Le compromis parfait entre naturel et intensité.</p>
      </div>
      <div className="bg-[#111] border border-brand-primary/20 rounded-xl p-6 flex flex-col items-center text-center">
        <Layers className="text-brand-primary mb-4" size={32} />
        <h4 className="font-playfair text-white text-lg mb-2">Volume Russe</h4>
        <p className="font-inter text-brand-accent/60 text-sm">Bouquets de cils pour un regard très fourni et glamour.</p>
      </div>
    </div>
  );
}
