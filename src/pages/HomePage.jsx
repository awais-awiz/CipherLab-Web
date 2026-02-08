"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Lock, BookOpen, Sparkles, ChevronRight,
  ShieldCheck, Zap, Globe, Key, FlaskConical,
  Binary, Fingerprint, ShieldAlert, Cpu,
  RefreshCcw, MoveRight, HelpCircle
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const HomePage = () => {
  const [scrambleText, setScrambleText] = useState("MASTER THE ART");
  const [cipheredText, setCipheredText] = useState("");

  // Simple Caesar shift for the live scramble effect
  useEffect(() => {
    const shift = 3;
    const result = scrambleText.toUpperCase().split('').map(char => {
      if (char >= 'A' && char <= 'Z') {
        const code = ((char.charCodeAt(0) - 65 + shift) % 26) + 65;
        return String.fromCharCode(code);
      }
      return char;
    }).join('');
    setCipheredText(result);
  }, [scrambleText]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-slate-950">
      <Navbar />

      <main>
        {/* Abstract Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden opacity-20 dark:opacity-30 will-change-transform">
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[10%] w-[40%] h-[60%] bg-teal-400 blur-[64px] rounded-full will-change-[opacity,filter]"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[5%] right-[10%] w-[35%] h-[50%] bg-emerald-400 blur-[64px] rounded-full will-change-[opacity,filter]"
          />
        </div>

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                {...fadeIn}
                className="inline-flex items-center gap-2 rounded-full border border-teal-100 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/30 px-3 py-1 text-xs font-semibold text-teal-700 dark:text-teal-300 mb-8"
              >
                <Sparkles className="w-3.5 h-3.5" />
                The Modern Encryption Lab
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1] break-words"
              >
                Mathematical{" "}
                <span className="hidden sm:inline"><br /></span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                  Invisible Ink
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mb-12 leading-relaxed"
              >
                Don't just use encryption—understand it. Explore the algorithms that secure our digital world through live visualizers and interactive labs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild size="lg" className="h-12 px-8 bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-lg shadow-teal-500/20 transition-all hover:scale-105 active:scale-95">
                  <Link to="/cipherlab" className="flex items-center gap-2 font-bold tracking-tight">
                    OPEN LAB
                    <Zap className="w-4 h-4 fill-current" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all hover:scale-105 active:scale-95">
                  <Link to="/docs" className="font-bold tracking-tight">VIEW DOCS</Link>
                </Button>
              </motion.div>
            </div>

            {/* LIVE SCRAMBLE WIDGET */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative group lg:block hidden will-change-transform"
            >
              <div className="absolute inset-0 bg-teal-500/10 blur-[40px] rounded-full group-hover:bg-teal-500/20 transition-all duration-700 will-change-transform" />
              <Card className="relative p-8 rounded-[2rem] border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden border">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                    live_scramble.exe
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter ml-1">Plaintext</label>
                    <input
                      type="text"
                      value={scrambleText}
                      onChange={(e) => setScrambleText(e.target.value.slice(0, 20))}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 font-mono text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all"
                      placeholder="Type something..."
                    />
                  </div>

                  <div className="flex justify-center py-2">
                    <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center animate-bounce">
                      <RefreshCcw className="w-4 h-4 text-teal-600" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter ml-1">Ciphertext (Rot3)</label>
                    <div className="w-full bg-slate-900 dark:bg-black border border-slate-800 rounded-xl px-4 py-3 font-mono text-emerald-400 overflow-hidden text-ellipsis whitespace-nowrap shadow-inner">
                      {cipheredText}
                      <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>LATENCY: 1.2ms</span>
                  <span>MODE: CAESAR_SHIFT</span>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Dynamic Concept Section */}
        <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">How Secrets are Made</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">Modern security relies on three core mathematical pillars. CipherLab helps you master each one.</p>
              </div>
              <Link to="/docs" className="group flex items-center gap-2 text-teal-600 font-bold text-sm tracking-widest uppercase mb-2">
                Learn the Science
                <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              <ConceptCard
                icon={<Binary className="w-8 h-8" />}
                title="Transposition"
                description="Rearranging the characters of a message according to a geometric pattern. Think of it like a deck of cards being shuffled."
                tag="STRUCTURE"
              />
              <ConceptCard
                icon={<Fingerprint className="w-8 h-8" />}
                title="Substitution"
                description="Replacing each element in a message with another element. This is the foundation of almost all classical ciphers."
                tag="REPLACEMENT"
              />
              <ConceptCard
                icon={<Cpu className="w-8 h-8" />}
                title="Stream Flow"
                description="Processing data bit-by-bit or byte-by-byte using a continuous key. The modern standard for speed and efficiency."
                tag="DYNAMICS"
              />
            </motion.div>
          </div>
        </section>

        {/* Algorithm Carousel / Strip */}
        <section className="py-20 bg-white dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 px-4 sm:px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <div className="mb-12 inline-flex items-center gap-2 text-slate-400 font-mono text-xs uppercase tracking-[0.4em]">
              Supported_Protocols
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <ProtocolTag label="HILL_CIPHER" icon={<Key className="w-3.5 h-3.5" />} />
              <ProtocolTag label="RC4_STREAM" icon={<Binary className="w-3.5 h-3.5" />} />
              <ProtocolTag label="PLAYFAIR" icon={<Fingerprint className="w-3.5 h-3.5" />} />
              <ProtocolTag label="CAESAR_MOD" icon={<ShieldAlert className="w-3.5 h-3.5" />} />
              <ProtocolTag label="RAIL_FENCE" icon={<FlaskConical className="w-3.5 h-3.5" />} />
            </div>
          </div>
        </section>

        {/* Knowledge Hook Section */}
        <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-500/10 blur-2xl rounded-full will-change-filter" />
              <div className="relative space-y-6">
                <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl border md:rotate-[-2deg] hover:rotate-0 transition-transform cursor-pointer">
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">Did You Know?</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">The Hill Cipher was the first cipher to use linear algebra for polygraphic substitution in 1929.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-slate-900 dark:bg-black border-slate-800 rounded-2xl shadow-xl border md:translate-x-12 md:rotate-[3deg] hover:rotate-0 transition-transform cursor-pointer">
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Instant Speed</h4>
                      <p className="text-sm text-slate-400">RC4 can generate millions of random bits per second, which is why it was the king of early WiFi security.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-4 inline-block">THE LAB EXPERIENCE</span>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">Complex Science. <br />Simplified Interface.</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                We've removed the barrier of entry to cryptographic study. No more dry textbooks or complex command lines—just pure, interactive discovery.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-900 dark:text-slate-200 font-semibold">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  Visual Step-by-Step Logic
                </div>
                <div className="flex items-center gap-3 text-slate-900 dark:text-slate-200 font-semibold">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  Matrix & Key Visualization
                </div>
                <div className="flex items-center gap-3 text-slate-900 dark:text-slate-200 font-semibold">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  Algorithm Breakdown Sheets
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

const ConceptCard = ({ icon, title, description, tag }) => (
  <motion.div variants={fadeIn} className="group">
    <Card className="h-full p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-teal-500/30 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        {icon}
      </div>
      <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[9px] font-bold text-slate-500 tracking-widest mb-6">
        {tag}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
    </Card>
  </motion.div>
);

const ProtocolTag = ({ label, icon }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-teal-500 group transition-all cursor-pointer">
    <div className="text-slate-400 group-hover:text-teal-500 transition-colors">
      {icon}
    </div>
    <span className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors tracking-tighter">
      {label}
    </span>
  </div>
);
