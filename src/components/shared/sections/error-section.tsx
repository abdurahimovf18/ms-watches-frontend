import { Link } from "@/i18n/routing";
import { Link as LinkIcon } from "lucide-react";
import "./styles.css"

interface iErrorSection {
	error?: string;
	sectionName?: string;
}


export function ErrorSection({
	error = "Sorry, Error occured when loading this section. Please call customer care services or contact with admins...", 
	sectionName = "error-section"
}: iErrorSection) {
	return (
		<section id={sectionName} className="w-screen py-16 bg-bakcground flex justify-center items-center">
			<div className="sm:4/5 md:w-3/4 flex flex-col justify-center items-center gap-3 px-3 py-2">

				<div className="flex gap-4 justify-center items-center text-center sm:flex-col lg:flex-row">
					<span className="animate-ping ring-1 ring-foreground sm:w-5 md:w-6 lg:w-4 xl:w-5 aspect-square rounded-full"></span>
					<h3 className="sm:text-lg xl:text-xl text-foreground">{error}</h3>
				</div>

				<div className="w-full flex justify-center items-center gap-6 mt-6">
					<Link href={"/"} className="error-link">
						<span>admins</span>
						<LinkIcon strokeWidth={1.3} className="w-[17px] h-[17px]"/>
					</Link>

					<Link href={"/"} className="error-link">
						<span>customer care services</span>
						<LinkIcon strokeWidth={1.3} className="w-[17px] h-[17px]"/>
					</Link>
				</div>

			</div>
		</section>
	)
}