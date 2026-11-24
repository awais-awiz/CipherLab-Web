"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import cipherLabLogo from "@/assets/images/icon.png";

import { DesktopNav } from "./navbar/DesktopNav";
import { MobileMenu } from "./navbar/MobileMenu";

export const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const mobileLinks = [
    { to: "/", label: "Home" },
    { to: "/cipherlab", label: "CipherLab" },
    { to: "/docs", label: "Docs" },
    { to: "/about", label: "About Us" },
  ];

  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl
        border-b border-white/20 dark:border-slate-800/50
        shadow-[0_4px_30px_rgba(0,0,0,0.03)]
        transition-all duration-500
      "
    >
      <div className="mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8 max-w-7xl">

        {/* BRAND LEFT */}
        <Link to="/" className="flex items-center gap-2.5 md:gap-3 group">
          <motion.img
            src={cipherLabLogo}
            alt="CipherLab Logo"
            whileHover={{ rotate: 8, scale: 1.08 }}
            className="w-8 h-8 md:w-9 md:h-9 rounded-xl object-contain shadow-sm group-hover:shadow-teal-500/20 transition-all duration-300"
          />
          <span className="text-lg md:text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-slate-800 to-teal-600 dark:from-white dark:via-slate-200 dark:to-teal-400 group-hover:opacity-80 transition-opacity">
            CipherLab
          </span>
        </Link>

        {/* CENTER NAV - Hidden on mobile */}
        <DesktopNav />

        {/* HAMBURGER MENU BUTTON - Mobile only */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          ) : (
            <Menu className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          )}
        </button>
      </div>

      {/* MOBILE PORTAL MENU */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
        links={mobileLinks}
        pathname={location.pathname}
      />
    </header>
  );
};
