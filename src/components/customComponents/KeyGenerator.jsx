import { Button } from "@/components/ui/button";
import { Info, Sparkles } from "lucide-react";

export const KeyGenerator = ({ label, onClick }) => {
  return (
    <div className="space-y-2 mt-4">
      <label className="text-sm font-medium flex items-center gap-2 text-gray-800">
        {label} <Info className="w-4 h-4 text-gray-500 opacity-70" />
      </label>

      <Button
        onClick={onClick}
        variant="outline"
        className="bg-teal-100 hover:bg-teal-200 text-teal-700 flex items-center gap-2"
      >
        <Sparkles className="w-5 h-5" />
        Generate Key
      </Button>
    </div>
  );
};
