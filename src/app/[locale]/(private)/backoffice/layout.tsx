import React, { ReactNode } from "react";
import { BackOfficeSidebar } from "@/core/presentation/components/features/backoffice/sidebar/BackofficeSidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/core/presentation/components/ui/sidebar";
import { TopBar } from "@/core/presentation/components/features/backoffice/topbar/Topbar";

const BackOfficeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <BackOfficeSidebar />
      <SidebarInset>
        <div className="flex flex-col">
          <TopBar />
          <div className="flex justify-center">
            <div className="w-full max-w-[1312px] pt-20 px-4">{children}</div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default BackOfficeLayout;
