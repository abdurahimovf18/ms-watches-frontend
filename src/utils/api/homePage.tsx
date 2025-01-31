import { API } from "../apiClient";
import { iBrand, iBrandPlaceholder, iSocialLink, iWatch } from "../types";


export async function getChosenWatch(): Promise<iWatch | undefined> {
    try {
        const resp = await API.get<iWatch[]>("watches/V1/chosen", {
            params: {
                limit: 1,
            },
            cache: {
                ttl: 1 * 60 * 60 * 1000
            }
        })
        return resp.data[0]
    } catch (e) {
        return undefined
    }
}

export async function getFeaturedWatches(): Promise<iWatch[] | undefined> {
    try{
        const resp = await API.get("watches/v1/featured", {
            params: {
                limit: 4,
            },
            cache: {
                ttl: 1 * 60 * 60 * 1000,
            }
        })
        return resp.data
    } catch (e) {
        return undefined
    }
}

export async function getNewArrivals(): Promise<iWatch[] | undefined> {
    try{
        const resp = await API.get("watches/v1/new-arrivals", {
            params: {
                limit: 4,
            },
            cache: {
                ttl: 1 * 60 * 60 * 1000,
            }
        })
        return resp.data
    } catch (e) {
        return undefined
    }
}

export async function getSocialLinks(): Promise<iSocialLink[] | undefined> {
    try {
        const resp = await API.get<iSocialLink[]>("social-links/v1/links", {
            params: {
                limit: 5,
            },
            cache: {
                ttl: 1 * 60 * 60  * 1000 
            }
        })
        return resp.data
    } catch (e) {
        return undefined
    }
}

export async function getBrandPlaceholders(): Promise<iBrandPlaceholder[] | undefined> {
    try {
        const resp = await API.get<iBrandPlaceholder[]>("brands/v1/placeholder", {
            params: {
                limit: 7,
            },
            cache: {
                ttl: 1 * 60 * 60  * 1000
            }
        })
        return resp.data
    } catch (e) {
        return undefined
    }
}
