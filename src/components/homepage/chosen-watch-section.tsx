import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { getBackendUrl } from "@/utils/apiClient"
import { LoadingSection } from "@/shared/sections/loading-section";
import { ErrorSection } from "@/shared/sections/error-section";

export function ChosenWatchSection() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["chosenWatchQuery"],
    queryFn: async () => {
      const url = getBackendUrl("/watches/V1/chosen");
      const resp = await axios.get(url);
      return resp.data;
    },
  });

	if (isLoading) return <LoadingSection />;
	if (error || !data || data.length === 0) return <ErrorSection />
	
	return (
		<section
		className="w-full flex justify-center items-center p-10">
			<div className="flex items-center justify-center bg-background">
				<h3 className="text-4xl text-foreground">
					<span>
						<p>{data.name}</p>
					</span>
				</h3>
			</div>
		</section>
	)
}