"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function BookingCTA() {
  const { t } = useLanguage();
  return (
    <section className="w-full relative z-10 bg-[#050505] overflow-hidden py-32 px-6 flex items-center justify-center text-center">
      {/* Animated subtle gold sweep backdrop */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#000000_25%,#D4AF37_50%,#000000_75%)] bg-[length:250%_250%] animate-shimmer" />
      
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="font-playfair text-5xl md:text-7xl text-brand-primary mb-6">
          {t("booking_cta_title")}
        </h2>
        <p className="font-inter text-xl text-brand-accent/80 mb-12 max-w-xl">
          {t("booking_cta_text")}
        </p>
        <a
          href="https://www.planity.com/baddies-beauty-studio-60440-nanteuil-le-haudoin"
          target="_blank"
          rel="noreferrer"
          className="px-10 py-5 bg-[#D4AF37] text-black font-inter text-lg font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all transform hover:scale-105"
        >
          {t("booking_cta_button")}
        </a>
      </div>
    </section>
  );
}
