import { useEffect, useState } from "react";
import { Header, Footer } from "../components/Common";
import { Carousel, SliderProducts } from "../components/Slider";
import { ProductType } from "../../types/ProductTypes";
import { ApiRoutes } from "../config/ApiRoutes";
import { ProductGrid } from "../components/Product";

export function Home() {
    const [produtos, setProdutos] = useState<Array<ProductType>>([]);

    useEffect(() => {
        fetch(ApiRoutes.getProducts)
        .then((response) => response.json())
        .then((data) => setProdutos(data));
    }, []);

    return (
        <div>
            <Header />
            <Carousel />
            <ProductGrid products={produtos} />
            <SliderProducts title="Mais vistos" products={produtos} />
            <SliderProducts title="Vistos recentemente" products={produtos} />
            <Footer />
        </div>
    );
}