import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const headerContainer = tv({
  base: "flex justify-center items-center h-auto w-auto",
  variants: {
    column: {
      true: "flex-col justify-center items-start",
    },
  },
  defaultVariants: {
    column: false,
  },
});

export type HeaderContainerProps = ComponentProps<"div"> &
  VariantProps<typeof headerContainer>;

export function HeaderContainer({ column, ...props }: HeaderContainerProps) {
  return (
    <div className={headerContainer({ column })} {...props}>
      {props.children}
    </div>
  );
}
