import { motion } from "framer-motion";
import { Target, Zap, Users } from "lucide-react";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const cards = {
    educational: {
        icon: <Target className="w-6 h-6 text-teal-600" />,
        title: "Educational First",
        description: "We focus on clarity and interaction. Every tool is designed to be a learning moment, not just a utility."
    },
    performance: {
        icon: <Zap className="w-6 h-6 text-emerald-600" />,
        title: "Performant & Clean",
        description: "Modern web technologies ensure that our interactive visualizations are smooth, responsive, and accessible."
    },
    opensource: {
        icon: <Users className="w-6 h-6 text-cyan-600" />,
        title: "Open Source Heart",
        description: "Knowledge belongs to everyone. Our platform aims to clarify standard algorithms used in the industry for years."
    }
};

export const ValueCard = ({ variant }) => {
    const content = cards[variant];

    if (!content) return null;

    return (
        <motion.div
            variants={fadeIn}
            className="bg-white dark:bg-slate-900 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all min-w-0"
        >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 sm:mb-6">
                {content.icon}
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">{content.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{content.description}</p>
        </motion.div>
    );
};