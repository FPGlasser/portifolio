"use client";
import React from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/layout";
import { NavMenuId } from "@/types/types";
import { useNavMenuStore } from "@/stores/NavmenuStore";

type MenuItemProps = {
  id: NavMenuId;
  title: string;
  link: string;
};

export const MenuItem = ({ id, title, link }: MenuItemProps) => {
  const t = useTranslations("components.navMenu");
  const { currentActiveMenu, setActiveMenu } = useNavMenuStore();

  return (
    <div>
      <Link href={link} onClick={() => setActiveMenu(id)}>
        <Typography
          variant={"titleSmall"}
          className={
            id === currentActiveMenu ? "text-primary" : `text-zinc-600`
          }
        >
          {t(title)}
        </Typography>
      </Link>
    </div>
  );
};
