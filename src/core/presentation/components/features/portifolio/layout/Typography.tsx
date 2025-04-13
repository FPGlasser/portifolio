import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const typographyVariants = cva("font-roboto", {
  variants: {
    variant: {
      displayLarge:
        "text-[57px] font-normal line-height-[64px] letter-spacing-[-0.25px]",
      displayMedium: "text-[45px] font-normal line-height-[52px]",
      displaySmall: "text-[36px] font-normal line-height-[44px]",
      headlineLarge: "text-[32px] font-normal line-height-[40px]",
      headlineMedium: "text-[28px] font-normal line-height-[36px]",
      headlineSmall: "text-[24px] font-normal line-height-[32px]",
      titleLarge: "text-[22px] font-normal line-height-[28px]",
      titleMedium:
        "text-[16px] font-medium line-height-[24px] letter-spacing-[0.1px]",
      titleSmall:
        "text-[14px] font-medium line-height-[20px] letter-spacing-[0.1px]",
      bodyLarge:
        "text-[16px] font-normal line-height-[24px] letter-spacing-[0.5px]",
      bodyMedium:
        "text-[14px] font-normal line-height-[20px] letter-spacing-[0.25px]",
      bodySmall:
        "text-[12px] font-normal line-height-[16px] letter-spacing-[0.4px]",
      labelLarge:
        "text-[14px] font-medium line-height-[20px] letter-spacing-[0.1px]",
      labelMedium:
        "text-[12px] font-medium line-height-[16px] letter-spacing-[0.5px]",
      labelSmall:
        "text-[11px] font-medium line-height-[16px] letter-spacing-[0.5px]",
    },
  },
  defaultVariants: {
    variant: "bodyMedium",
  },
});

export type TypographyProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & {
    as?: React.ElementType;
  };

export const Typography: React.FC<TypographyProps> = ({
  as: Component = "p",
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={typographyVariants({ variant, className })}
      {...props}
    >
      {children}
    </Component>
  );
};
