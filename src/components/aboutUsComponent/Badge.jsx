

export const Badge = ({ icon, label }) => (
    <div className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-transform hover:scale-110 cursor-default group">
        <div className="text-teal-600 group-hover:text-emerald-500 transition-colors">
            {icon}
        </div>
        <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tighter">
            {label}
        </span>
    </div>
);
