'use client'

import { LeftSidebar } from "@/shared/navigations/left-sidebar/left-sidebar";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { ScreenBlock } from "../screen-block";
import clsx from "clsx";

export function LeftSideBarBtn() {
	const [open, setOpen] = useState<boolean>(false)
	const [blockHover, setBlockHover] = useState<boolean>(false)
	const sidebarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (open && sidebarRef.current) {
		sidebarRef.current.focus();
		}
	}, [open]);

	const closeFunction = () => setOpen(false)

	return (
		<div className="sm:block md:hidden">
			<div 
				className={clsx(
					"icons flex items-center justify-center cursor-pointer",
					blockHover && "scale-110"
				)}
				onClick={() => setOpen(prev => !prev)}
			>
				
				{open ? <X strokeWidth={1} /> : <Menu strokeWidth={1} />}
			
			</div>

			<ScreenBlock 
				open={open} 
				closeFunction={closeFunction} 
				onMouseEnter={() => setBlockHover(true)}
				onMouseLeave={() => setBlockHover(false)}
			/>

			<LeftSidebar open={open} setOpen={setOpen}/>

		</div>
	)
}
