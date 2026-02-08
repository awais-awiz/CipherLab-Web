import { SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, useSidebar } from "@/components/ui/sidebar";
import { CollapsibleContent } from "@/components/ui/collapsible";

const SidebarSubsections = ({ group, activeSection, setActiveSection, setParams }) => {
    const { isMobile, setOpenMobile } = useSidebar();

    if (!group.subsections?.length) return null;

    return (
        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">

            <SidebarMenuSub>
                {group.subsections.map((sub) => (
                    <SidebarMenuSubItem key={sub.id}>
                        <SidebarMenuSubButton
                            className="cursor-pointer hover:bg-teal-50"
                            onClick={() => {
                                if (isMobile) setOpenMobile(false);

                                if (activeSection !== group.id) {
                                    setActiveSection(group.id);
                                    setParams({ section: group.id });
                                    setTimeout(() => {
                                        const el = document.getElementById(sub.id);
                                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }, 200);
                                } else {
                                    const el = document.getElementById(sub.id);
                                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }}
                        >
                            {sub.title}
                        </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                ))}
            </SidebarMenuSub>

        </CollapsibleContent>
    );
};

export default SidebarSubsections;