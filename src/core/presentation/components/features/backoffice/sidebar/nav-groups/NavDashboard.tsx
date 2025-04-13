"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/core/presentation/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/core/presentation/components/ui/sidebar";
import { SidebarMenuWithoutSubmenu } from "../menu/SidebarMenuWithoutSubMenu";
import menu from "../../../_src/data/sidebar-menu/dashboard-menu.json";
import { IconName } from "lucide-react/dynamic";

export function NavDashboard() {
  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Website Content</SidebarGroupLabel> */}
      <SidebarMenu>
        <SidebarMenuWithoutSubmenu
          title={menu.title}
          url={menu.url}
          icon={menu.icon as IconName}
        />
      </SidebarMenu>
    </SidebarGroup>
  );
}
