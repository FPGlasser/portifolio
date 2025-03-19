import React from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/layout";

type MenuItemProps = {
  title: string;
  link: string;
};

export const MenuItem = ({ title, link }: MenuItemProps) => {
  const t = useTranslations("components.navMenu");
  return (
    <div>
      <Link href={link}>
        <Typography variant={"titleSmall"}>{t(title)}</Typography>
      </Link>
    </div>
  );
};
