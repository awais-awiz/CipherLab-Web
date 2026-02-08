"use client";

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { CipherLabPage } from "@/pages/CipherLabPage";
import { AboutUsPage } from "@/pages/AboutUsPage";
import Docs from "@/pages/Docs";
import NotFound from "@/pages/NotFound";

// Scrolls to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Cipher calculator / playground */}
        <Route path="/cipherlab" element={<CipherLabPage />} />

        {/* About Us */}
        <Route path="/about" element={<AboutUsPage />} />

        {/* Documentation - unified single page */}
        <Route path="/docs" element={<Docs />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
