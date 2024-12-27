import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const text = tv({
  base: "text-base font-normal",
  variants: {
    textSize: {
      lg: "text-xl font-semibold",
      base: "text-base font-normal",
    },
  },
  defaultVariants: {
    textSize: "base",
  },
});

export type ButtonTextProps = ComponentProps<"div"> & VariantProps<typeof text>;

export function ButtonText({ textSize, ...props }: ButtonTextProps) {
  return <span className={text({ textSize })}>{props.children}</span>;
}
