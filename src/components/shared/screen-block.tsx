import React from "react";
import clsx from "clsx"; // Optional: Use clsx or classnames for cleaner class handling

interface IScreenBlock extends React.HTMLProps<HTMLDivElement> {
  open: boolean;
  closeFunction: () => void;
}

export const ScreenBlock = React.memo(({ open, closeFunction, ...rest }: IScreenBlock) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click from propagating if necessary
    closeFunction();
  };

  return (
    <div
      onClick={handleClick}
      className={clsx(
        "fixed bg-black bg-opacity-55 left-0 top-[80px] w-full h-screen z-10",
        { "hidden": !open }
      )}
      {...rest}
    />
  );
})

ScreenBlock.displayName = "ScreenBlock";