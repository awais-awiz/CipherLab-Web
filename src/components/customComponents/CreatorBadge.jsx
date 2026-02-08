import { cn } from "@/lib/utils";

export const CreatorBadge = ({ className }) => {
    return (
        <div className={cn(
            "flex items-center gap-3 px-4 py-2 rounded-full w-fit transition-all",
            "bg-slate-100 border border-slate-200",
            "dark:bg-slate-800 dark:border-slate-700",
            className
        )}>
            <span className="text-slate-500 uppercase tracking-widest text-[9px] font-bold">
                Creator
            </span>
            <div className="w-1 h-3 bg-teal-500/50 rounded-full" />
            <span className="text-slate-900 dark:text-slate-100 font-bold tracking-tight text-sm">
                Awais Arif
            </span>
        </div>
    );
};
