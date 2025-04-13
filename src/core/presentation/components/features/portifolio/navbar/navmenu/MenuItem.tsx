"use client";
import React from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Typography } from "@/core/presentation/components/features/portifolio/layout";
import { NavMenuId } from "@/core/presentation/types/types";
import { useNavMenuStore } from "@/core/presentation/stores/NavmenuStore";

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
