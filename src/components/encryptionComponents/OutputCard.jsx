import { Copy, CheckCircle2, Terminal } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export const OutputCard = ({ output }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (!output) return;

        try {
            // Modern Clipboard API (Requires Secure Context / HTTPS)
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(output);
            } else {
                // Fallback for Mobile / Local IP / Non-Secure Context
                const textArea = document.createElement("textarea");
                textArea.value = output;
                textArea.style.position = "fixed";
                textArea.style.left = "-999999px";
                textArea.style.top = "-999999px";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                const successful = document.execCommand("copy");
                textArea.remove();
                if (!successful) throw new Error("Fallback copy failed");
            }

            setCopied(true);
            toast.success("Copied to clipboard!");
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
            toast.error("Failed to copy. Please select manually.");
        }
    };

    return (
        <motion.div className="space-y-4" initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-2 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 border border-violet-100 dark:border-violet-800"
                    >
                        <Terminal className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                    </motion.div>
                    <h3 className="text-lg m-0 font-bold text-slate-900 dark:text-white">
                        Output
                    </h3>
                </div>

                <AnimatePresence mode="wait">
                    {output && (
                        <motion.div initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Button variant="ghost" size="sm" onClick={handleCopy}
                                className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300"
                            >
                                <motion.span key={copied ? "copied" : "copy"}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center"
                                >
                                    {copied ? (
                                        <> <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" />
                                            Copied </>
                                    ) : (<> <Copy className="w-4 h-4 mr-2" />
                                        Copy
                                    </>)}
                                </motion.span>
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="relative">
                <Textarea value={output} readOnly
                    placeholder="Your encrypted or decrypted result will appear here..."
                    className="font-mono min-h-[140px] text-base bg-gradient-to-br from-slate-50 to-slate-100/50 dark:from-slate-800/80 dark:to-slate-900/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 transition-all duration-300 rounded-xl hover:border-violet-300 dark:hover:border-violet-600 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-800"
                />
                {output && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-semibold uppercase tracking-wider"
                    >
                        Ready
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};
