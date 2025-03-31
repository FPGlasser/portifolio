import React from "react";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { TopBarBreadcrumb } from "./TopbarBreadcrumb";
import { Typography } from "@/components/layout";

export const TopBar = () => {
  return (
    <header className="fixed w-full bg-white shadow-sm flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear ">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div>
          <Typography variant={"titleMedium"} className="font-semibold">
            Work Area
          </Typography>
          <TopBarBreadcrumb />
        </div>
      </div>
    </header>
  );
};
