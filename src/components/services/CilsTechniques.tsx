"use client";

import { Layers, Eye, Wand2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CilsTechniques() {
  const { t } = useLanguage();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
      <div className="bg-[#111] border border-brand-primary/20 rounded-xl p-6 flex flex-col items-center text-center">
        <Eye className="text-brand-primary mb-4" size={32} />
        <h4 className="font-playfair text-white text-lg mb-2">{t("service_lashes_sub_1")}</h4>
        <p className="font-inter text-brand-accent/60 text-sm">{t("service_lashes_sub_1_desc")}</p>
      </div>
      <div className="bg-[#111] border border-brand-primary/20 rounded-xl p-6 flex flex-col items-center text-center">
        <Wand2 className="text-brand-primary mb-4" size={32} />
        <h4 className="font-playfair text-white text-lg mb-2">{t("service_lashes_sub_2")}</h4>
        <p className="font-inter text-brand-accent/60 text-sm">{t("service_lashes_sub_2_desc")}</p>
      </div>
      <div className="bg-[#111] border border-brand-primary/20 rounded-xl p-6 flex flex-col items-center text-center">
        <Layers className="text-brand-primary mb-4" size={32} />
        <h4 className="font-playfair text-white text-lg mb-2">{t("service_lashes_sub_3")}</h4>
        <p className="font-inter text-brand-accent/60 text-sm">{t("service_lashes_sub_3_desc")}</p>
      </div>
    </div>
  );
}
