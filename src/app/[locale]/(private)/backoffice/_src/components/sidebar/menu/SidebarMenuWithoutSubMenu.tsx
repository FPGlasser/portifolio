import React from "react";
import { MenuProps } from "../../../types/menu";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { Link } from "@/i18n/navigation";

export const SidebarMenuWithoutSubmenu = ({
  title,
  url,
  icon,
}: Omit<MenuProps, "id">) => {
  return (
    <SidebarMenuItem className="cursor-pointer">
      <SidebarMenuButton asChild tooltip={title}>
        <Link href={url}>
          <DynamicIcon name={icon as IconName} />
          <span>{title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
