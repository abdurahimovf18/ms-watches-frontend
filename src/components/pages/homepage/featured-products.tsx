import { Teachers } from "next/font/google";
import { FeaturedProductsCarousel } from "@/components/shared/carousels/featuredProducts/featuredProducts";
import { Link } from "@/i18n/routing";
import { getFeaturedWatches } from "@/utils/api/homePage";

const teachers = Teachers({weight: "600", subsets: ["latin-ext"]});

export async function FeaturedProductsSection() {
  const data = await getFeaturedWatches();
  if (data === undefined || data.length < 2) return <></> 

  return (
    <section id="featured-products" className="container-box bg-dark">
      <div className="container flex sm:justify-between sm:gap-0 lg:gap-9 lg:justify-evenly items-center sm:flex-col lg:flex-row py-5">
        <div className="">
          <p className={`sm:text-3xl md:text-5xl 2xl:text-6xl text-light ${teachers.className}`}>
            <span>Featured Products</span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-10">
          <div className="sm:w-[90vw] md:w-[400px] h-[450px]">
            <FeaturedProductsCarousel data={data} />
          </div>
          <div className="relative flex">
            <Link href="/" className="bg-light p-2 text-black link-btn">
              <span>VIEW ALL</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
