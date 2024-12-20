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

export interface ButtonIconProps extends VariantProps<typeof icon> {
  iconSrc: React.ReactNode;
}

export function ButtonIcon({ iconSrc, size }: ButtonIconProps) {
  return <span className={icon({ size })}>{iconSrc}</span>;
}
