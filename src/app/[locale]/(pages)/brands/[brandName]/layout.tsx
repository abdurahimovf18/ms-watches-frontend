

export default function Layout(
    {children, params}
    :
    {
        children: React.ReactNode, 
        params: { brandName: string }
    }
) {
    return (
        <>{children}</>
    )
}