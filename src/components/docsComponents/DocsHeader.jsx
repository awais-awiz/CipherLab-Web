import { ArrowLeft, FlaskConical, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function DocsHeader({ meta }) {
    return (
        <header className="top-0 z-20 h-16 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl flex items-center justify-between px-4 md:px-6 gap-4">

            <div className="flex items-center gap-4 min-w-0">
                <SidebarTrigger />

                <div className="flex flex-col min-w-0">
                    {/* Breadcrumb */}
                    <div className="text-[11px] flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <meta.icon className="h-3.5 w-3.5 text-teal-600" />
                        <span className="font-medium">Docs</span>
                        <ChevronRight className="w-3 h-3 opacity-50" />
                        <span className="truncate text-slate-700 dark:text-slate-300">{meta.sectionTitle}</span>
                    </div>

                    <span className="text-sm font-semibold text-slate-900 dark:text-white truncate">{meta.sectionTitle}</span>
                </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
                {/* Back to Home */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                    >
                        <Link to="/" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            <span className="hidden sm:inline">Back</span>
                        </Link>
                    </Button>
                </motion.div>

                {/* Open CipherLab */}
                <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
                    <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-semibold shadow-md shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-300 rounded-lg"
                    >
                        <Link to="/cipherlab" className="flex items-center gap-2">
                            <FlaskConical className="w-4 h-4" />
                            <span className="hidden sm:inline">Cipher Playground</span>
                            <span className="sm:hidden">Lab</span>
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </header>
    );
}
