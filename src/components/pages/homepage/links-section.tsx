import { Link } from "@/i18n/routing"
import { BgStoreSection } from "@/components/shared/sections/bgStoreSection"


export function LinksSection() {
  return (
	<BgStoreSection>
		
		<div className="w-full flex flex-col justify-center items-center container">

			<h1 className="w-full text-white font-[geist]eachers sm:text-3xl md:text-4xl xl:text-5xl text-center">
				<span className="">A watch for every individual.</span>
			</h1>

			<div className="text-white w-full pt-5 text-center">
				<span>
					At The Watch Store, time is not just a measure, but a lifestyle. <br className="sm:hidden md:flex" />
					Discover our collection of premium watches for every person and occasion.
				</span>
			</div>

			<div className="flex sm:gap-2 md:gap-3 sm:pt-5 md:pt-10 sm:flex-col md:flex-row">
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
	</BgStoreSection>
	)
}