import Image from "next/image"


export function BgStoreSection(
	{children}
	:
	{children: React.ReactNode}
) {

	return (
		<section 
		id="bg-store-section"
		className="relative w-screen"
		>

			<div className="min-w-screen sm:w-[1440px] 2xl:w-screen
				h-full overflow-hidden absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
				<Image
					src="/home/links-session-img.png"
					alt="bg-iamge"
					width={1920}
					height={1080}
					className="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
				/>
			</div>

			<div className="container-box min-h-[480px]">
				{children}
			</div>
		</section>
	)
}