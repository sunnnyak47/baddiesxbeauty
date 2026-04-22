"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StickyServiceBlockProps {
  title: string;
  description: string;
  subServices?: string[];
  priceTag?: string;
  alignRight?: boolean;
  specialContent?: React.ReactNode;
}

const PLANITY_URL = "https://www.planity.com/baddies-beauty-studio-60440-nanteuil-le-haudoin";

export default function StickyServiceBlock({
  title,
  description,
  subServices,
  priceTag = "Sur devis / Sur demande",
  alignRight = false,
  specialContent,
}: StickyServiceBlockProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Determine screen scale: if mobile, disable pinning
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        pin: imageRef.current,
        start: "top top",
        end: "bottom bottom",
        pinSpacing: false, // Don't add extra padding at the bottom of the section
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full relative bg-[#050505] border-t border-brand-primary/10">
      <div className={`flex flex-col md:flex-row w-full ${alignRight ? "md:flex-row-reverse" : ""}`}>
        
        {/* Sticky Image Column */}
        <div ref={imageRef} className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden bg-[#111]">
          {/* Authentic image placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30">
            <h3 className="font-playfair text-2xl md:text-4xl text-brand-primary tracking-widest uppercase">{title} IMAGE</h3>
          </div>
          {/* Subtle gold gradient over top */}
          <div className="absolute inset-0 bg-brand-primary mix-blend-overlay opacity-10" />
        </div>

        {/* Scrolling Text Column */}
        <div className="w-full md:w-1/2 flex items-center justify-center py-20 md:py-32 min-h-[100vh] px-8 lg:px-16">
          <div className="max-w-xl w-full flex flex-col items-start pb-[20vh]">
            <h2 className="font-playfair text-4xl md:text-6xl text-brand-primary mb-6 uppercase">
              {title}
            </h2>
            
            <p className="font-inter text-lg text-brand-accent/80 leading-relaxed mb-8">
              {description}
            </p>

            {/* Optional text-based subservices */}
            {subServices && subServices.length > 0 && (
              <div className="mb-10 w-full space-y-4">
                {subServices.map((sub, idx) => (
                  <div key={idx} className="flex items-center gap-4 border-b border-[#222] pb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                    <span className="font-playfair text-xl text-white tracking-wide">{sub}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Injected special react component (like Cils Cards or Micro Timeline) */}
            {specialContent}

            {/* Booking & Price */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href={PLANITY_URL}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 bg-[#D4AF37] text-black font-inter text-sm font-bold uppercase tracking-wider rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                Réserver
              </a>
              <span className="font-inter text-brand-primary/50 text-sm tracking-widest uppercase">
                {priceTag}
              </span>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
