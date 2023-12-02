import React from "react";
import { classNames } from "@metaflow/utils/classNames";

type MainLayoutProps = {
  px?: number;
  py?: number;
  children: React.ReactNode;
};

const MainLayout = ({ px = 0, py = 0, children }: MainLayoutProps) => {
  return (
    <main
      style={{
        paddingLeft: px,
        paddingRight: px,
        paddingTop: py,
        paddingBottom: py,
      }}
      className={classNames(
        "flex w-full min-h-screen flex-col items-center justify-between"
      )}
    >
      {children}
    </main>
  );
};

export default MainLayout;
