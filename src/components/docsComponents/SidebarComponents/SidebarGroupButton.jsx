import { ChevronDown } from "lucide-react";
import { SidebarMenuItem, SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { CollapsibleTrigger } from "@/components/ui/collapsible";

const SidebarGroupButton = ({ group, activeSection, setActiveSection, setParams }) => {
  const { isMobile, setOpenMobile } = useSidebar();

  return (
    <SidebarMenuItem>
      <CollapsibleTrigger asChild>
        <SidebarMenuButton
          className="w-full justify-between hover:bg-teal-50"
          onClick={(e) => {
            e.stopPropagation();
            if (activeSection !== group.id) {
              setActiveSection(group.id);
              setParams({ section: group.id });
              // Only close if it's a leaf node (no subsections)
              if (isMobile && !group.subsections?.length) setOpenMobile(false);
            }
          }}
        >
          <span className="flex items-center gap-2 cursor-pointer">
            <group.icon className="h-4 w-4 text-teal-600" />
            {group.title}
          </span>
          {group.subsections?.length > 0 && (
            <ChevronDown className="h-4 w-4 text-teal-500 transition-transform duration-300 group-data-[state=open]/collapsible:rotate-180" />
          )}
        </SidebarMenuButton>
      </CollapsibleTrigger>
    </SidebarMenuItem>
  );
};

export default SidebarGroupButton;
