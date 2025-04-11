import React from "react";
import { Container, Section, Typography } from "../layout";
import { CardService } from "../cards/CardService";
import { useTranslations } from "next-intl";

export const ServiceSection = () => {
  const t = useTranslations("pages.homePage.serviceSection");
  return (
    <Section
      id="services"
      navId="SERVICES"
      intent={"primary"}
      title={t("Title")}
    >
      <Container
        intent={"grid"}
        className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <CardService
          title="Software Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        dignissimos ex corrupti, "
          icon="code-xml"
        />
        <CardService
          title="Software Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        dignissimos ex corrupti, "
          icon="code-xml"
        />
        <CardService
          title="Software Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        dignissimos ex corrupti, "
          icon="code-xml"
        />
        <CardService
          title="Software Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        dignissimos ex corrupti, "
          icon="code-xml"
        />
        <CardService
          title="Software Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        dignissimos ex corrupti, "
          icon="code-xml"
        />
        <CardService
          title="Software Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        dignissimos ex corrupti, "
          icon="code-xml"
        />
      </Container>
    </Section>
  );
};
