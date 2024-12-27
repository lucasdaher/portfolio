import { tv, VariantProps } from "tailwind-variants";

const text = tv({
  base: "",
  variants: {},
  defaultVariants: {},
});

export type ButtonTextProps = VariantProps<typeof text>;

export function ButtonText({}: ButtonTextProps) {
  // Esta propriedade do botão está pendente...
}
