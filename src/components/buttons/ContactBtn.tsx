import React from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export const ContactBtn = () => {
  const t = useTranslations("components.buttons");
  return (
    <Link href={"/#contact"}>
      <Button
        variant={"secondary"}
        className="cursor-pointer rounded-full flex-1 md:flex-auto"
      >
        {t("ContactBtn")}
      </Button>
    </Link>
  );
};
