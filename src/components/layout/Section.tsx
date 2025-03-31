import { cn } from "@/lib/utils";
import { cva, cx, type VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";
import { Typography } from "./Typography";

const sectionVariants = cva(
  "p-4 md:p-8 lg:p-16 flex flex-col justify-center items-center min-h-screen gap-4",
  {
    variants: {
      intent: {
        default: "bg-background text-foreground",
        primary_light: "bg-primary-light text-primary-light-foreground",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary-light text-secondary-light-foreground",
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
);

type SectionProps = {
  id?: string;
  children: ReactNode;
  title?: string;
} & VariantProps<typeof sectionVariants>;

export const Section = ({ id, children, intent, title }: SectionProps) => {
  return (
    <section id={id} className={cn(sectionVariants({ intent }))}>
      {title && (
        <div className=" max-w-[1280px] w-full flex justify-center kkkk">
          <Typography variant={"headlineSmall"}>{title}</Typography>
        </div>
      )}
      <div className="max-w-[1280px] w-full h-full flex justify-center items-center">
        {children}
      </div>
    </section>
  );
};
