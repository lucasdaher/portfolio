import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

interface ContainerProps
  extends ComponentProps<"div">,
    VariantProps<typeof container> {}

const container = tv({
  base: "bg-black-gray bg-opacity-30 backdrop-blur-md p-10 rounded-lg border-[0.5px] border-[#9c9c9c]/30 w-full flex gap-6",
  variants: {
    flexDirection: {
      row: "flex-row",
      col: "flex-col",
    },
    justify: {
      justifyBetween: "justify-between",
      justifyStart: "justify-start",
      justifyEnd: "justify-end",
    },
    align: {
      alignCenter: "items-center",
      alignStart: "items-start",
      alignEnd: "items-end",
    },
  },

  defaultVariants: {
    justify: "justifyBetween",
    align: "alignStart",
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
