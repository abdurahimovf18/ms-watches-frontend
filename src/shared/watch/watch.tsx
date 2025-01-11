import Image from "next/image";


export interface iWatch {
	watch_id: number;
	name: string;
	price: string;
	short_description: string;
	discount_percent: string;
	image_url: string;
}


export function Watch(watch_data: iWatch) {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<div className="w-full h-max bg-red-600">
				<h4 className="py-2 w-full text-center text-white text-sm">
					<span>Buy 2 Tissot, Get a Special Edition Crossbody Bag</span>
				</h4>
			</div>
			<div className="w-full bg-white flex items-center justify-center">
				<Image 
					src={watch_data.image_url}
					alt={watch_data.name}
					width={200}
					height={200}
					className="max-w-full max-h-full scale-95 hover:scale-100 transition-transform duration-200"	
				/>
			</div>
			<div className="flex flex-col text-white font-teachers w-full py-2 gap-2">
				<b className="text-[0.8rem]">
					<span>{watch_data.name}</span>
				</b>
				<b className="text-[0.7rem] text-zinc-50">
					<span>{watch_data.price} UZS</span>
				</b>
			</div>
		</div>
	)
}
