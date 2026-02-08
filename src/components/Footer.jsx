"use client";

import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { CreatorBadge } from "@/components/customComponents/CreatorBadge";
import { Copyright } from "@/components/customComponents/Copyright";

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-10 p-5 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 blur-[64px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
                <div className="col-span-2 lg:col-span-1 space-y-4">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-6 h-6 text-teal-400" />
                        <span className="text-2xl font-bold tracking-tight">CipherLab</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                        The modern encryption lab. Build, test, and understand security.
                    </p>
                </div>

                <div>
                    <h5 className="font-bold mb-4 text-slate-200 uppercase tracking-wider text-xs">The Lab</h5>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><Link to="/cipherlab" className="hover:text-teal-400 transition-colors">Cipher Playground</Link></li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-bold mb-4 text-slate-200 uppercase tracking-wider text-xs">Resources</h5>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><Link to="/docs" className="hover:text-teal-400 transition-colors">Documentation</Link></li>
                    </ul>
                </div>

                <div className="col-span-2 lg:col-span-1">
                    <h5 className="font-bold mb-4 text-slate-200 uppercase tracking-wider text-xs">Creator</h5>
                    <CreatorBadge />
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/50 text-center">
                <Copyright className="text-xs" />
            </div>
        </footer>
    );
};
