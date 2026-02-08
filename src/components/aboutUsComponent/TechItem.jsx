
import { Terminal, Cpu, Target, Shield, Users } from "lucide-react";

const techs = {
    react: {
        icon: <Terminal className="w-5 h-5 text-cyan-500" />,
        title: "React 19 & Vite",
        description: "Fast, modern frontend development with the latest React features."
    },
    tailwind: {
        icon: <Cpu className="w-5 h-5 text-emerald-500" />,
        title: "Tailwind CSS 4",
        description: "Rapid UI development with a premium, customizable design system."
    },
    framer: {
        icon: <Target className="w-5 h-5 text-indigo-500" />,
        title: "Framer Motion",
        description: "Fluid animations and transitions for a premium user experience."
    },
    radix: {
        icon: <Shield className="w-5 h-5 text-slate-500 dark:text-slate-400" />,
        title: "Radix UI",
        description: "Accessible, unstyled components for building high-quality design systems."
    },
    lucide: {
        icon: <Users className="w-5 h-5 text-orange-500" />,
        title: "Lucide Icons",
        description: "Beautiful, consistent, and lightweight icon library."
    }
};

export const TechItem = ({ variant }) => {
    const content = techs[variant];

    if (!content) return null;

    return (
        <div className="flex gap-4 items-start group">
            <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-teal-50 dark:group-hover:bg-teal-900/20 transition-colors">
                {content.icon}
            </div>
            <div>
                <h4 className="text-base m-0 font-bold text-slate-900 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{content.title}</h4>
                <p className="text-sm m-0 text-slate-500 dark:text-slate-400 leading-relaxed">{content.description}</p>
            </div>
        </div>
    );
};