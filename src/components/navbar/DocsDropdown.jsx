"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { BookOpen, KeyRound, FlaskConical, Lock, ChevronRight, } from "lucide-react";
import { NavdropItem } from "./NavdropItem";

export function DocsDropdown({ active }) {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger
                className={cn("relative h-10 px-4 text-sm cursor-pointer transition-all duration-300 bg-transparent",
                    active ? "text-teal-600 dark:text-teal-400 font-bold"
                        : "text-slate-600 dark:text-slate-400 hover:text-teal-600 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent"
                )}> Docs
                {active && (
                    <motion.div layoutId="nav-active"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-teal-500 rounded-full mb-1"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />)}
            </NavigationMenuTrigger>

            <NavigationMenuContent className="z-50 relative">
                <div className={cn("grid gap-4 p-4 relative",
                    "overflow-hidden rounded-xl",
                    "w-[min(100vw-2rem,340px)] grid-cols-1",
                    "min-[1100px]:w-[min(100vw-2rem,620px)] min-[1100px]:grid-cols-[1.4fr_2fr]"
                )}
                >
                    {/* LEFT CARD */}
                    <div className="group relative flex flex-col justify-evenly rounded-xl 
                    border border-teal-100/50 dark:border-slate-800 overflow-hidden
                    bg-gradient-to-br from-white/90 via-teal-50/60 to-emerald-50/50 dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-900/50
                    p-6 shadow-sm transition-all duration-500backdrop-blur-sm
                    hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.35)]
                    hover:border-teal-300/60 hover:-translate-y-1"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-120%] group-hover:translate-x-[120%] transition-all duration-1000 ease-out" />

                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-teal-600 text-white shadow group-hover:bg-teal-700 transition-all duration-300">
                                <BookOpen className="w-4 h-4" />
                            </div>

                            <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-teal-700 border border-teal-200 shadow-sm tracking-wide">
                                <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-ping" />
                                Quick Start
                            </span>
                        </div>

                        <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white tracking-tight">
                            CipherLab Docs
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                            Everything you need to learn, understand, and master classic encryption.
                        </p>

                        <NavigationMenuLink asChild unstyled>
                            <Link to="/docs?section=introduction"
                                className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-600 to-emerald-600 px-4 py-1.5 text-xs font-semibold text-white shadow transition-all duration-300 hover:shadow-[0_10px_25px_rgba(16,185,129,0.4)] hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-1">
                                Open Documentation <ChevronRight className="h-3 w-3" />
                            </Link>
                        </NavigationMenuLink>
                    </div>
                    {/* RIGHT LIST */}
                    <ul className="grid gap-1 text-sm">
                        <NavdropItem to="/docs?section=introduction"
                            icon={<BookOpen className="mt-0.5 h-4 w-4 text-teal-600" />}
                            title="Introduction" desc="What CipherLab is and how it works."
                        />
                        <NavdropItem to="/docs?section=ciphers"
                            icon={<Lock className="mt-0.5 h-4 w-4 text-teal-600" />}
                            title="Ciphers & Encryption" desc="Supported algorithms & flow."
                        />
                        <NavdropItem to="/docs?section=security"
                            icon={<KeyRound className="mt-0.5 h-4 w-4 text-teal-600" />}
                            title="Security Basics" desc="Keys, attacks, and cryptanalysis."
                        />
                        <NavdropItem to="/docs?section=implementation"
                            icon={<FlaskConical className="mt-0.5 h-4 w-4 text-teal-600" />}
                            title="Implementation Guide" desc="Code examples and performance."
                        />
                    </ul>
                </div>
            </NavigationMenuContent>
        </NavigationMenuItem>
    );
}
