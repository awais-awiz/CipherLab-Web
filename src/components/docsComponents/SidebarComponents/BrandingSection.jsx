
import { X } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const BrandingSection = () => {
    const { isMobile, setOpenMobile } = useSidebar();

    return (
        <div className="px-3 pt-3 pb-2 flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-lg bg-teal-50 border border-teal-100 px-3 py-2 flex-1">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-white text-sm font-semibold">
                    CL
                </span>
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-teal-900">CipherLab</span>
                    <span className="text-[11px] text-teal-700">Docs & Guides</span>
                </div>
            </div>

            {isMobile && (
                <Button
                    variant="ghost"
                    size="icon"
                    className="ml-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                    onClick={() => setOpenMobile(false)}
                >
                    <X className="h-5 w-5" />
                </Button>
            )}
        </div>
    );
};

export default BrandingSection;
