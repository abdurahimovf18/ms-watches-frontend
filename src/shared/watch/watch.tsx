import Image from "next/image";
import clsx from "clsx";
import { Link } from "@/i18n/routing";
import "./styles.css"


export interface iWatch {
	watch_id: number;
	name: string;
	price: string;
	short_description: string;
	discount_percent: string;
	watch_image_url: string;
}


export function Watch(watch_data: iWatch) {
	return (
		<Link href={"/"} 
		className="watch w-full h-full flex flex-col justify-center items-center font-teachers">
			<div className={clsx(
				"w-full h-14 bg-red-700 text-center justify-center items-center py-3 px-1",
				watch_data.watch_id % 2 === 0 && "opacity-0"		
				)}>
				<p className="text-white text-[0.8rem] flex justify-center items-center w-full h-full uppercase">
					Buy 2 Tissot, Get a Special Edition Crossbody Bag
				</p>
			</div>
			<div className="w-full bg-inhernit flex items-center justify-center aspect-square">
				<Image 
					src={watch_data.watch_image_url}
					// src={"https://cdn.shopify.com/s/files/1/0322/8424/6155/products/SSC813P1_1-_1200x1200px.png?v=1685773446"}
					alt={watch_data.name}
					width={200}
					height={200}
					className="image-content max-w-full max-h-full scale-95 transition-transform duration-200"	
				/>
			</div>
			<div className="flex flex-col text-foreground w-full py-2 gap-2 h-32">
				<b className="text-[0.8rem]">
					<span>{watch_data.name}</span>
				</b>
				<b className="text-[0.7rem] text-foreground opacity-80">
					<span>{watch_data.price} UZS</span>
				</b>
			</div>
		</Link>
	)
}
