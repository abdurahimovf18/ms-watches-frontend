import { ProductFilterAside } from "./filter-aside"
import { ProductFilterHeader } from "./filter-header"


export function ProductsSection() {
    return (
        <section className="container-box">
            
            <ProductFilterAside />
            <div>
                <ProductFilterHeader />
                
            </div>


        </section>
    )
}