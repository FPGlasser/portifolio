"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/core/presentation/components/ui/sidebar";
import { SidebarMenuWithSubmenu } from "../menu/SidebarMenuWithSubMenu";
import { IconName } from "lucide-react/dynamic";
import menu from "../../../_src/data/sidebar-menu/website-management.json";

export function NavWebsite() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Website</SidebarGroupLabel>
      <SidebarMenu>
        {menu.map(({ id, title, url, isActive, submenu, icon }) => (
          <SidebarMenuWithSubmenu
            key={id}
            title={title}
            url={url}
            isActive={isActive}
            submenu={submenu}
            icon={icon as IconName}
          />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
