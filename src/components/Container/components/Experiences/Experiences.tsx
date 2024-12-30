import { ComponentProps } from "react";

export type ExperiencesProps = ComponentProps<"div">;

export function Experiences({ ...props }) {
  return (
    <div
      className="flex flex-col justify-center items-start gap-6 w-full pt-6 lg:pl-8 h-full border-t-[0.5px] lg:border-t-0 lg:border-l-[0.5px] border-gray-dark border-opacity-30"
      {...props}
    >
      {props.children}
    </div>
  );
}
