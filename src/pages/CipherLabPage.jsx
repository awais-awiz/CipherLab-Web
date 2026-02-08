"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Sparkles } from "lucide-react";
import { EncryptionPanel } from "@/components/encryptionComponents/EncryptionPanel";
import { CipherSelector } from "@/components/CipherSelector";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getCipherByValue } from "@/lib/cipher/ciphers";

export const CipherLabPage = () => {
  const [cipher, setCipher] = useState("caesar");
  const cipherMeta = getCipherByValue(cipher);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-slate-950">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 w-full">
        {/* Subtle background decorations */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-teal-400/10 blur-[100px]" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-[100px]" />
          <div className="absolute left-1/4 bottom-0 h-72 w-72 rounded-full bg-slate-300/30 dark:bg-slate-700/20 blur-[80px]" />
        </div>

        {/* Hero Header Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 relative z-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            {/* Title Area */}
            <div className="space-y-4 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400 font-medium">
                Tools / Cipher Playground
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
                Cipher <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Playground</span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                Encrypt and decrypt text using classic ciphers with live output, key helpers, and instant processing. Everything stays on your device.
              </p>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
                <Zap className="w-4 h-4 text-teal-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Instant</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Private</span>
              </div>
              {cipherMeta && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 border border-teal-200/50 dark:border-teal-700/50 shadow-sm">
                  <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">{cipherMeta.label}</span>
                </div>
              )}
            </div>
          </div>
        </motion.section>

        {/* Cipher Selector */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 md:mb-12 relative z-10"
        >
          <CipherSelector value={cipher} onChange={setCipher} />
        </motion.section>

        {/* Encryption Panel */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10"
        >
          <EncryptionPanel cipherType={cipher} />
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};
