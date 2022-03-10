import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header, Footer } from "../components/Common";
import { ProductContainer } from "../components/Product";

type ParamsType = {
    productName: string;
}

export function Product() {
    const params = useParams<ParamsType>();  

    return (
        <>
            <Header />
                <ProductContainer productName={ params.productName } />
            <Footer />
        </>
    );
}