import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, ReactNode } from "react";

const containerVariants = cva("", {
  variants: {
    intent: {
      flex: "flex flex-wrap",
      grid: "grid grid-col-flow  sm:grid-cols-1 md-grid-cols-2 lg-grid-cols-4",
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
    <div className={cn(intent, className)} {...props}>
      {children}
    </div>
  );
};
