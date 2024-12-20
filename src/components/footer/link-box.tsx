import { Link } from "@/i18n/routing";
import { Teachers } from "next/font/google";


const teachers = Teachers({
	weight: "700",
	subsets: ["latin-ext"]
})

interface iLinkBox {
	title: string;
	links: { [key: string]: string }
}

export function LinkBox({title, links}: iLinkBox) {
	return (
		<div className="flex flex-col gap-2 sm:1/3 md:w-1/4 xl:w-1/4 box-border">
			<h3 className={`text-[0.9rem] text-zinc-950 ${teachers.className}`}>{title}</h3>
			<ul className="flex flex-col gap-1">
				{Object.entries(links).map(([key, value]) => (
						<li key={key}
						className="text-[0.7rem]">
							<Link href={value}>{key}</Link>
						</li>
					))}	
			</ul>	
		</div>
	)
}