"use client";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { IconName } from "lucide-react/dynamic";
import menu from "../../../data/sidebar-menu/content-menu.json";
import { SidebarMenuWithSubmenu } from "../menu/SidebarMenuWithSubMenu";

export function NavContents() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Posts & Projects</SidebarGroupLabel>
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
