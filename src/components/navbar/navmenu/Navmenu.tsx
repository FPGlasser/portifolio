import React from "react";
import menu from "@/data/menu.json";
import { MenuItem } from "./MenuItem";
import { NavMenuId } from "@/types/types";

export const NavMenuWideScreen = () => {
  return (
    <div className="flex flex-nowrap flex-row gap-6">
      {menu.map(({ id, link, title }) => (
        <MenuItem key={id} id={id as NavMenuId} link={link} title={title} />
      ))}
    </div>
  );
};
