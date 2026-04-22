"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronDown } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

export default function HomeHero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Apple-style scale and fade on scroll
    gsap.to(contentRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      scale: 0.85,
      opacity: 0,
      y: 100,
      ease: "none",
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>
      
      {/* Overlay Content */}
      <div ref={contentRef} className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-shimmer bg-[linear-gradient(110deg,#ffffff,45%,#D4AF37,55%,#ffffff)] bg-[length:200%_auto] bg-clip-text text-transparent uppercase">
          {t("hero_title")}
        </h1>
        <p className="font-inter text-lg md:text-xl text-brand-accent/80 uppercase tracking-widest mb-10 max-w-2xl mx-auto">
          {t("hero_subtext")}
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="https://www.planity.com/baddies-beauty-studio-60440-nanteuil-le-haudoin"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-brand-primary text-black font-semibold uppercase tracking-wider rounded-full hover:bg-[#FBF5B7] transition-all"
          >
            {t("hero_cta_booking")}
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-brand-primary text-brand-primary font-semibold uppercase tracking-wider rounded-full hover:bg-brand-primary/10 transition-all"
          >
            {t("hero_cta_discover")}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={32} className="text-brand-primary opacity-80" />
      </div>
    </section>
  );
}
