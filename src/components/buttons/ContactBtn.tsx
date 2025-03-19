import React from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export const ContactBtn = () => {
  const t = useTranslations("components.buttons");
  return (
    <Button variant={"secondary"} className="cursor-pointer rounded-full">
      {t("ContactBtn")}
    </Button>
  );
};
