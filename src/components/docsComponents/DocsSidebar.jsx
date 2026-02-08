"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import SearchInput from "@/components/docsComponents/SidebarComponents/SearchInput";
import SidebarGroupButton from "@/components/docsComponents/SidebarComponents/SidebarGroupButton";
import SidebarSubsections from "@/components/docsComponents/SidebarComponents/SidebarSubsections";
import HelpBox from "@/components/docsComponents/SidebarComponents/HelpBox";
import BrandingSection from "@/components/docsComponents/SidebarComponents/BrandingSection";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel,
  SidebarGroupContent, SidebarMenu, SidebarFooter,
} from "@/components/ui/sidebar";

import { Collapsible, } from "@/components/ui/collapsible";
import { docsStructure } from "@/data/docs-structure";

export default function DocsSidebar({ activeSection, setActiveSection }) {
  const [search, setSearch] = useState("");
  const [openGroup, setOpenGroup] = useState("introduction");
  const [params, setParams] = useSearchParams();

  const filtered = useMemo(() => {
    if (!search.trim()) return docsStructure;

    const q = search.toLowerCase();
    return docsStructure
      .map((group) => {
        const subsections = group.subsections.filter((s) => s.title.toLowerCase().includes(q));
        return subsections.length ? { ...group, subsections } : null;
      }).filter(Boolean);
  }, [search]);

  const toggleGroup = (groupId) => {
    setOpenGroup(openGroup === groupId ? "" : groupId);
  };

  return (
    <Sidebar className="border-r border-border">
      <SidebarContent>
        {/* Branding */}
        <BrandingSection />
        <div className="h-px bg-border mx-3 mb-2" />

        {/* Docs Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-teal-700 font-semibold">Documentation</SidebarGroupLabel>

          <SidebarGroupContent>
            <SearchInput search={search} setSearch={setSearch} />

            <SidebarMenu>
              {filtered.map((group) => (
                <Collapsible className="group/collapsible" key={group.id} open={openGroup === group.id} onOpenChange={() => toggleGroup(group.id)}>
                  <SidebarGroupButton group={group} activeSection={activeSection} setActiveSection={setActiveSection} setParams={setParams} />
                  {group.subsections?.length > 0 && (
                    <SidebarSubsections group={group} activeSection={activeSection} setActiveSection={setActiveSection} setParams={setParams} />
                  )}
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
      <SidebarFooter>
        <HelpBox />
      </SidebarFooter>
    </Sidebar>
  );
}