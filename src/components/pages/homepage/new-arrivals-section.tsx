import { getNewArrivals } from "@/utils/api/homePage";
import { Watch } from "@/components/shared/watch/watch";
import { Link } from "@/i18n/routing";


export async function NewArrivalsSection() {
  	const data = await getNewArrivals();

  	if (typeof data === "undefined" ) return <></>

  	return (
		<section className="container-box py-4">
			<div className="container flex flex-col">
				<h1 className="section-title">NEW ARRIVALS</h1>
				<div className="w-full flex flex-wrap items-start pt-7">
					{data.map((watch_data) => (
						<div key={`${watch_data.watch_id}$${watch_data.name}`} className="sm:w-1/2 lg:w-1/4 px-1">
							<Watch data={watch_data} />
						</div>
					))}
				</div>
				<div className="flex w-full justify-center pt-4">
					<Link href={"/collections/?collections='new_arrivals'"}
					className="link-btn py-2 px-6 bg-zinc-950 text-zinc-50">
						<span>VIEW ALL</span>
					</Link>
				</div>
			</div>
			
		</section>
	)
}