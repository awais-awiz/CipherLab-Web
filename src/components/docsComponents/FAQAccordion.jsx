"use client";

import { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { HelpCircle, Shield, Code, Wrench, ChevronRight, Lightbulb, AlertTriangle, Info } from "lucide-react";
import { faqContent } from "@/data/faq-content";

// Icon mapping for dynamic icon rendering
const iconMap = {
    HelpCircle,
    Shield,
    Code,
    Wrench
};

// Helper components for different detail types
function DetailItem({ detail }) {
    switch (detail.type) {
        case "comparison":
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                    {Object.entries(detail.data).map(([key, value]) => (
                        <div key={key} className="flex items-start gap-2 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <ChevronRight className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="font-medium text-slate-700 dark:text-slate-200">{key}:</span>
                                <span className="text-slate-600 dark:text-slate-300 ml-1">{value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            );
        case "tip":
            return (
                <div className="flex items-start gap-2 mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <Lightbulb className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-green-700 dark:text-green-300">{detail.text}</span>
                </div>
            );
        case "warning":
            return (
                <div className="flex items-start gap-2 mt-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-amber-700 dark:text-amber-300">{detail.text}</span>
                </div>
            );
        case "info":
            return (
                <div className="flex items-start gap-2 mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-blue-700 dark:text-blue-300">{detail.text}</span>
                </div>
            );
        case "code":
            return (
                <pre className="mt-3 p-3 bg-slate-900 text-slate-100 rounded-lg overflow-x-auto text-xs">
                    <code>{detail.code}</code>
                </pre>
            );
        default:
            return null;
    }
}

export default function FAQAccordion() {
    const [activeCategory, setActiveCategory] = useState("basics");

    const currentCategory = faqContent.find(cat => cat.id === activeCategory);

    return (
        <div className="space-y-6">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-between gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                {faqContent.map((cat) => {
                    const Icon = iconMap[cat.icon];
                    const isActive = activeCategory === cat.id;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive
                                ? `${cat.color} text-white shadow-md`
                                : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
                                }`}
                        >
                            <Icon className="h-4 w-4" />
                            <span className="hidden sm:inline">{cat.category}</span>
                        </button>
                    );
                })}
            </div>

            {/* FAQ Accordion */}
            {currentCategory && (
                <div className={`p-4 rounded-xl ${currentCategory.bgColor}`}>
                    <Accordion key={activeCategory} type="single" collapsible className="space-y-2">
                        {currentCategory.questions.map((item, idx) => (
                            <AccordionItem
                                key={idx}
                                value={`item-${idx}`}
                                className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
                            >
                                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <div className="flex items-center gap-3 text-left">
                                        <div className={`p-1.5 rounded-lg ${currentCategory.color}`}>
                                            <HelpCircle className="h-4 w-4 text-white" />
                                        </div>
                                        <span className="font-medium text-slate-800 dark:text-slate-100">{item.q}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-4 pt-0">
                                    <div className="pl-10">
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                            {item.a.summary}
                                        </p>
                                        {item.a.details?.map((detail, didx) => (
                                            <DetailItem key={didx} detail={detail} />
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-2">
                {faqContent.map((cat) => {
                    const Icon = iconMap[cat.icon];
                    return (
                        <div
                            key={cat.id}
                            className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
                        >
                            <div className={`p-2 rounded-lg ${cat.color}`}>
                                <Icon className="h-4 w-4 text-white" />
                            </div>
                            <div>
                                <div className="text-lg font-bold text-slate-800 dark:text-white">{cat.questions.length}</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">{cat.category.split(' ')[0]}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
