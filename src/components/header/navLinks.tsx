import React from "react";
import "./header.css"
import { Link } from "@/i18n/routing";


interface iHeaderNavLinksNestedContent {
	content: Record<string, string> | string;
	content_key: string;
}


function HeaderNavLinksNestedContent({content, content_key}: iHeaderNavLinksNestedContent) {

	if (typeof content === "string") {
		return (
			<Link href={content}>
				{content_key}
			</Link>
		)
	}

	return (
		<div className="relative">
			<Link href={content._}>
				{content_key}
			</Link>
			<span className="absolute w-48 left-0 bottom-0 -translate-x-4 translate-y-full bg-white hidden">
				<ul className="w-full flex flex-col">
					{
						Object.entries(content).map(([key, value]) => (
							key !== "_" &&
							<Link href={value} key={key}>
								{key}
							</Link>
						))
					}
				</ul>
			</span>
		</div>
	)
}


export function HeaderNavLinks() {
	const navLinksTree = {
		"Promotions": "/",
		"Brands": {
			"_": "/brands",
			"TISSOT": "/brands/tissot"
		},
		"About Us": "/",
		"Contact Us": "/",
		"Blogs": "/",
	}

  return (
		<ul className="items-center justify-center gap-5 sm:hidden lg:flex">
			{Object.entries(navLinksTree).map(([key, content]) => (
				<li key={key} className="header-ul-element">
					<HeaderNavLinksNestedContent content_key={key} content={content} />
				</li>
			))}
		</ul>
	)
};