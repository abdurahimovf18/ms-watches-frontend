import Image from "next/image";

interface iBrandLink {
  brandImageUrl: string;
  brandName: string;
  is_last?: boolean;
}

function BrandLink({ brandImageUrl, brandName, is_last = false }: iBrandLink) {
  return (
    <li
      className={`shadow-sm sm:h-28 md:h-40 lg:h-44 2xl:h-60 ${is_last ? "lg:col-start-2" : ""}`}
      style={{
        boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="w-full h-full flex justify-center items-center sm:p-3 md:p-8 2xl:p-15">
        <Image
          src={brandImageUrl}
          alt={brandName}
          width={720}
          height={480}
          className="max-w-full"
        />
      </div>
    </li>
  );
}

export function BrandsSection() {
  const brands: iBrandLink[] = [
    {
      brandImageUrl: "/home/brands-session/alpina.png",
      brandName: "alpina",
    },
    {
      brandImageUrl: "/home/brands-session/calvin-klein.png",
      brandName: "calvin-klein",
    },
    {
      brandImageUrl: "/home/brands-session/frederique-constant-geneve.png",
      brandName: "frederique-constant-geneve",
    },
    {
      brandImageUrl: "/home/brands-session/tommy-hilfiger.png",
      brandName: "tommy-hilfiger",
    },
    {
      brandImageUrl: "/home/brands-session/bering.png",
      brandName: "bering",
    },
    {
      brandImageUrl: "/home/brands-session/coach.png",
      brandName: "coach",
    },
    {
      brandImageUrl: "/home/brands-session/tissot.png",
      brandName: "tissot",
    },
  ];

  return (
    <section id="brands-section" className="container-box py-6">
      <div className="flex container flex-col">
        <h1 className="section-title">SHOP OUR BRANDS</h1>
        <div className="w-full pt-6">
          <ul className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {brands.map((data, index) => (
              <BrandLink key={index} {...data} is_last={index === brands.length - 1} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
