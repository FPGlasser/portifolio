import { cn } from "@/lib/utils";
import { cva, cx, type VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";

const sectionVariants = cva(
  "p-4 md:p-8 lg:16 flex flex-col justify-center items-center",
  {
    variants: {
      intent: {
        default: "bg-background text-foreground",
        primary_light: "bg-primary-light text-primary-light-foreground",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary-black text-secondary-light-foreground",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

type SectionProps = {
  id?: string;
  children: ReactNode;
} & VariantProps<typeof sectionVariants>;

export const Section = ({ id, children, intent }: SectionProps) => {
  return (
    <section id={id} className={cn(sectionVariants({ intent }))}>
      <div className="max-w-[1280px] w-full">{children}</div>
    </section>
  );
};
