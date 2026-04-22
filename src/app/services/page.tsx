import ServicesHero from "@/components/services/ServicesHero";
import StickyServiceBlock from "@/components/services/StickyServiceBlock";
import CilsTechniques from "@/components/services/CilsTechniques";
import MicroshadingSteps from "@/components/services/MicroshadingSteps";

export default function ServicesPage() {
  return (
    <div className="w-full flex-col flex overflow-x-hidden">
      <ServicesHero />
      
      <StickyServiceBlock
        title="Maquillage Glam"
        description="Maquillage sur mesure pour toutes occasions. Faux cils inclus dans chaque prestation pour sublimer votre regard à la perfection."
        subServices={["Maquillage jour", "Maquillage soirée", "Maquillage évènementiel"]}
        alignRight={false}
      />

      <StickyServiceBlock
        title="Coiffure"
        description="Coiffure GLAM adaptée à votre style et votre morphologie. Du volume, des ondulations ou des attaches structurées selon vos envies."
        subServices={["Coiffure mariée", "Coiffure invitée", "Coiffure shooting"]}
        alignRight={true}
      />

      <StickyServiceBlock
        title="Extension de Cils"
        description="Cils longs et recourbés avec 3 techniques disponibles. Réveillez-vous tous les matins avec un regard de biche."
        specialContent={<CilsTechniques />}
        alignRight={false}
      />

      <StickyServiceBlock
        title="Microshading Sourcils"
        description="Sourcils redessinés par petits points pour un effet ombre naturel. Pigments organiques semi-permanents exclusivement."
        specialContent={<MicroshadingSteps />}
        alignRight={true}
      />

      <StickyServiceBlock
        title="Prestations Événementielles"
        description="Services de mise en beauté premium sur le terrain pour les professionnels."
        subServices={["Shooting photo", "Tournage clip", "Plateau TV", "Personnalités & Artistes"]}
        alignRight={false}
      />

      <StickyServiceBlock
        title="Cours d'Automaquillage"
        description="Apprenez à vous maquiller seule avec les bons gestes et les bons produits. Des masterclasses privées sur mesure."
        alignRight={true}
      />
    </div>
  );
}
