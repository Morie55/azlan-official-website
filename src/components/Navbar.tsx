"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Img from "next/image"

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/95 dark:bg-surface-container/95 backdrop-blur-md border-b border-outline/10 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-unit-md">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-unit-sm focus:outline-none">
          <Img src="/Azlan Logo.png" alt="Azlan Logo" width={120} height={36} style={{ height: "2.25rem", width: "auto" }} />
          <span className="font-display text-[22px] font-extrabold text-primary tracking-tight hidden sm:inline-block">
            AZLAN <span className="text-gold-accent font-medium text-sm tracking-widest uppercase ml-1">SL</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-unit-lg">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-sans text-[15px] font-semibold transition-all duration-200 focus:outline-none hover:text-gold-accent ${isActive(link.href)
                ? "text-primary border-b-2 border-gold-accent pb-1"
                : "text-on-surface-variant"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-gold-accent hover:bg-gold-accent/90 text-primary font-sans font-bold text-[14px] px-unit-md py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow focus:outline-none uppercase tracking-wider"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Burger Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-on-surface hover:text-primary focus:outline-none p-1 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span className="material-symbols-outlined text-[28px]">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay & Content */}
      <div
        className={`md:hidden absolute top-[68px] left-0 w-full bg-surface-container/95 backdrop-blur-lg border-b border-outline/10 shadow-lg transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) ${isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="flex flex-col gap-unit-md p-unit-lg max-w-container-max mx-auto px-margin-mobile">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-sans text-[16px] font-bold py-2 border-b border-outline/5 hover:text-gold-accent transition-colors ${isActive(link.href) ? "text-primary" : "text-on-surface-variant"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-gold-accent hover:bg-gold-accent/90 text-primary text-center font-sans font-bold text-[14px] py-3 rounded-lg transition-all duration-300 shadow-md uppercase tracking-wider mt-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
