import React from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { Download } from "lucide-react";

export const DownloadResumeBtn = () => {
  const t = useTranslations("components.buttons");
  return (
    <Button
      variant={"outline"}
      className="cursor-pointer rounded-full flex-1 md:flex-auto"
    >
      <Download />
      {t("DownloadResume")}
    </Button>
  );
};
