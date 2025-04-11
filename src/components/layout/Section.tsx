"use client";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";
import { Typography } from "./Typography";
import { motion } from "motion/react";
import { NavMenuId } from "@/types/types";
import { useNavMenuStore } from "@/stores/NavmenuStore";

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
  navId: NavMenuId;
} & VariantProps<typeof sectionVariants>;

export const Section = ({
  id,
  navId,
  children,
  intent,
  title,
}: SectionProps) => {
  const { setActiveMenu } = useNavMenuStore();
  return (
    <motion.section
      id={id}
      className={cn(sectionVariants({ intent }))}
      onViewportEnter={() => setActiveMenu(navId)}
      viewport={{ margin: "-200px" }}
    >
      {title && (
        <div className=" max-w-[1280px] w-full flex justify-center kkkk">
          <Typography variant={"headlineSmall"}>{title}</Typography>
        </div>
      )}
      <div className="max-w-[1280px] w-full h-full flex justify-center items-center">
        {children}
      </div>
    </motion.section>
  );
};
