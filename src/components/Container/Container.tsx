import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

interface ContainerProps
  extends ComponentProps<"div">,
    VariantProps<typeof container> {}

const container = tv({
  base: "bg-black-dark bg-opacity-20 backdrop-blur-xl p-6 lg:p-10 rounded-lg border-[0.5px] border-gray-dark border-opacity-20 w-full flex flex-col lg:flex-row lg:justify-between lg:items-start justify-center items-center gap-4 lg:gap-0",
  variants: {
    flexDirection: {
      row: "flex-row",
      col: "flex-col",
    },
    justify: {
      between: "justify-between",
      start: "justify-start",
      end: "justify-end",
    },
    align: {
      center: "items-center",
      start: "items-start",
      end: "items-end",
    },
  },

  defaultVariants: {
    justify: "between",
    align: "start",
    flexDirection: "col",
  },
});

export function Container({
  flexDirection,
  justify,
  align,
  ...props
}: ContainerProps) {
  return (
    <div className={container({ flexDirection, justify, align })} {...props}>
      {props.children}
    </div>
  );
}
