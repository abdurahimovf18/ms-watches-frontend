import { MainLogo } from "@/shared/logo"


interface ILeftSideBar {
	className?: string;
	style?: React.CSSProperties;
}


export function LeftSideBar({className, style}: ILeftSideBar) {

	return (
		<div 
		className={"overflow-scroll overscroll-y-contain min-h-auto fixed left-0 top-[80px] flex items-start justify-start " + className} 
		style={style}>
			<div className="h-screen w-[80vw] bg-white">
				<ul className="flex flex-col w-full h-max gap-0">
					<li className="text-[0.8rem] text-xl py-2 bg-white hover:bg-zinc-200 px-2 ">Promotions</li>
					<li className="text-[0.8rem] text-xl py-2 bg-white hover:bg-zinc-200 px-2">Outlet</li>
					<li className="text-[0.8rem] text-xl py-2 bg-white hover:bg-zinc-200 px-2">Brands</li>
					<li className="text-[0.8rem] text-xl py-2 bg-white hover:bg-zinc-200 px-2">Our Stores</li> 
					<li className="text-[0.8rem] text-xl py-2 bg-white hover:bg-zinc-200 px-2">About Us</li> 
					<li className="text-[0.8rem] text-xl py-2 bg-white hover:bg-zinc-200 px-2">Contact Us</li> 
					<li className="text-[0.8rem] text-xl py-2 bg-white hover:bg-zinc-200 px-2">Blogs</li> 
				</ul>
			</div>
		</div>
	)
}