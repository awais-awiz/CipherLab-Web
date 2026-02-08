import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileText, Key, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

import { HillCipher } from "@/lib/cipher/hillCipher";
import { PlayfairCipher } from "@/lib/cipher/playfairCipher";
import { RC4Cipher } from "@/lib/cipher/rc4Cipher";
import { CaesarCipher } from "@/lib/cipher/caesarCipher";
import { RailFenceCipher } from "@/lib/cipher/railFenceCipher";


const generators = {
    hill: { label: "Hill Key", generate: () => new HillCipher().generateRandomKeyString() },
    playfair: { label: "Playfair", generate: () => new PlayfairCipher().generateRandomKey() },
    caesar: { label: "Caesar", generate: () => new CaesarCipher().generateRandomKey() },
    railfence: { label: "Rail Fence", generate: () => new RailFenceCipher().generateRandomKey() },
    rc4: { label: "RC4 Key", generate: (keyType) => new RC4Cipher().generateRandomKey(keyType) },
};

export const InputPanel = ({ text, setText, cipherKey, setKey, cipherMeta, keyPlaceholder, cipherType, keyType }) => {
    const currentGenerator = generators[cipherType];

    const handleGenerate = () => {
        if (!currentGenerator) return;
        const newKey = cipherType === "rc4" ? currentGenerator.generate(keyType)
            : currentGenerator.generate();
        setKey(newKey);
        toast.success(`${currentGenerator.label} generated!`);
    };

    return (
        <Card className="flex-1 justify-between p-8 lg:p-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
            {/* Text Input Section */}
            <motion.div className="space-y-4 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
            >
                <div className="flex items-center gap-3">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-2 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 border border-teal-100 dark:border-teal-800"
                    >
                        <FileText className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    </motion.div>
                    <h2 className="text-xl m-0 font-bold text-slate-900 dark:text-white">
                        Input Text
                    </h2>
                </div>

                <Textarea value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter your plaintext or ciphertext..."
                    className="font-mono min-h-[140px] text-base leading-relaxed bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus:border-teal-400 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-800 transition-all duration-300 rounded-xl resize-none hover:border-teal-300 dark:hover:border-teal-600"
                />
            </motion.div>

            {/* Key Input Section */}
            <motion.div className="space-y-4" initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <motion.div whileHover={{ scale: 1.1, rotate: -5 }}
                            className="p-2 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border border-emerald-100 dark:border-emerald-800"
                        >
                            <Key className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </motion.div>
                        <h2 className="text-xl m-0 font-bold text-slate-900 dark:text-white">
                            {cipherMeta?.label || "Encryption Key"}
                        </h2>
                    </div>
                    <motion.span whileHover={{ scale: 1.05 }}
                        className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-700 font-semibold cursor-default"
                    >
                        Required
                    </motion.span>
                </div>

                {cipherMeta?.description && (
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        {cipherMeta.description}
                    </p>
                )}

                {/* Key Input with Generate Button */}
                <div className="flex gap-3">
                    <Input value={cipherKey}
                        onChange={(e) => setKey(e.target.value)}
                        placeholder={keyPlaceholder}
                        className="flex-1 font-mono text-base h-12 bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus:border-teal-400 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-800 transition-all duration-300 rounded-xl hover:border-teal-300 dark:hover:border-teal-600"
                    />

                    {currentGenerator && (
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button onClick={handleGenerate}
                                className="h-12 px-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 rounded-xl"
                            >
                                <Sparkles className="w-4 h-4 mr-2" />
                                Generate
                            </Button>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </Card>
    );
};
