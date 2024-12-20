import { ComponentProps } from "react";

import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "flex justify-center items-center gap-2 bg-zinc-50 text-zinc-900 font-normal text-sm rounded-full transition-all duration-200 hover:bg-zinc-200",
  variants: {
    size: {
      default: "h-10 px-8",
      xl: "h-14 px-10 text-base font-normal gap-4",
      lg: "h-10 px-8 gap-4",
      small: "h-8 px-6",
      xs: "h-6 px-4 text-xs",
    },
    download: {
      true: "bg-blue-500 text-white hover:bg-blue-600",
    },
  },
  defaultVariants: {
    size: "default",
    success: false,
    download: false,
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button>;

export function Button({ download, size, className, ...props }: ButtonProps) {
  return (
    <button className={button({ size, className, download })} {...props}>
      {props.children}
    </button>
  );
}
