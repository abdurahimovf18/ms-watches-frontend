import clsx from "clsx";
import React from "react";


interface iLeftSidebarBox {
	children: React.ReactNode;
	open: boolean;
	sidebarAnimation: "left" | "right";
	isChild?: boolean;
}

const animationPositionStyles = {
  left: "-translate-x-[100%]",
  right: "translate-x-[100%]",
};

export const LeftSidebarBox = React.memo(({
	children,
	open,
	sidebarAnimation,
	isChild = false,
}: iLeftSidebarBox) => (
	<div
		className={clsx(
			"sidebar-box",
			open ? "translate-x-0" : animationPositionStyles[sidebarAnimation],
			`opacity-${Number(open) * 100}`,
			isChild && "-translate-y-[80px]"
		)}
	>
		{children}
	</div>
))