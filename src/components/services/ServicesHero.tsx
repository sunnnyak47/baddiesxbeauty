"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Split text for GSAP manipulation
  const text = "NOS PRESTATIONS".split("");

  useGSAP(() => {
    gsap.fromTo(
      ".char",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 1,
        ease: "back.out(1.7)",
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full h-screen bg-black flex items-center justify-center text-center overflow-hidden">
      <h1 className="font-playfair text-5xl md:text-7xl lg:text-9xl text-brand-primary font-bold overflow-hidden">
        {text.map((char, index) => (
          <span
            key={index}
            className="char inline-block"
            style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          >
            {char}
          </span>
        ))}
      </h1>
    </section>
  );
}
