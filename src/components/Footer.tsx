"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="w-full py-12 px-6 border-t border-brand-primary/20 bg-brand-background text-brand-accent/50 text-center font-inter text-sm">
      <p>&copy; {new Date().getFullYear()} Baddies Beauty Studio. {t("footer_rights")}</p>
    </footer>
  );
}
