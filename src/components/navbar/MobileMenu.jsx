"use client";

import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { CreatorBadge } from "@/components/customComponents/CreatorBadge";
import { Copyright } from "@/components/customComponents/Copyright";

export const MobileMenu = ({ isOpen, setIsOpen, links, pathname }) => {
    const isActive = (path) => pathname === path;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop - Below Navbar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setIsOpen(false)}
                        className="md:hidden fixed inset-0 top-16 bg-slate-900/50 backdrop-blur-sm z-[90]"
                    />

                    {/* Sidebar from Right - Below Navbar */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="md:hidden fixed top-16 right-0 bottom-0 w-72 z-[100] bg-white dark:bg-slate-950 shadow-2xl border-l border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden"
                    >
                        {/* Sidebar Links - Takes remaining space */}
                        <div className="flex-1 overflow-y-auto">
                            <nav className="flex flex-col p-4 space-y-1">
                                {links.map((link) => (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                                            isActive(link.to) || (link.to === "/docs" && pathname.startsWith("/docs"))
                                                ? "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 font-semibold"
                                                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                                        )}
                                    >
                                        {link.label}
                                        {(isActive(link.to) || (link.to === "/docs" && pathname.startsWith("/docs"))) && (
                                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-500" />
                                        )}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Footer - Pinned to Bottom */}
                        <div className="flex-none border-t border-slate-200 dark:border-slate-800 p-6 bg-slate-50/50 dark:bg-slate-900/50">
                            <div className="flex flex-col gap-4">
                                {/* Security Status Badge */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">System Status</span>
                                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-100/50 dark:bg-emerald-900/20 border border-emerald-200/50 dark:border-emerald-800/50">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                        <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">Secure</span>
                                    </div>
                                </div>

                                {/* Creator Credit - Unified Component */}
                                <CreatorBadge className="w-full justify-between" />

                                {/* Divider & Copyright */}
                                <div className="h-px w-full bg-slate-200 dark:bg-slate-800 my-1" />
                                <Copyright className="text-[10px] text-center text-slate-400 dark:text-slate-600" />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};
