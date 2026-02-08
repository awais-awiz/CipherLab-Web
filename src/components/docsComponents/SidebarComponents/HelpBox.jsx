import { Link } from "react-router-dom";
import { HelpCircle, Lock } from "lucide-react";

const HelpBox = () => (
    <div className="mt-4 px-3 pb-4 group-data-[collapsible=icon]:hidden">
        <div className="rounded-lg border border-dashed border-teal-200 bg-teal-50 px-3 py-2 text-[11px] text-teal-800">
            <p className="font-medium flex items-center gap-1">
                <HelpCircle className="h-3.5 w-3.5" /> Need help?
            </p>
            <Link to="/cipherlab" className="inline-flex items-center gap-1 mt-1 text-teal-700 hover:underline">
                <Lock className="h-3 w-3" /> Open playground
            </Link>
        </div>
    </div>
);

export default HelpBox;