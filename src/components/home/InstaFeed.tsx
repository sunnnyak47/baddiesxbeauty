"use client";

import React from "react";
import { Camera } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const DEMO_PICS = [1, 2, 3, 4, 5, 6];

export default function InstaFeed() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-black py-12 relative z-10">
      <div className="w-full flex-col flex items-center justify-center mb-10">
        <h2 className="font-playfair text-2xl md:text-3xl text-brand-primary mb-2">{t("insta_title")}</h2>
        <a 
          href="https://instagram.com/baddiesxbeauty" 
          target="_blank" 
          rel="noreferrer"
          className="font-inter text-brand-accent/80 hover:text-white transition-colors"
        >
          @baddiesxbeauty
        </a>
      </div>

      {/* Grid Strip */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto">
        {DEMO_PICS.map((pic) => (
          <a
            key={pic}
            href="https://instagram.com/baddiesxbeauty"
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-square w-full bg-[#111] overflow-hidden block"
          >
            {/* Image Placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />

            {/* Hover Tint overlay */}
            <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Camera size={36} className="text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
