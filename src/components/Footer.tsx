import React from "react";
import Link from "next/link";
import { AZLANLogo } from "./AZLANLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-on-background dark:bg-surface-container-lowest border-t border-gold-accent/20 transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-unit-xl gap-gutter">
        {/* Brand Section */}
        <div className="flex flex-col gap-unit-md max-w-md">
          <div className="flex items-center gap-unit-sm">
            {/* Logo rendered inverted/white to stand out on dark background */}
            <div className="brightness-0 invert">
              <AZLANLogo className="h-8 w-auto" />
            </div>
            <span className="font-display text-headline-sm font-bold text-background dark:text-on-background tracking-tight">
              AZLAN (SL) LIMITED
            </span>
          </div>
          <p className="font-sans text-body-md text-background/60 dark:text-on-background/60 leading-relaxed">
            Empowering the nation through innovative technology and strategic leadership.
            Built with pride in Freetown for the future of Africa.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-unit-xl w-full md:w-auto">
          {/* Sitemap */}
          <div className="flex flex-col gap-unit-sm">
            <span className="font-display text-label-caps text-[#F5C842] uppercase tracking-wider font-semibold">
              Sitemap
            </span>
            <Link
              href="/"
              className="font-sans text-body-md text-background/80 dark:text-on-background/80 hover:text-[#F5C842] transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-sans text-body-md text-background/80 dark:text-on-background/80 hover:text-[#F5C842] transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/products"
              className="font-sans text-body-md text-background/80 dark:text-on-background/80 hover:text-[#F5C842] transition-colors duration-200"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="font-sans text-body-md text-background/80 dark:text-on-background/80 hover:text-[#F5C842] transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-unit-sm">
            <span className="font-display text-label-caps text-[#F5C842] uppercase tracking-wider font-semibold">
              Legal
            </span>
            <Link
              href="/privacy"
              className="font-sans text-body-md text-background/80 dark:text-on-background/80 hover:text-[#F5C842] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-body-md text-background/80 dark:text-on-background/80 hover:text-[#F5C842] transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-unit-md border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-unit-sm text-center sm:text-left transition-all duration-300">
        <span className="font-sans text-body-md text-background/40 dark:text-on-background/40">
          Built with pride in Freetown. © 2026 AZLAN (SL) LIMITED.
        </span>
        <div className="flex items-center gap-unit-xs">
          <span className="text-background/40 dark:text-on-background/40 text-xs">
            Freetown, Sierra Leone
          </span>
          <span
            className="material-symbols-outlined text-[#F5C842] text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            favorite
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
