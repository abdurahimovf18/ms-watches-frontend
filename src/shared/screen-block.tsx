import React from "react";
import clsx from "clsx"; // Optional: Use clsx or classnames for cleaner class handling

interface IScreenBlock {
  open: boolean;
  closeFunction: () => void;
}

export function ScreenBlock({ open, closeFunction }: IScreenBlock) {
  return (
    <div
      onClick={closeFunction}
      className={clsx(
        "fixed bg-transparent-black left-0 top-[100px] w-full h-screen z-10",
        { hidden: !open }
      )}
    />
  );
}
