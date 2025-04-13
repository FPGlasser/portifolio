import React from "react";
import { Container, Section, Typography } from "../layout";
import { useTranslations } from "next-intl";

export const AboutSection = () => {
  const t = useTranslations("pages.homePage.aboutSection");
  return (
    <Section
      id="about"
      navId="ABOUT"
      intent={"primary_light"}
      title={t("Title")}
    >
      <Container className="flex flex-col justify-center gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>Photo</div>
          <div className="flex flex-col gap-2">
            <Typography variant={"bodyLarge"} className="text-justify">
              {t("paragraphs.P1")}
            </Typography>
            <Typography variant={"bodyLarge"} className="text-justify">
              {t("paragraphs.P2")}
            </Typography>
            <Typography variant={"bodyLarge"} className="text-justify">
              {t("paragraphs.P3")}
            </Typography>
            <Typography variant={"bodyLarge"} className="text-justify">
              {t("paragraphs.P4")}
            </Typography>
            <Typography variant={"bodyLarge"} className="text-justify">
              {t("paragraphs.P5")}
            </Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
};
