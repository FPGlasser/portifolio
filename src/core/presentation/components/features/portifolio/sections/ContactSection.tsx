import React from "react";
import { Section, Container } from "../layout";
import { useTranslations } from "next-intl";

export const ContactSection = () => {
  const t = useTranslations("pages.homePage.contactSection");
  return (
    <Section id="contact" navId="CONTACT" title={t("Title")}>
      <Container className="flex-1">
        <form action="" className="flex-1 h-full ">
          <input type="text" />
        </form>
      </Container>
    </Section>
  );
};
