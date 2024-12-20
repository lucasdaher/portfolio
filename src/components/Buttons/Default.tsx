import React, { ComponentProps } from "react";

export interface DefaultProps extends ComponentProps<"button"> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  name?: string;
  gap?: number;
  className?: string;
  title?: string;
  download?: boolean;
  downloadFile?: string;
  downloadHref?: string;
}

export default function Default({
  name,
  leftIcon,
  rightIcon,
  gap,
  className,
  download,
  downloadFile,
  downloadHref,
  title,
  ...props
}: DefaultProps) {
  return (
    <React.Fragment>
      {(download === false && (
        <button
          className={`flex justify-center items-center gap-${gap} bg-normal px-8 md:px-16 py-4 rounded-full
          hover:bg-normal-hover hover:transform hover:scale-105 transition-all duration-200 ease-in-out text-white ${className}`}
          title={title}
          {...props}
        >
          {leftIcon}
          <span className="text-lg">{name}</span>
          {rightIcon}
        </button>
      )) ||
        (download === true && (
          <a
            href={downloadHref}
            rel="noopener noreferrer"
            target="_blank"
            download={downloadFile}
          >
            <button
              className={`flex justify-center items-center gap-${gap} bg-normal px-16 py-4 rounded-full hover:bg-normal-hover hover:transform hover:scale-105 transition-all duration-200 ease-in-out text-white w-full ${className}`}
              title={title}
            >
              {leftIcon}
              <span className="text-lg">{name}</span>
              {rightIcon}
            </button>
          </a>
        ))}
    </React.Fragment>
  );
}
