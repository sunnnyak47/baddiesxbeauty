"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ExperienceSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Refs for chapters
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  
  // Background visuals
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);
  const bg3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%", // 3 screens worth of scroll
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    // Initial state
    gsap.set([step2Ref.current, step3Ref.current], { opacity: 0, y: 50 });
    gsap.set([bg2Ref.current, bg3Ref.current], { opacity: 0 });

    // Step 1 to Step 2
    tl.to(step1Ref.current, { opacity: 0, y: -50, duration: 1 })
      .to(bg1Ref.current, { opacity: 0, duration: 1 }, "<")
      .to(bg2Ref.current, { opacity: 0.4, duration: 1 }, "<")
      .to(step2Ref.current, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
      
      // Step 2 to Step 3
      .to(step2Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=1")
      .to(bg2Ref.current, { opacity: 0, duration: 1 }, "<")
      .to(bg3Ref.current, { opacity: 0.4, duration: 1 }, "<")
      .to(step3Ref.current, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
      
      // Hold Step 3
      .to({}, { duration: 1 }); // Just a pause at the end

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div ref={bg1Ref} className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF3715,transparent_70%)] opacity-60" />
        <div ref={bg2Ref} className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF3725,transparent_70%)]" />
        <div ref={bg3Ref} className="absolute inset-0 bg-[linear-gradient(45deg,#000000,#1A1A1A,#000000)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-6">
        
        {/* Step 1 */}
        <div ref={step1Ref} className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6">
          <span className="font-inter text-brand-primary uppercase tracking-[0.3em] text-sm mb-6 opacity-80">01 / Concept</span>
          <h2 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
            {t("experience_step_1_title")}
          </h2>
          <p className="font-inter text-xl md:text-2xl text-brand-accent/60 max-w-2xl">
            {t("experience_step_1_text")}
          </p>
        </div>

        {/* Step 2 */}
        <div ref={step2Ref} className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6">
          <span className="font-inter text-brand-primary uppercase tracking-[0.3em] text-sm mb-6 opacity-80">02 / Precision</span>
          <h2 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
            {t("experience_step_2_title")}
          </h2>
          <p className="font-inter text-xl md:text-2xl text-brand-accent/60 max-w-2xl">
            {t("experience_step_2_text")}
          </p>
        </div>

        {/* Step 3 */}
        <div ref={step3Ref} className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6">
          <span className="font-inter text-brand-primary uppercase tracking-[0.3em] text-sm mb-6 opacity-80">03 / Sanctuary</span>
          <h2 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-brand-primary mb-8 leading-tight italic">
            {t("experience_step_3_title")}
          </h2>
          <p className="font-inter text-xl md:text-2xl text-brand-accent/60 max-w-2xl">
            {t("experience_step_3_text")}
          </p>
        </div>

      </div>

      {/* Subtle floating gold dust effect could be added here if needed */}
    </section>
  );
}
