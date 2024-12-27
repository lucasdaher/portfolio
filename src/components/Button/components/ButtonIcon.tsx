import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const icon = tv({
  base: "fill-white",
  variants: {
    size: {
      default: "w-6 h-6",
      lg: "w-10 h-10",
      base: "w-6 h-6",
      sm: "w-4 h-4",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export type ButtonIconProps = VariantProps<typeof icon> &
  ComponentProps<"span"> & {
    iconSrc?: React.ReactNode;
  };

export function ButtonIcon({
  iconSrc = null,
  size,
  ...props
}: ButtonIconProps) {
  return iconSrc === null ? (
    <span className={icon({ size })}>{props.children}</span>
  ) : (
    <span className={icon({ size })}>{iconSrc}</span>
  );
}
