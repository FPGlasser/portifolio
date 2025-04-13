import React from "react";
import { Button } from "@/core/presentation/components/ui/button";
import { Link } from "@/i18n/navigation";
import { NavMenuWideScreen } from "./navmenu/Navmenu";
import { ChangeLocale } from "./locale/ChangeLocale";

export const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-full h-16 bg-background fixed px-4 md:px-8 lg:px-16 z-50">
      <div className="max-w-[1280px] w-full flex justify-between items-center h-16">
        <div className="font-bold">LOGO</div>
        <div>
          <NavMenuWideScreen />
        </div>
        <div className="flex flex-row gap-4">
          <ChangeLocale />
          <Link href={"/#contact"}>
            <Button className="rounded-full flex justify-center items-center cursor-pointer">
              Contact me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
