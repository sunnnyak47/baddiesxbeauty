"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Stat {
  id: string;
  endValue: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const STATS: Stat[] = [
  { id: "stat-1", endValue: 15.8, suffix: "K+", label: "Abonnés Instagram", decimals: 1 },
  { id: "stat-2", endValue: 131, suffix: "+", label: "Avis 5 étoiles", decimals: 0 },
  { id: "stat-3", endValue: 6, suffix: "+", label: "Ans d'expérience", decimals: 0 },
];

export default function StatsBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    STATS.forEach((stat) => {
      const el = document.getElementById(stat.id);
      if (el) {
        gsap.to(el, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
          innerHTML: stat.endValue,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 / Math.pow(10, stat.decimals || 0) },
          onUpdate: function () {
            if (stat.decimals === 1) {
              const val = Number(Math.round(parseFloat(this.targets()[0].innerHTML) * 10) / 10).toFixed(1);
              this.targets()[0].innerHTML = val;
            }
          },
        });
      }
    });

    gsap.fromTo(
      ".stat-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-16 bg-brand-background border-y border-brand-primary/20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-brand-primary/20">
        {STATS.map((stat) => (
          <div key={stat.id} className="stat-item flex flex-col items-center justify-center pt-8 md:pt-0">
            <div className="flex items-baseline gap-1">
              <span id={stat.id} className="font-playfair text-5xl md:text-6xl text-brand-primary font-bold">
                0
              </span>
              <span className="font-playfair text-4xl md:text-5xl text-brand-primary font-bold">{stat.suffix}</span>
            </div>
            <p className="font-inter text-brand-accent/60 uppercase tracking-widest mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
