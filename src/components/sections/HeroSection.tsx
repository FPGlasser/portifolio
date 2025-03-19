import React from "react";
import { Section, Container, Typography } from "../layout";
import { useTranslations } from "next-intl";
import { ContactBtn } from "../buttons/ContactBtn";
import { DownloadResumeBtn } from "../buttons/DownloadResumeBtn";

export const HeroSection = () => {
  const t = useTranslations("pages.homePage.heroSection");
  return (
    <Section id="/">
      <div className="w-full flex flex-col  justify-center items-center gap-8">
        <Container>
          <Typography>{t("Presentation")}</Typography>
        </Container>
        <Container className="max-w-[980px] flex flex-col justify-center">
          <Typography
            className="text-primary text-center"
            variant={"displayLarge"}
          >
            {t("Title")}
          </Typography>
          <Typography className="text-center" variant={"headlineSmall"}>
            {t("Subtitle")}
          </Typography>
        </Container>
        <Container className="flex flex-row gap-4">
          <ContactBtn />
          <DownloadResumeBtn />
        </Container>
      </div>
    </Section>
  );
};
