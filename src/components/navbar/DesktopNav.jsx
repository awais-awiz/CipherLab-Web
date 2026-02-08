"use client";

import { useLocation } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { DesktopNavLink } from "./DesktopNavLink";
import { DocsDropdown } from "./DocsDropdown";

export const DesktopNav = () => {
    const { pathname } = useLocation();

    const isActive = (path) => pathname === path;
    const docsActive = pathname.startsWith("/docs");

    return (
        <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu className="z-50">
                <NavigationMenuList className="gap-1">
                    <NavigationMenuItem>
                        <DesktopNavLink to="/" active={isActive("/")}>
                            Home
                        </DesktopNavLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <DesktopNavLink to="/cipherlab" active={isActive("/cipherlab")}>
                            CipherLab
                        </DesktopNavLink>
                    </NavigationMenuItem>

                    <DocsDropdown active={docsActive} />

                    <NavigationMenuItem>
                        <DesktopNavLink to="/about" active={isActive("/about")}>
                            About Us
                        </DesktopNavLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};