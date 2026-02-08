"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { glossaryData } from "@/data/glossary-content";


export default function GlossaryTable() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Filter terms based on search and category
    const filteredData = glossaryData.map(category => ({
        ...category,
        terms: category.terms.filter(term => {
            const matchesSearch =
                term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                term.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                term.fullName.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "all" || category.category === selectedCategory;
            return matchesSearch && matchesCategory;
        })
    })).filter(category => category.terms.length > 0);

    const totalTerms = glossaryData.reduce((sum, cat) => sum + cat.terms.length, 0);

    return (
        <div className="space-y-6">
            {/* Search and Filter Bar */}
            <div className="sticky top-0 z-10 bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Search Input */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search terms..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="w-full md:w-[240px]">
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger className="w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600">
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Categories ({totalTerms})</SelectItem>
                                {glossaryData.map((cat) => (
                                    <SelectItem key={cat.category} value={cat.category}>
                                        {cat.category} ({cat.terms.length})
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            {/* Glossary Cards */}
            {filteredData.map((category) => {
                const Icon = category.icon;
                return (
                    <div key={category.category} className="space-y-3">
                        {/* Category Header */}
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                            <Icon className="h-5 w-5" />
                            <h3 className="text-white m-0 text-center">{category.category}</h3>
                            <span className="ml-auto text-white/80 text-sm">{category.terms.length} terms</span>
                        </div>

                        {/* Terms Table */}
                        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
                            <table className="w-full mt-0 mb-0 text-xs sm:text-sm">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Term</th>
                                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Definition</th>
                                        <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Example</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                    {category.terms.map((item, idx) => (
                                        <tr
                                            key={item.term}
                                            className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                                        >
                                            <td className="px-2 sm:px-4 py-2 sm:py-4">
                                                <div className="font-semibold text-teal-600 dark:text-teal-400 text-xs sm:text-sm">{item.term}</div>
                                                {item.fullName && (
                                                    <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.fullName}</div>
                                                )}
                                            </td>
                                            <td className="px-2 sm:px-4 py-2 sm:py-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                                                {item.description}
                                            </td>
                                            <td className="px-2 sm:px-4 py-2 sm:py-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                                                <code className="px-1 sm:px-2 py-0.5 sm:py-1 bg-slate-100 dark:bg-slate-700 rounded text-[10px] sm:text-xs">
                                                    {item.example}
                                                </code>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            })}

            {/* No Results */}
            {filteredData.length === 0 && (
                <div className="text-center py-12 text-slate-500">
                    <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">No terms found</p>
                    <p className="text-sm">Try a different search term or category</p>
                </div>
            )}
        </div>
    );
}
