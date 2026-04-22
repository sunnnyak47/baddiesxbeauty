"use client";

import ServicesHero from "@/components/services/ServicesHero";
import StickyServiceBlock from "@/components/services/StickyServiceBlock";
import CilsTechniques from "@/components/services/CilsTechniques";
import MicroshadingSteps from "@/components/services/MicroshadingSteps";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full flex-col flex overflow-x-hidden">
      <ServicesHero />
      
      <StickyServiceBlock
        title={t("service_makeup")}
        description={t("service_makeup_long")}
        subServices={[t("service_makeup_sub_1"), t("service_makeup_sub_2"), t("service_makeup_sub_3")]}
        alignRight={false}
      />

      <StickyServiceBlock
        title={t("service_hair")}
        description={t("service_hair_long")}
        subServices={[t("service_hair_sub_1"), t("service_hair_sub_2"), t("service_hair_sub_3")]}
        alignRight={true}
      />

      <StickyServiceBlock
        title={t("service_lashes")}
        description={t("service_lashes_long")}
        specialContent={<CilsTechniques />}
        alignRight={false}
      />

      <StickyServiceBlock
        title={t("service_brows")}
        description={t("service_brows_long")}
        specialContent={<MicroshadingSteps />}
        alignRight={true}
      />

      <StickyServiceBlock
        title={t("service_event_title")}
        description={t("service_event_desc")}
        subServices={[t("service_event_sub_1"), t("service_event_sub_2"), t("service_event_sub_3"), t("service_event_sub_4")]}
        alignRight={false}
      />

      <StickyServiceBlock
        title={t("service_training_title")}
        description={t("service_training_desc")}
        alignRight={true}
      />
    </div>
  );
}
