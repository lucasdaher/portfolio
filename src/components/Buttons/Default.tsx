import React from "react";

interface DefaultProps {
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
}: DefaultProps) {
  return (
    <React.Fragment>
      {(download === false && (
        <button
          className={`flex justify-center items-center gap-${gap} bg-black-gray px-8 md:px-16 py-4 rounded-full hover:bg-black transition-all duration-200 ease-in-out ${className} text-white`}
          title={title}
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
              className={`flex justify-center items-center gap-${gap} bg-black-gray px-16 py-4 rounded-full hover:bg-black transition-all duration-200 ease-in-out ${className} text-white w-full`}
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
