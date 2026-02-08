"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { toast, Toaster } from "sonner";
import { Settings2 } from "lucide-react";
import { motion } from "framer-motion";

import { runCipher } from "@/lib/process/cipherProcessor";
import { getCipherByValue, getKeyPlaceholder } from "@/lib/cipher/ciphers";
import { OutputCard } from "@/components/encryptionComponents/OutputCard";
import { InputPanel } from "./InputPanel";
import { KeyControls } from "./KeyControls";
import { ActionButtons } from "./ActionButtons";

export const EncryptionPanel = ({ cipherType }) => {
    const [text, setText] = useState("");
    const [key, setKey] = useState("");
    const [output, setOutput] = useState("");

    const [keyType, setKeyType] = useState("ascii");
    const [outputType, setOutputType] = useState("ascii");

    useEffect(() => {
        setText("");
        setKey("");
        setOutput("");

        // Auto-select HEX options for RC4/Hill as they are binary-focused
        if (cipherType === "rc4") {
            setOutputType("hex");
            setKeyType("hex");
        } else if (cipherType === "hill") {
            setOutputType("hex");
            setKeyType("ascii");
        } else {
            setOutputType("ascii");
            setKeyType("ascii");
        }
    }, [cipherType]);

    const cipherMeta = getCipherByValue(cipherType);
    const keyPlaceholder = getKeyPlaceholder(cipherType);

    const process = (mode) => {
        if (!text || !key) {
            toast.error("Please enter both text and key");
            return;
        }

        const { ok, result, error } = runCipher({
            cipherType, mode, text, key, keyType, outputType,
        });

        if (!ok) { toast.error(error); return; }

        setOutput(result);
        toast.success(mode === "encrypt" ? "Encrypted!" : "Decrypted!");
    };

    const clearAll = () => { setText(""); setKey(""); setOutput(""); };

    return (
        <div className="space-y-10">
            {/* Main Input/Output Grid */}
            <div className="grid gap-8 lg:grid-cols-2">
                {/* Left: Input Panel with Key Generator */}
                <InputPanel text={text} setText={setText}
                    cipherKey={key} setKey={setKey}
                    cipherMeta={cipherMeta} keyPlaceholder={keyPlaceholder}
                    cipherType={cipherType} keyType={keyType}
                />

                {/* Right: Output & Controls Panel */}
                <Card className="flex-1 p-8 lg:p-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl flex flex-col gap-8">
                    {/* Output Section */}
                    <OutputCard output={output} />

                    {/* Key Controls Section */}
                    <motion.div className="space-y-4" initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <div className="flex items-center gap-3">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}
                                className="p-2 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700"
                            >
                                <Settings2 className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                            </motion.div>
                            <h3 className="text-lg m-0 font-bold text-slate-900 dark:text-white">
                                Options
                            </h3>
                        </div>

                        <KeyControls
                            cipherType={cipherType}
                            keyType={keyType}
                            setKeyType={setKeyType}
                            outputType={outputType}
                            setOutputType={setOutputType}
                        />
                    </motion.div>

                    {/* Action Buttons */}
                    <ActionButtons process={process} clearAll={clearAll} />
                </Card>
            </div>

            <Toaster />
        </div>
    );
};
