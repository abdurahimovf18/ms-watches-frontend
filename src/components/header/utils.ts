import { iUrl, NestedContent } from "./navLinks";
import { API } from "@/utils/apiClient";


interface Brand {
    name: string;
    country_image_url: string;
}


export async function getTopBrands(): Promise<NestedContent> {
    const resp = await API.get<Brand[]>("/brands/v1/top", {
        params: {
            limit: 10,
        },
        cache: {
            ttl: 1 * 60 * 60 * 1000,
        }
    });

    const data: NestedContent = resp.data.map(brand => {
        const url: iUrl = {
            link: `/brands/${brand.name}/`,
            imageUrl: brand.country_image_url,
            title: brand.name,
        };
        return url;
    });
    return data;
}
