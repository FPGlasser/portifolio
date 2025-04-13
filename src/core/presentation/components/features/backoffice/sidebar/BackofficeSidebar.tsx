"use client";

import * as React from "react";
import {
  NavContents,
  NavCommunication,
  NavUser,
  NavWebsite,
  NavDashboard,
} from "./nav-groups";

// import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/core/presentation/components/ui/sidebar";
import { Typography } from "@/core/presentation/components/portifolio/layout";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function BackOfficeSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props} className="bg-primary">
      <SidebarHeader>
        <div className="w-full flex justify-center items-center">
          <Typography
            variant={"titleLarge"}
            className={open ? "flex" : "hidden"}
          >
            Portfolio
          </Typography>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="pt-8">
          <NavDashboard />
          <NavContents />
          <NavCommunication />
          <NavWebsite />
        </div>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
