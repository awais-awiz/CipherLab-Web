import { cn } from "@/lib/utils";

export const Copyright = ({ className }) => {
    return (
        <p className={cn("text-slate-500 m-0", className)}>
            &copy; {new Date().getFullYear()} CipherLab. All rights reserved.
        </p>
    );
};
