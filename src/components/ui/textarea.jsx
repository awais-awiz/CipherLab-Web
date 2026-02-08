import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // layout & sizing
        "w-full min-h-[180px] max-h-[360px] overflow-y-auto resize-none",
        // visual
        "rounded-md border border-input bg-background/80 px-3 py-2",
        "text-base md:text-sm leading-relaxed",
        // placeholder & disabled
        "placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        // focus & error states
        "outline-none shadow-xs transition-[color,box-shadow,border-color]",
        "focus-visible:border-teal-500 focus-visible:ring-2 focus-visible:ring-teal-500/60",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
