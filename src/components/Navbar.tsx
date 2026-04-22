"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Galerie", href: "/galerie" },
  { label: "Mariées", href: "/mariees" },
  { label: "Formations", href: "/formations" },
  { label: "Contact", href: "/contact" },
];

const PLANITY_URL = "https://www.planity.com/baddies-beauty-studio-60440-nanteuil-le-haudoin";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: "top -50",
        onEnter: () => {
          gsap.to(navRef.current, {
            backgroundColor: "#000000",
            borderBottom: "1px solid #D4AF37",
            duration: 0.3,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(navRef.current, {
            backgroundColor: "transparent",
            borderBottom: "1px solid transparent",
            duration: 0.3,
            ease: "power2.out",
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth slide
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 w-full z-50 px-6 py-4 transition-colors text-brand-accent"
        style={{ borderBottom: "1px solid transparent", backgroundColor: "transparent" }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 z-50">
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-brand-primary"
            >
              <path
                d="M10 5H22C26.4183 5 30 8.58172 30 13C30 15.656 28.7061 17.9866 26.6521 19.4124C29.2155 20.7352 31 23.3642 31 26.5C31 31.1944 27.1944 35 22.5 35H10V5Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M10 19H22C24.7614 19 27 16.7614 27 14C27 11.2386 24.7614 9 22 9H10V19Z"
                fill="currentColor"
              />
            </svg>
            <span className="font-playfair text-xl font-bold tracking-widest text-[#D4AF37] hidden sm:block">
              BADDIES BEAUTY
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 font-inter text-sm tracking-widest uppercase">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative group hover:text-brand-primary transition-colors py-2"
                >
                  {link.label}
                  {isActive ? (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  ) : (
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <a
              href={PLANITY_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-[#D4AF37] text-black font-inter text-sm font-semibold uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-[#FBF5B7] transition-colors"
            >
              Réserver
            </a>
            <button
              className="p-2 lg:hidden text-brand-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div key={link.label} variants={linkVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-playfair text-4xl uppercase tracking-widest ${
                        isActive ? "text-brand-primary" : "text-brand-accent hover:text-brand-primary"
                      } transition-colors relative group`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileNavIndicator"
                          className="absolute -bottom-2 left-0 right-0 h-[2px] bg-brand-primary"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
