import React from "react";


interface iHiddenPage {
    children: React.ReactNode
}


export default async function HiddenPage({children}: iHiddenPage) {
    return <>{children}</>
}
