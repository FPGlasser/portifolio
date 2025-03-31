import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, ReactNode } from "react";

const containerVariants = cva("w-full", {
  variants: {
    intent: {
      flex: "flex flex-wrap",
      grid: "grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8",
    },
  },
  defaultVariants: {
    intent: "flex",
  },
});

type ContainerProps = { children: ReactNode } & ComponentProps<"div"> &
  VariantProps<typeof containerVariants>;

export const Container = ({
  children,
  intent,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div className={cn(containerVariants({ intent, className }))} {...props}>
      {children}
    </div>
  );
};
