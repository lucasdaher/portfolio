import { ComponentProps } from "react";

export type InteractiveContainerTitle = ComponentProps<"div"> & {
  title?: string;
  desc?: string;
};

export function InteractiveContainerTitle({ ...props }) {
  return (
    <div className="flex flex-col justify-center items-start gap-2">
      <h1 className="text-2xl font-medium">{props.title}</h1>
      <p className="text-white/70 font-light text-sm">{props.desc}</p>
    </div>
  );
}
