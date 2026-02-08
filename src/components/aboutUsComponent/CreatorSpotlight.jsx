import { motion } from "framer-motion";
import { Shield, Target, Zap, Terminal, Users } from "lucide-react";
import { Badge } from "./Badge";
import CreatorImage from "@/assets/images/Image.jpg";

export const CreatorSpotlight = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-32 relative"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-50/30 to-transparent dark:via-teal-950/10 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative px-4">
                <div className="bg-white dark:bg-slate-900/80 backdrop-blur-3xl rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 border border-slate-200 dark:border-slate-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-2xl overflow-hidden group">
                    {/* Decorative Elements */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/5 blur-[100px] rounded-full group-hover:bg-teal-500/10 transition-colors duration-700" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full group-hover:bg-emerald-500/10 transition-colors duration-700" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 md:gap-20">
                        {/* Image Container with Professional Framing */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative flex-shrink-0"
                        >
                            <div className="relative w-64 h-64 md:w-80 md:h-80 group/photo">
                                {/* Animated Outer Rings */}
                                <div className="absolute inset-0 border-2 border-teal-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                                <div className="absolute -inset-4 border border-emerald-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                                {/* Photo Frame */}
                                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl z-20 transition-transform duration-500 group-hover/photo:scale-[1.02]">
                                    <img
                                        src={CreatorImage}
                                        alt="Awais Arif - Creator of CipherLab"
                                        className="w-full h-full object-cover group-hover/photo:scale-110 transition-transform duration-700"
                                    />
                                    {/* Grayscale overlay that fades on hover */}
                                    <div className="absolute inset-0 bg-teal-900/10 mix-blend-overlay opacity-50 group-hover/photo:opacity-0 transition-opacity duration-500" />
                                </div>

                                {/* Floating Badge Decoration */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-4 -right-4 bg-teal-500 text-white p-3 rounded-2xl shadow-lg z-30"
                                >
                                    <Shield className="w-6 h-6" />
                                </motion.div>
                            </div>
                        </motion.div>

                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-[10px] font-bold tracking-[0.4em] uppercase mb-8 shadow-xl"
                            >
                                The Architect
                            </motion.div>

                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
                                Awais <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Arif</span>
                            </h2>

                            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mb-8 lg:ml-0 mx-auto" />

                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-10 italic">
                                "I believe that the most powerful security is the one that is understood, not just implemented. CipherLab is the embodiment of that clarity."
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-5">
                                <Badge icon={<Users className="w-4 h-4" />} label="Founder" />
                                <Badge icon={<Terminal className="w-4 h-4" />} label="Developer" />
                                <Badge icon={<Zap className="w-4 h-4" />} label="Innovator" />
                                <Badge icon={<Shield className="w-4 h-4" />} label="Strategist" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

