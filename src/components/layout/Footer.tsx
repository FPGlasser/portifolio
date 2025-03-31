import React from "react";
import { Container } from "./Container";
import { Typography } from "./Typography";

export const Footer = () => {
  return (
    <div>
      <div className="p-8 flex justify-center">
        <div className="max-w-[1280px]">
          <Container intent={"grid"}>
            <div className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              perspiciatis nisi ducimus dolore delectus, tenetur rem odio
              facilis hic vel molestias odit, incidunt veniam quis iure libero
              dicta voluptate voluptatibus.
            </div>
            <div>
              Quia alias dolorum laudantium eius, adipisci at unde nobis quo
              accusamus suscipit repudiandae, nemo a natus ad soluta accusantium
              ex nostrum dolores! Ut quas at, porro aliquam maiores nostrum
              tempora.
            </div>
            <div>
              Obcaecati id magnam beatae aliquid ipsum natus! Nostrum ab maxime
              quia voluptatibus alias blanditiis expedita at praesentium.
              Corporis, culpa reiciendis, provident aut cumque ea quia officia
              odit laborum soluta deleniti.
            </div>
            <div>
              Error, necessitatibus veniam. At eius ex natus omnis
              exercitationem, quasi doloremque et veniam culpa voluptatibus,
              quibusdam eum qui. Distinctio excepturi quod ducimus veritatis
              porro voluptatem, sed non eos! Libero, molestias?
            </div>
          </Container>
        </div>
      </div>
      <Container className="bg-foreground justify-center items-center h-8">
        <Typography className="text-background">
          Created by F.P Glasser
        </Typography>
      </Container>
    </div>
  );
};
