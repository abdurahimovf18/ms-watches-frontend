import { getSocialLinks } from "@/utils/api/homePage";

import { Link } from "@/i18n/routing";
import { Teachers } from "next/font/google";
import { iSocialLink } from "@/utils/types";

const blackTeachers = Teachers({
    weight: "800",
    subsets: ["latin-ext"]
})

function SocialLinkContent({data}: {data: iSocialLink}) {
    const social_link = data.social_link || "/"
    const platform_name = data.platform_name || ""
    const social_username = data.social_username || ""

    // if (!(social_link && platform_name && social_username)) return <></>
    
    return (
        <div>
            <h3 className="text-sm pb-4">@{social_username}</h3>
            <Link className="link-btn py-2 px-4 text-zinc-900 bg-white
             min-w-full whitespace-nowrap text-lg" href={social_link}>
                <span>FOLLOW US ON {platform_name.toUpperCase()}</span>
            </Link>
        </div>
    )
}


export async function SocialLinksSection() {
    const social_links = await getSocialLinks()
    
    if (typeof social_links === "undefined" || social_links.length < 1) return <>Error</>

    return (
        <section className="container-box text-white bg-zinc-900">
            <div className="container pt-16 pb-2">
                <h1 className={`section-title ${blackTeachers.className} pt-2`}>MORE OF THE MONTANA SWISS</h1>

                <div className="flex overflow-x-scroll w-full py-6 gap-3 scrollbar-styles">
                    {social_links.map((social_links, index) => (
                        <div key={`${index}_${social_links.platform_name}`}>
                            <SocialLinkContent data={social_links} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

