import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { useSelect } from "../hooks/useSelect";

const nav = tv({
  base: "text-white/50 font-normal text-xs md:text-sm lg:text-base tracking-tight px-4 lg:pr-8 cursor-pointer transition-all duration-200 ease-in-out hover:text-white/70",
  variants: {
    selected: {
      true: "text-white hover:text-white cursor-default bg-black-darker bg-opacity-30 backdrop-blur-xl p-2 rounded-xl lg:bg-transparent lg:bg-opacity-100 lg:p-0 lg:backdrop-blur-none lg:rounded-none",
      false: "lg:p-0 p-2",
    },
  },
  defaultVariants: {
    selected: false,
  },
});

const circle = tv({
  base: "hidden lg:block w-2 h-2 bg-blue-500 rounded-full transition-all duration-400 ease-in-out",
  variants: {
    selected: {
      true: "lg:block lg:opacity-100 lg:scale-100",
      false: "lg:opacity-0 lg:scale-75",
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
