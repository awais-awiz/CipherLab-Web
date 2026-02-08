// src/components/CipherSelector.jsx
"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Lock } from "lucide-react";
import { CIPHERS } from "@/lib/cipher/ciphers";

export const CipherSelector = ({ value, onChange }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
      {/* Label */}
      <label className="flex w-full md:w-[15%] md:min-w-[130px] items-center gap-2 text-sm font-medium mb-1 md:mb-0">
        <Lock className="w-4 h-4 text-primary" />
        <span>Select Cipher</span>
      </label>

      {/* Select */}
      <div className="w-full md:flex-1">
        <Select value={value} onValueChange={onChange} >
          <SelectTrigger className="w-full cursor-pointer   px-4 py-7 text-sm">
            <SelectValue placeholder="Choose cipher" />
          </SelectTrigger>

          <SelectContent className="py-3 cursor-pointer">
            {CIPHERS.map((cipher) => (
              <SelectItem key={cipher.value} value={cipher.value}>
                <div className="flex flex-col items-start">
                  <span className="font-medium">{cipher.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {cipher.description}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
