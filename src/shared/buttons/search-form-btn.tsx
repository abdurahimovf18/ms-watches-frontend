'use client'

import { SearchForm } from "../forms/search-form";
import { Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { ScreenBlock } from "../screen-block";


export function SearchFormBtn() {

    const [open, setOpen] = useState<boolean>(false)

	const sidebarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (open && sidebarRef.current) {
		    sidebarRef.current.focus();
		}
	}, [open]);

	const closeFunction = () => setOpen(false)

	return (
		<>
			<Search
			onClick={() => setOpen(true)}
			className="icons" />

			<ScreenBlock open={open} closeFunction={closeFunction} />
			
			<div 
			className={`top-${open ? "open" : "close"}-animation z-[10] absolute 
			left-0 top-0 w-[100vw] h-[128px] bg-white flex justify-center items-center`}
			style={{
				transform: `translate(${open ? "0%" : "-100%"}, 0%)`,
			}} >
				<SearchForm />
			</div>
		</>
	)
}