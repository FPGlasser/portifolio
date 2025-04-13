"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/core/presentation/components/ui/popover";
import { useLocale } from "next-intl";
import locales from "@/core/presentation/data/locales.json";
import { ChangeLocaleItem } from "./ChangeLocaleItem";

export const ChangeLocale = () => {
  const locale = useLocale();
  return (
    <Popover>
      <PopoverTrigger>
        <div className="group w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-secondary bg-secondary-light border-primary border-2 rounded-full">
          <p className="group-hover:text-secondary-foreground text-sm font-bold text-secondary-light-foreground">
            {locale.toUpperCase()}
          </p>
        </div>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-auto">
        <ol>
          {locales.map(({ id, isoCode, title }) => (
            <ChangeLocaleItem key={id} isoCode={isoCode} language={title} />
          ))}
        </ol>
      </PopoverContent>
    </Popover>
  );
};
