import { classNames } from "@metaflow/utils/classNames";

type ContainerProps = {
  variant:
    | "unstyled"
    | "flexRowCenter"
    | "flexRowLeft"
    | "flexRowRight"
    | "flexRowBetween"
    | "flexColCenter"
    | "flexColLeft"
    | "flexColRight"
    | "flexColBetween";
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ variant, className, children }: ContainerProps) => {
  return (
    <>
      {variant === "unstyled" && <div className={className}>{children}</div>}
      {variant === "flexRowCenter" && (
        <div
          className={classNames(className, "flex items-center justify-center")}
        >
          {children}
        </div>
      )}
      {variant === "flexRowLeft" && (
        <div
          className={classNames(className, "flex items-center justify-start")}
        >
          {children}
        </div>
      )}
      {variant === "flexRowRight" && (
        <div className={classNames(className, "flex items-center justify-end")}>
          {children}
        </div>
      )}
      {variant === "flexRowBetween" && (
        <div
          className={classNames(className, "flex items-center justify-between")}
        >
          {children}
        </div>
      )}
      {variant === "flexColCenter" && (
        <div
          className={classNames(
            className,
            "flex flex-col items-center justify-center"
          )}
        >
          {children}
        </div>
      )}
      {variant === "flexColLeft" && (
        <div
          className={classNames(
            className,
            "flex flex-col items-start justify-center"
          )}
        >
          {children}
        </div>
      )}
      {variant === "flexColRight" && (
        <div
          className={classNames(
            className,
            "flex flex-col items-end justify-center"
          )}
        >
          {children}
        </div>
      )}
      {variant === "flexColBetween" && (
        <div
          className={classNames(
            className,
            "flex flex-col items-center justify-between"
          )}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Container;
