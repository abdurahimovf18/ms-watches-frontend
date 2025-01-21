"use client"

import { useQuery } from "@tanstack/react-query"
import { ErrorSection } from "@/shared/sections/error-section";
import { LoadingSection } from "@/shared/sections/loading-section";
import { API } from "@/utils/apiClient";
import { iWatch, Watch } from "@/shared/watch/watch";


type Data = iWatch[]


export function NewArrivalsSection() {
	const {isLoading, error, data} = useQuery<Data>({
		queryKey: ["new-arrivals"],
		queryFn: async () => {
			const resp = await API.get(
				"watches/v1/new-arrivals",
				{
					params: {
						limit: 4,
					},
				}
			)
			return resp.data
		}
	})

	if (isLoading) return <LoadingSection />
	if (error || !data || data.length === 0) return <ErrorSection />

  return (
		<section className="container-box py-4">
			<div className="container flex flex-col">
				<h1 className="section-title">NEW ARRIVALS</h1>
				<div className="w-full flex flex-wrap items-start">
					{data.map((value) => (
						<div key={value.watch_id} className="sm:w-1/2 lg:w-1/4 px-1">
							<Watch {...value} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}