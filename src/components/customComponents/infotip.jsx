"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export function Infotip({ label, info, options, value, onChange }) {
  const selected = options?.find((o) => o.value === value);

  const getInfoText = () => {
    if (label === "Key Type") {
      return "Select how your key is encoded: ASCII , HEX, or UTF-8.";
    }
    if (label === "Output Format") {
      return "Choose the output encoding: ASCII, HEX, or Base64.";
    }
    return "Additional information about this option.";
  };

  return (
    <div className="flex-1">
      <label className="block text-sm font-medium mb-1 flex items-center gap-2 text-gray-800 dark:text-gray-200">
        {label}
        {info && (
          <TooltipProvider delayDuration={100}>
            <Tooltip >
              <TooltipTrigger asChild>
                <div className="p-0.5 rounded-full hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-colors cursor-help">
                  <Info className="w-3 h-3 text-gray-400 dark:text-gray-500 hover:text-teal-600 dark:hover:text-teal-400" />
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={8}
                className="z-50 w-[100px] md:w-[150px] md:max-w-[200px] p-2 bg-white dark:bg-slate-900 border border-teal-100 dark:border-teal-900/50 shadow-xl rounded-xl animate-in fade-in-0 zoom-in-95"
              >
                <div className="flex gap-2.5 items-start">

                  <div className="flex flex-col gap-0.5 ">
                    <span className="text-[9px] m-0 font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                      Definition
                    </span>
                    <p className="text-[8px] md:text-[11px] m-0 leading-snug text-slate-600 dark:text-slate-400 font-medium">
                      {getInfoText()}
                    </p>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </label>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            {selected ? selected.label : "Select"} ▼
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-full">
          {options?.map((option) => (
            <DropdownMenuItem
              key={option.value}
              className="cursor-pointer"
              onClick={() => onChange(option.value)}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
