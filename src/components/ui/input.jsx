import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // layout & sizing
        "w-full min-w-0 rounded-md border border-input bg-background/80 px-3 py-2",
        "text-base md:text-sm leading-normal",
        // placeholder & selection
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        // focus & transitions
        "outline-none shadow-xs transition-[color,box-shadow,border-color]",
        "focus-visible:border-teal-500 focus-visible:ring-2 focus-visible:ring-teal-500/60",
        // disabled
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        // validation states
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        // file input support (if ever used as type='file')
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className
      )}
      {...props}
    />
  );
}

export { Input };
