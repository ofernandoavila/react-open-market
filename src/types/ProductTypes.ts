export type ProductType = {
    id?: number;
    thumbnail?: string;
    name?: string;
    price: number | 0;
    priceParcela?: {
        quantity: number;
        price: string;
    }
    inStock?: Boolean;
    amount: number;
    brand?: string;
}

export type ProductContainerProps = {
    productName?: string;
}