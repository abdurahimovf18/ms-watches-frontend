"use client"

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { API } from "@/utils/apiClient";
import { Link } from "@/i18n/routing";



interface BackendData {
	watch_image_url: string,
	name: string,
	watch_id: number
}


export function TopWeeklyWatchSection() {
	const {isLoading, data, error} = useQuery<BackendData>({
		queryKey: ["top-weekly-watch"],
		queryFn: async () => {
			const resp = await API.get("watches/v1/top-weekly", {
				params: {
					limit: 1,
				},
				cache: {
					ttl: 1 * 60 * 60 * 1000
				}
			})
			return resp.data[0]
		}
	})

	if (error || isLoading || !data) return <></>

  return (
		<section className="container-box py-10">
			<div className="aspect-[4/3] relative container">
				<Image 
					src={data.watch_image_url}
					// src="https://cdn.shopify.com/s/files/1/0634/9235/8396/t/32/assets/es-8006-02-ms06-1696477951607.jpg?v=1696477958"
					alt="Top weekly watch"
					width={1440}
					height={900}
					className="min-w-full min-h-full"
				/>

				<div className="absolute left-0 top-0 w-full h-full flex justify-start items-center p-3">
					<div className="flex flex-col">
						<h2 className="text-white text-3xl underline decoration-1 decoration-blue-800 font-teachers sm:w-[300px] md:w-[350px]
							lg:w-[500px]">
							<span>{data.name}</span>
						</h2>
						<Link
							href={"/"}
							className="link-btn bg-white text-black w-max py-2 px-3 flex justify-center items-center font-teachers mt-3"
						>
							<span>DISCOVER NOW</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}