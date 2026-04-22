"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Star } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContent = useRef<HTMLDivElement>(null);
  const rightContent = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      leftContent.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      rightContent.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-24 bg-brand-background relative z-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column - Image */}
        <div ref={leftContent} className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-brand-primary/20">
          {/* Real image goes here, using gradient placeholder for now */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent flex items-center justify-center">
            <span className="font-inter text-brand-primary/40 uppercase tracking-widest text-sm">Image Mathilde</span>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute top-8 -right-4 lg:-right-8 bg-black border border-brand-primary p-4 rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.2)] flex items-center gap-3">
            <div className="flex text-brand-primary">
              <Star size={20} fill="#D4AF37" />
            </div>
            <div>
              <p className="font-playfair font-bold text-xl text-white">5.0</p>
              <p className="font-inter text-[10px] text-brand-accent/60 uppercase">Avis clients</p>
            </div>
          </div>
        </div>

        {/* Right Column - Text */}
        <div ref={rightContent} className="flex flex-col justify-center">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-brand-primary mb-8">
            À propos de Baddies Beauty
          </h2>
          <p className="font-inter text-lg text-brand-accent/80 leading-relaxed mb-6">
            Créé par Mathilde, <span className="text-white font-semibold">Baddies Beauty Studio</span> est un espace dédié à vous sublimer. 
          </p>
          <p className="font-inter text-lg text-brand-accent/80 leading-relaxed mb-10">
            Maquillage sur mesure, coiffure GLAM, beauté du regard... Chaque prestation est pensée pour vous redonner confiance et mettre en valeur votre beauté naturelle pour tous vos événements en Oise ou à Paris.
          </p>
          <div className="pt-4 border-t border-brand-primary/20">
            <h3 className="font-playfair text-2xl text-white italic mb-2">Mathilde</h3>
            <p className="font-inter text-sm text-brand-primary uppercase tracking-widest">Fondatrice & Experte Beauté</p>
          </div>
        </div>

      </div>
    </section>
  );
}
