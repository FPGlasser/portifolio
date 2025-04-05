import React, { ReactNode } from "react";
import { BackOfficeSidebar } from "./_src/components/sidebar/BackofficeSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TopBar } from "./_src/components/topbar/Topbar";

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
