import { useTranslations } from "next-intl";
import Image from "next/image";
import { SectionCarousel } from "@/shared/carousels/sectionCarousel/sectionCarousel";
import { Link } from "@/i18n/routing";
import { BrandsSection } from "@/components/homepage/brands-section";
import { LinksSection } from "@/components/homepage/links-section";


export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <main className="w-full">
      <section id="first-section" className="w-full">
        <SectionCarousel>
          <Image
            src="/home/swiper-img-3.webp"
            alt="Home Carousel Image 1"
            width={1366}
            height={768}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
          <Image
            src="/home/swiper-img-2.webp"
            alt="Home Carousel Image 1"
            width={1366}
            height={768}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
          <Image
            src="/home/swiper-img-1.webp"
            alt="Home Carousel Image 1"
            width={1366}
            height={768}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </SectionCarousel>
        
      </section>

      <LinksSection />
      <BrandsSection />

    </main>
  );
}
