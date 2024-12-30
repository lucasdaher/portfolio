import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const ul = tv({
  base: "flex justify-center items-center gap-4 px-0 lg:px-8 border-white transition-all duration-200 ease-in-out",
  variants: {
    separator: {
      true: "border-r border-opacity-50",
      false: "",
    },
  },
  defaultVariants: {
    separator: false,
  },
});

export type HeaderNavProps = ComponentProps<"ul"> & VariantProps<typeof ul>;

export function HeaderNav({ separator, ...props }: HeaderNavProps) {
  return (
    <nav className="flex justify-center items-center gap-6">
      <ul className={ul({ separator })} {...props}>
        {props.children}
      </ul>
    </nav>
  );
}
