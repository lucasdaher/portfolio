import { ComponentProps } from "react";

interface ExperiencesContainerProps extends ComponentProps<"div"> {}

export function ExperiencesContainer({ ...props }: ExperiencesContainerProps) {
  return (
    <div
      className="bg-black-gray bg-opacity-30 backdrop-blur-[10px] p-10 rounded-lg border-[0.5px] border-[#9c9c9c]/30 
        w-full flex flex-row justify-between items-start gap-6"
      {...props}
    >
      {props.children}
    </div>
  );
}
