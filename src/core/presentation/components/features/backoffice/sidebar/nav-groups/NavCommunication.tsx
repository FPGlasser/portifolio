"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  useSidebar,
} from "@/core/presentation/components/ui/sidebar";

import { IconName } from "lucide-react/dynamic";
import { SidebarMenuWithoutSubmenu } from "../menu/SidebarMenuWithoutSubMenu";
import menu from "../../../_src/data/sidebar-menu/communication-menu.json";

export function NavCommunication() {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Communication</SidebarGroupLabel>
      <SidebarMenu>
        {menu.map(({ id, title, icon, url }) => (
          <SidebarMenuWithoutSubmenu
            key={id}
            title={title}
            icon={icon as IconName}
            url={url}
          />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
