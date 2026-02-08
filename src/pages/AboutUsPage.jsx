"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Target, Cpu, Users, Zap, Terminal } from "lucide-react";
import { CreatorSpotlight } from "@/components/aboutUsComponent/CreatorSpotlight";
import { ValueCard } from "@/components/aboutUsComponent/ValueCard";
import { TechItem } from "@/components/aboutUsComponent/TechItem";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = { animate: { transition: { staggerChildren: 0.1 } } };

export const AboutUsPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-slate-950">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 w-full">
                {/* Hero Section */}
                <motion.section {...fadeIn} className="text-center mb-20" >
                    <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800 px-4 py-1.5 text-sm font-medium text-teal-700 dark:text-teal-300 mb-6">
                        <Shield className="w-4 h-4" />
                        Our Mission
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                        Democratizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Cryptography</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        CipherLab was born from a simple belief: computer security shouldn't be a black box.
                        We build interactive tools to help students, developers, and curious minds explore the
                        mechanics of mathematical secrecy.
                    </p>
                </motion.section>

                {/* Vision/Values Section */}
                <motion.section variants={staggerContainer}
                    initial="initial" whileInView="animate"
                    viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-24"
                >
                    <ValueCard variant="educational" />
                    <ValueCard variant="performance" />
                    <ValueCard variant="opensource" />
                </motion.section>

                {/* Advanced Creator Section */}
                <CreatorSpotlight />

                {/* Tech Stack Section - Original List Style + Additions */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative"
                >


                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Built with Modern Tech</h2>
                            <div className="space-y-6">
                                <TechItem variant="react" />
                                <TechItem variant="tailwind" />
                                <TechItem variant="framer" />
                                <TechItem variant="radix" />
                                <TechItem variant="lucide" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center relative">
                            <Terminal className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 text-teal-600/25 dark:text-teal-300/25 pointer-events-none" />
                            <div className="relative w-64 h-64 flex flex-col justify-center items-center">
                                <motion.div
                                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-teal-500/10 blur-3xl rounded-full will-change-opacity"
                                />
                                <div className="relative bg-gradient-to-br from-slate-800 to-slate-950 p-8 rounded-2xl border border-slate-700/50 shadow-2xl flex items-center justify-center group overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Cpu className="w-24 h-24 text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

            </main>

            <Footer />
        </div>
    );
};
