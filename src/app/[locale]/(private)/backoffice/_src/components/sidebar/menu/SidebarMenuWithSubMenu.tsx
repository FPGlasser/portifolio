import React from "react";
import { MenuWithSubMenuProps } from "../../../types/menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { DynamicIcon } from "lucide-react/dynamic";
import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export const SidebarMenuWithSubmenu = ({
  title,
  url,
  icon,
  isActive,
  submenu,
}: Omit<MenuWithSubMenuProps, "id">) => {
  return (
    <Collapsible asChild defaultOpen={isActive} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild className="cursor-pointer">
          <SidebarMenuButton tooltip={title}>
            <DynamicIcon name={icon} />
            <span>{title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {submenu.map(({ id, title, url }) => (
              <SidebarMenuSubItem key={id}>
                <SidebarMenuSubButton asChild>
                  <Link href={url}>
                    <span>{title}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};
