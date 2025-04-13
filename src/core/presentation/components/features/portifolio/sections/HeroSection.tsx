import React from "react";
import { Section, Container, Typography } from "../layout";
import { useTranslations } from "next-intl";
import { ContactBtn } from "../buttons/ContactBtn";
import { DownloadResumeBtn } from "../buttons/DownloadResumeBtn";

export const HeroSection = () => {
  const t = useTranslations("pages.homePage.heroSection");
  return (
    <Section id="hero" navId="HOME">
      <div className="w-full flex flex-col  justify-center items-center gap-8">
        <Container className="justify-center">
          <Typography variant={"headlineSmall"}>{t("Presentation")}</Typography>
        </Container>
        <Container className="max-w-[980px] flex flex-col justify-center gap-4">
          <p className="text-primary text-3xl md:text-5xl lg:text-6xl text-center">
            {t("Title")}
          </p>

          <Typography className="text-center text-[16px] md:text-[20px] lg:text-[24px] text-zinc-500">
            {t("Subtitle")}
          </Typography>
        </Container>
        <Container className="flex flex-col w-full md:w-auto md:flex-row gap-4 mt-1 md:mt-2 lg:mt-4">
          <ContactBtn />
          <DownloadResumeBtn />
        </Container>
      </div>
    </Section>
  );
};
