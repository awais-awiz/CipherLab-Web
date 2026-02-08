"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import DocsSidebar from "./DocsSidebar";
import DocsHeader from "./DocsHeader";
import { getSectionMeta } from "@/components/docsComponents/SectionMeta";
import { Footer } from "@/components/Footer";

export default function DocsLayout({ activeSection, setActiveSection, children }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full bg-slate-50 dark:bg-slate-950">
        <div className="flex flex-1">
          <DocsSidebar activeSection={activeSection} setActiveSection={setActiveSection} />

          <main className="flex-1 flex flex-col min-w-0">
            <DocsHeader meta={getSectionMeta(activeSection)} />

            <div className="flex-1 overflow-x-auto px-4 md:px-6 py-6 w-full max-w-[100vw]">
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200/50 dark:border-slate-800/50 w-full overflow-x-auto">
                {children}
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
}
