import { Link } from "react-router-dom";
import {

    NavigationMenuLink,
} from "@/components/ui/navigation-menu";


export const NavdropItem = ({ to, icon, title, desc }) => {
    return (
        <li>
            <NavigationMenuLink asChild unstyled>
                <Link to={to}
                    className="flex items-start gap-2 rounded-md px-3 py-2 hover:bg-teal-50/80 dark:hover:bg-slate-800/80 transition-colors"
                >
                    {icon}
                    <div>
                        <div className="font-medium text-slate-900 dark:text-slate-200">
                            {title}
                        </div>
                        <p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    );
}