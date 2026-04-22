import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-brand-primary/20 bg-brand-background text-brand-accent/50 text-center font-inter text-sm">
      <p>&copy; {new Date().getFullYear()} Baddies Beauty Studio. Tous droits réservés.</p>
    </footer>
  );
}
