"use client";

import { Teachers } from "next/font/google";
import { FeaturedProductsCarousel } from "@/shared/carousels/featuredProducts/featuredProducts";
import { Link } from "@/i18n/routing";
import { getBackendUrl } from "@/utils/apiClient";
import { useQuery } from "@tanstack/react-query";
import { iWatch } from "@/shared/watch/watch";
import axios from "axios";
import { LoadingSection } from "@/shared/sections/loading-section";
import { ErrorSection } from "@/shared/sections/error-section";

const teachers = Teachers({
  weight: "600",
  subsets: ["latin-ext"],
});

type Data = iWatch[];

export function FeaturedProductsSection() {
  const { isLoading, error, data } = useQuery<Data>({
		
    queryKey: ["featured-products"],
    queryFn: async () => {
      const url = getBackendUrl("/watches/V1/featured");
      const resp = await axios.get(url, {
        params: {
          limit: 4,
        },
      });
      if (!resp.data || !Array.isArray(resp.data)) {
        throw new Error("Invalid data format");
      }
      return resp.data;
    },
  });

  if (isLoading) return <LoadingSection />;
  if (error || !data || data.length === 0) return <ErrorSection />

  // return <ErrorSection />

  return (
    <section id="featured-products" className="container-box bg-zinc-900">
      <div className="container flex sm:justify-between sm:gap-0 lg:gap-9 lg:justify-evenly items-center sm:flex-col lg:flex-row py-5">
        <div className="">
          <p className={`sm:text-3xl md:text-5xl 2xl:text-6xl text-white ${teachers.className}`}>
            <span>Featured Products</span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-10">
          <div className="sm:w-[90vw] md:w-[400px] h-[450px]">
            <FeaturedProductsCarousel data={data} />
          </div>
          <div className="relative flex">
            <Link
              href="/"
              className="bg-white p-2 text-black link-btn flex justify-center items-center overflow-visible"
            >
              <span>VIEW ALL</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
