import { ComponentProps } from "react";

export type ExperiencesProps = ComponentProps<"div">;

export function Experiences({ ...props }) {
  return (
    <div
      className="flex flex-col justify-center items-start gap-6 w-full pl-8 h-full border-l-[0.5px] border-[#9c9c9c]/30"
      {...props}
    >
      {props.children}
    </div>
  );
}
