"use client"

import { useUrlSearchParams } from "use-url-search-params";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { API } from "@/utils/apiClient";


interface iDefaultPagination {
    initialPage?: number;
    limit?: number;
    nameSpace: string;
    paginationKeys: string[];
}


interface iDefaultPaginationApiResponseNode {
    total_pages?: number;
    total_items?: number;
}

interface iDefaultPaginationApiResponse {
    page_info: iDefaultPaginationApiResponseNode;
    [key: string]: unknown;
}


export function DefaultPagination({ initialPage = 1, limit = 20, nameSpace = "page", paginationKeys }: iDefaultPagination) {
    const params = useUrlSearchParams({ nameSpace: initialPage, limit: limit });
    const currentPage = useState<number>(initialPage)

    const [data, error, isLoading] = useQuery<iDefaultPaginationApiResponse>({
        queryKey: paginationKeys,
        queryFn: async () => {
            const resp = await 
        }
    })

    return (
        <div className="w-full flex justify-center items-center p-3">

            <ul>

                <li>

                </li>

                <li></li>

                <li></li>

            </ul>

        </div>
    )

}