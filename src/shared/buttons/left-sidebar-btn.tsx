'use client'

import { LeftSideBar } from "@/shared/navigations/left-sidebar";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { ScreenBlock } from "../screen-block";


export function LeftSideBarBtn() {

	const [open, setOpen] = useState<boolean>(false)

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
			className="ring-black ring-1 rounded-sm icons flex items-center justify-center"
			onClick={() => setOpen(prev => !prev)}>
				
				{open ? <X /> : <Menu />}
			
			</div>

			<ScreenBlock open={open} closeFunction={closeFunction} />

			<LeftSideBar
			className={`left-${open ? "open" : "close"}-animation z-[10]`}
			style={{
				transform: `translate(${open ? "0%" : "-100%"}, 0%)`,
			}} 
			/>

		</div>
	)
}
