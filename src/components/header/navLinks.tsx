import React from "react";
import { Link } from "@/i18n/routing";
import { getTopBrands } from "./utils";
import "./header.css";
import Image from "next/image";


export interface iUrl {
  link: string;
  imageUrl?: string;
  title: string;
  nested?: iUrl[];
}

export type NestedContent = iUrl[];

interface IHeaderNavLinksNestedContentProps {
  content: iUrl;
}

const HeaderNavLinksNestedContent = React.memo(({ content }: IHeaderNavLinksNestedContentProps) => {
  const { link, title, nested } = content;

  return (
    <div className="relative">
      <Link href={link}>{title}</Link>
      {nested && nested.length > 0 && (
        <span className="absolute w-48 left-0 bottom-0 -translate-x-4 translate-y-full bg-background hidden">
          <ul className="w-full flex flex-col">
            {nested.map(({ link, title, imageUrl }, idx) => (
              <li key={idx}>
                <Link href={link} className="flex justify-between items-center gap-3 px-6 py-3">
					<span className="text-sm">
						{title}
					</span>
					<div className="w-[13px] h-[13px] aspect-square">
						{
							imageUrl &&
							<Image 
								src={imageUrl}
								alt={`Icon image of ${title}`}
								width={13}
								height={13}
								className="max-w-full max-h-full"
						 	/>
						}
					</div>
				</Link>
              </li>
            ))}
          </ul>
        </span>
      )}
    </div>
  );
})

HeaderNavLinksNestedContent.displayName = "HeaderNavLinksNestedContent";

export async function HeaderNavLinks() {
  const topBrands = await getTopBrands();

  const navLinksTree: iUrl[] = [
    { link: "/promotions", title: "Promotions" },
    {
      link: "/brands",
      title: "Brands",
      nested: topBrands, // Set nested brands as children links
    },
    { link: "/about", title: "About Us" },
    { link: "/contact", title: "Contact Us" },
    { link: "/blogs", title: "Blogs" },
  ];

  return (
    <ul className="items-center justify-center gap-5 sm:hidden lg:flex">
      {navLinksTree.map((value, idx) => (
        <li key={idx} className="header-ul-element">
          <HeaderNavLinksNestedContent content={value} />
        </li>
      ))}
    </ul>
  );
}
