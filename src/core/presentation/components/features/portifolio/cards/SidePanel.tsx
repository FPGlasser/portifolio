import React, { ReactNode } from "react";
import { Card, CardContent } from "@/core/presentation/components/ui/card";

export const SidePanel = ({ children }: { children: ReactNode }) => {
  return (
    <Card className="col-span-1 bg-with z-0 overflow-y-scroll overscroll-y-none h-[calc(100vh-80px)]">
      <CardContent>{children}</CardContent>
    </Card>
  );
};
