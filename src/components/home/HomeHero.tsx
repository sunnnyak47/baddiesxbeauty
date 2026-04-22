"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronDown } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function ParticleSwarm() {
  const ref = useRef<THREE.Points>(null);
  
  // Custom particle positions
  const [positions] = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return [positions];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#D4AF37"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

export default function HomeHero() {
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
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleSwarm />
        </Canvas>
      </div>
      
      {/* Overlay Content */}
      <div ref={contentRef} className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-shimmer bg-[linear-gradient(110deg,#ffffff,45%,#D4AF37,55%,#ffffff)] bg-[length:200%_auto] bg-clip-text text-transparent">
          SUBLIMEZ VOTRE BEAUTÉ
        </h1>
        <p className="font-inter text-lg md:text-xl text-brand-accent/80 uppercase tracking-widest mb-10 max-w-2xl mx-auto">
          Spécialiste maquillage &middot; Coiffure GLAM &middot; Oise / Paris
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="https://www.planity.com/baddies-beauty-studio-60440-nanteuil-le-haudoin"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-brand-primary text-black font-semibold uppercase tracking-wider rounded-full hover:bg-[#FBF5B7] transition-all"
          >
            Prendre RDV
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-brand-primary text-brand-primary font-semibold uppercase tracking-wider rounded-full hover:bg-brand-primary/10 transition-all"
          >
            Découvrir
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
