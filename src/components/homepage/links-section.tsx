import Image from "next/image"
import { Link } from "@/i18n/routing"


export function LinksSection() {
  return (
		<section
			id="links-section"
			className="w-screen h-[408px] relative flex justify-center items-center md:px-20 sm:px-10"
		>
			<div className="min-w-screen sm:w-[1440px] 2xl:w-screen
			h-full overflow-hidden absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
				<Image
					src="/home/links-session-img.png"
					alt="bg-iamge"
					width={1920}
					height={1080}
					className="w-full min-h-[408px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
				/>
			</div>

			<div className="w-full h-max flex flex-col justify-center items-center">

				<h1 className="w-full h-max text-white font-teachers sm:text-3xl md:text-4xl xl:text-5xl text-center">
					<span className="">A watch for every individual.</span>
				</h1>

				<div className="text-white w-full h-max pt-5 text-center">
					<span>
						At The Watch Store, time is not just a measure, but a lifestyle. <br className="sm:hidden md:flex" />
						Discover our collection of premium watches for every person and occasion.
					</span>
				</div>
				
				<div className="w-max h-max flex sm:gap-2 md:gap-3 sm:pt-5 md:pt-10 sm:flex-col md:flex-row">
					<Link 
						href="/"
						className="link-btn text-zinc-900 bg-white w-56 h-9 flex items-center justify-center"
					>
						<span>ABOUT US</span>
					</Link>
					<Link 
						href="/"
						className="link-btn text-zinc-900 bg-white w-56 h-9 flex items-center justify-center"
					>
						<span>OUR STORES</span>
					</Link>
				</div>
			</div>
		</section>
	)
}