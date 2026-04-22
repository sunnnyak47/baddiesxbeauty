"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function MarieesPage() {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen pt-32 px-6 text-center">
      <h1 className="font-playfair text-5xl md:text-7xl mb-8 text-brand-primary">{t("mariees_title")}</h1>
      <p className="font-inter max-w-2xl mx-auto text-brand-accent/70">
        {t("mariees_desc")}
      </p>
    </section>
  );
}
