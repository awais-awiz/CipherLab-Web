"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function DesktopNavLink({ to, active, children }) {
    return (
        <NavigationMenuLink asChild>
            <Link
                to={to}
                className={cn(
                    navigationMenuTriggerStyle(),
                    "relative h-10 px-4 transition-all duration-300 bg-transparent",
                    active
                        ? "text-teal-600 dark:text-teal-400 font-bold"
                        : "text-slate-600 dark:text-slate-400 hover:text-teal-600 hover:bg-transparent focus:bg-transparent"
                )}
            >
                {children}

                {active && (
                    <motion.div
                        layoutId="nav-active"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-teal-500 rounded-full mb-1"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                )}
            </Link>
        </NavigationMenuLink>
    );
}