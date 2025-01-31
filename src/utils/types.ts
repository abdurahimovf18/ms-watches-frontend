interface iDefaultTypes {
    id?: number,
    created_at?: string,
    updated_at?: string,
}


export interface iWatch extends iDefaultTypes {
    watch_id?: number;
    name?: string;
    price?: string;
    short_description?: string;
    discount_percent?: string;
    watch_image_url?: string;
    special_event?: string;
}

export interface iSocialLink extends iDefaultTypes {
    platform_name?: string,
    social_username?: string,
    social_link?: string,
    added_by?: number,
    id?: number,
    created_at?: string,
    updated_at?: string,
}

export interface iBrand extends iDefaultTypes {
    name?: string,
    brand_image_url?: string,
    country_image_url?: string,
}

export interface iBrandPlaceholder {
    id?: iBrand["id"],
    name?: iBrand["name"],
    brand_image_url?: iBrand["brand_image_url"],
}
