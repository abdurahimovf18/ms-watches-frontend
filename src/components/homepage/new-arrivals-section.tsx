"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { ErrorSection } from "@/shared/sections/error-section";
import { LoadingSection } from "@/shared/sections/loading-section";
import { getBackendUrl } from "@/utils/apiClient";
import { iWatch } from "@/shared/watch/watch";


type Data = iWatch[]


export function NewArrivalsSection() {
	const {isLoading, error, data} = useQuery<Data>({
		queryKey: ["new-arrivals"],
		queryFn: async () => {
			const url = getBackendUrl("/watches/V1/new-arrivals")
			const resp = await axios.get(
				url,
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
					<div>
						
					</div>
			</div>
		</section>
	)
}