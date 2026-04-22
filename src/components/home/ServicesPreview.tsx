"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles, Eye, Scissors, PenTool } from "lucide-react";

const SERVICES = [
  { id: 1, title: "Maquillage Glam", desc: "Pour briller lors de vos événements", icon: Sparkles },
  { id: 2, title: "Extension de Cils", desc: "Un regard intense et naturel", icon: Eye },
  { id: 3, title: "Microshading Sourcils", desc: "Sourcils parfaits et structurés", icon: PenTool },
  { id: 4, title: "Coiffure", desc: "Des coiffures élégantes et modernes", icon: Scissors },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesPreview() {
  return (
    <section id="services" className="w-full py-24 bg-[#050505] relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl text-brand-primary text-center mb-16">
          Nos Prestations
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(212, 175, 55, 0.15)" }}
                className="bg-black/40 backdrop-blur-md border border-brand-primary/20 rounded-2xl p-8 flex flex-col items-center text-center transition-colors duration-300 hover:border-brand-primary/50 group"
              >
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={28} />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-3">{service.title}</h3>
                <p className="font-inter text-brand-accent/60 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
