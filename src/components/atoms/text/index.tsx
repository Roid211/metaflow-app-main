import { classNames } from "@metaflow/utils/classNames";
import React from "react";

type TextProps = {
  variant: "default" | "dim" | "accent";
  type: "h1" | "h2" | "h3" | "p1" | "p2" | "p3";
  children: React.ReactNode;
  className?: string;
};

const Text = ({ variant, type, className, children }: TextProps) => {
  return (
    <>
      {variant === "default" && (
        <>
          {type === "h1" && (
            <h1
              className={classNames(
                className,
                "text-light-on-surface text-[32px] font-medium"
              )}
            >
              {children}
            </h1>
          )}
          {type === "h2" && (
            <h2
              className={classNames(
                className,
                "text-light-on-surface text-[24px] font-medium"
              )}
            >
              {children}
            </h2>
          )}
          {type === "h3" && (
            <h3
              className={classNames(
                className,
                "text-light-on-surface text-[20px] font-medium"
              )}
            >
              {children}
            </h3>
          )}
          {type === "p1" && (
            <p
              className={classNames(
                className,
                "text-light-on-surface text-[16px] font-normal"
              )}
            >
              {children}
            </p>
          )}
          {type === "p2" && (
            <p
              className={classNames(
                className,
                "text-light-on-surface text-[12px] font-normal"
              )}
            >
              {children}
            </p>
          )}
          {type === "p3" && (
            <p
              className={classNames(
                className,
                "text-light-on-surface text-[10px] font-normal"
              )}
            >
              {children}
            </p>
          )}
        </>
      )}
    </>
  );
};

export default Text;
