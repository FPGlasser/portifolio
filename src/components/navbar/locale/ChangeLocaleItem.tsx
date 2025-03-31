"use client";
import React from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Typography } from "@/components/layout";

type LocaleItem = {
  isoCode: string;
  language: string;
};

export const ChangeLocaleItem = ({ isoCode, language }: LocaleItem) => {
  const currentLocale = useLocale();
  const pathname = usePathname();

  return (
    <li className="hover:bg-primary-light cursor-pointer rounded-sm px-1.5 py-1">
      <Link href={pathname} locale={isoCode} replace>
        <Typography
          className={
            currentLocale === isoCode
              ? "text-secondary font-semibold hover:text-primary"
              : ""
          }
        >
          {language}
        </Typography>
      </Link>
    </li>
  );
};
