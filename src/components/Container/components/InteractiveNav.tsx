import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { useSelect } from "../hooks/useSelect";

const nav = tv({
  base: "text-white/50 font-normal text-base tracking-tight pr-8 cursor-pointer transition-all duration-200 ease-in-out hover:text-white/70",
  variants: {
    selected: {
      true: "text-white hover:text-white cursor-default",
    },
  },

  defaultVariants: {
    selected: false,
  },
});

const circle = tv({
  base: "w-2 h-2 bg-blue-500 rounded-full transition-all duration-400 ease-in-out",
  variants: {
    selected: {
      true: "block opacity-100 scale-100",
      false: "opacity-0 scale-75",
    },
  },

  defaultVariants: {
    selected: false,
  },
});

export type InteractiveNavProps = ComponentProps<"nav"> &
  VariantProps<typeof nav> & {
    selectedName?: string;
  };

export function InteractiveNav({
  selectedName = "experiencias",
  selected,
  ...props
}: InteractiveNavProps) {
  const { handleSelect } = useSelect();
  return (
    <nav className="flex justify-center items-center gap-2" {...props}>
      <div className={circle({ selected })}></div>
      <span
        className={nav({ selected })}
        onClick={() => handleSelect(selectedName)}
      >
        {props.children}
      </span>
    </nav>
  );
}
