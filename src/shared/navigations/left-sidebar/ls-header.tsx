import React from "react";
import { MoveLeft } from "lucide-react"
import "./style.css"

interface iLeftSidebarHeader {
	current?: string;
	setOpen: (value: boolean) => void;
}


export const LeftSidebarHeader = React.memo(({ current, setOpen }: iLeftSidebarHeader) => {
	if (!current) return <></>

  return (
		<div className="w-full h-10">
			<button
				onClick={() => setOpen(false)}
				className="w-full px-6 py-1 gap-2 flex justify-start items-center ls-header-item"
			>
				<MoveLeft strokeWidth={1} width={20} height={20} />
				<h3 className="text-[0.7rem] font-default">
					<span>{current}</span>
				</h3>
			</button>
		</div>
	)
})

LeftSidebarHeader.displayName = "LeftSidebarHeader";
