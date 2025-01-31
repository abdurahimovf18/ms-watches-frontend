import React, { useMemo } from "react"

import { getBrandPlaceholders } from "@/utils/api/homePage"
import { splitIntoChunks } from "@/utils/data"
import { iBrandPlaceholder } from "@/utils/types"
import Image from "next/image"
import { Link } from "@/i18n/routing"


interface iBrandComponent {
  brand: iBrandPlaceholder, 
  className?: string, 
  rest?: React.HTMLAttributes<HTMLLinkElement>
}


function Brand({brand, className, ...rest}: iBrandComponent) {
  const id = brand.id || null
  const image_url = brand.brand_image_url || "-"
  const name = brand.name || "-"

  const url = id ? `/brands/${id}` : '/404'

  return (
    <Link 
      href={url}
      className={`bg-light sm:w-[49%] lg:w-[32.7%] aspect-4/3 flex justify-center items-center 
        ${className} shadow-[0_0_3px_rgba(0,0,0,0.5)] p-10`}
      {...rest}>
      
      <Image 
        src={image_url}
        alt={name}
        width={480}
        height={240}
        className="max-w-full max-h-full"
      />

    </Link>
  )
}

export async function BrandsSection() {
  const brands = (await getBrandPlaceholders())
  if (typeof brands === "undefined" || brands.length === 0) return <></>

  const safeBrands = brands.filter(value => typeof value !== "undefined");
  
  return (
    <section className="container-box">
      <div className="container py-8">
        <h2 className="section-title">SHOP OUR BRANDS</h2>
        <div className="flex justify-center flex-wrap sm:gap-1 md:gap-2 lg:gap-1 pt-8">
          {safeBrands.map((brand , index) => (
            <Brand brand={brand} key={`${brand}${index}`} />
          ))}
          {
            safeBrands.length % 2 === 1 &&
            <Brand brand={safeBrands[0]} className="sm:block opacity-0 lg:hidden pointer-events-none" />
          }
        </div>
      </div>
    </section>
  )
}



// import { get<Brand />Placeholders } from "@/utils/api/homePage";
// import { iBrandPlaceholder } from "@/utils/types";
// import Image from "next/image";


// interface iBrandLink {
//   brand: iBrandPlaceholder;
//   is_last?: boolean;
// }

// function BrandLink({ brand, is_last = false }: iBrandLink) {

//   if (typeof brand === "undefined") return <></>

//   const brandImageUrl = brand.brand_image_url
//   const brandName = brand.name

//   if (!(brandImageUrl && brandName)) return <></>

//   return (
//     <li
//       className={`shadow-sm sm:h-28 md:h-40 lg:h-44 2xl:h-60 ${is_last ? "lg:col-start-2" : ""}`}
//       style={{
//         boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.5)",
//       }}
//     >
//       <div className="w-full h-full flex justify-center items-center sm:p-3 md:p-8 2xl:p-15">
//         <Image
//           src={brandImageUrl}
//           // src={"https://1000logos.net/wp-content/uploads/2018/10/Tissot-Logo.png"}
//           alt={brandName}
//           width={720}
//           height={480}
//           className="max-w-full"
//         />
//       </div>
//     </li>
//   );
// }

// export async function BrandsSection() {
//   const brands = await getBrandPlaceholders();

//   if (!(typeof brands !== "undefined" && brands.length > 0)) return <></>

//   return (
//     <section id="brands-section" className="container-box py-6 relative">
//       <div className="flex container flex-col">
//         <h1 className="section-title">SHOP OUR BRANDS</h1>
//         <div className="w-full pt-6">
//           <ul className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {brands.map((brand, index) => (
//               <BrandLink key={index} brand={brand} is_last={index === brands.length - 1} />
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }
