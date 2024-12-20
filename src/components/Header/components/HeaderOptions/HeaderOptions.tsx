import { ComponentProps } from "react";

export type HeaderOptionsProps = ComponentProps<"nav">;

export function HeaderOptions({ ...props }: HeaderOptionsProps) {
  return (
    <nav className="flex justify-center items-center">{props.children}</nav>
  );
}
