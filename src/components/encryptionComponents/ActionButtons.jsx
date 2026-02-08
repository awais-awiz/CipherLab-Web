import { Button } from "@/components/ui/button";
import { Lock, Unlock, RotateCcw, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const ActionButtons = ({ process, clearAll }) => {
    return (
        <div className="grid gap-4 sm:grid-cols-3 pt-4">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg"
                    className="w-full h-14 bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 hover:from-teal-400 hover:via-teal-500 hover:to-emerald-500 text-white font-semibold shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 rounded-xl group"
                    onClick={() => process("encrypt")}
                >
                    <Lock className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Encrypt
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg"
                    className="w-full h-14 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:via-emerald-500 hover:to-teal-500 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 rounded-xl group"
                    onClick={() => process("decrypt")}
                >
                    <Unlock className="w-5 h-5 mr-2 group-hover:-rotate-12 transition-transform" />
                    Decrypt
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg"
                    variant="outline"
                    className="w-full h-14 bg-white/80 dark:bg-slate-800/80 border-2 border-slate-200 dark:border-slate-600 hover:border-rose-300 dark:hover:border-rose-500 hover:bg-rose-50/50 dark:hover:bg-rose-900/20 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 font-semibold rounded-xl transition-all duration-300 group"
                    onClick={clearAll}
                >
                    <RotateCcw className="w-5 h-5 mr-2 group-hover:rotate-[-180deg] transition-transform duration-500" />
                    Clear All
                </Button>
            </motion.div>
        </div>
    );
};
