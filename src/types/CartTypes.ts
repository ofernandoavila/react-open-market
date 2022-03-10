import { ReactNode } from "react";
import { ProductType } from "./ProductTypes";

export type CartItemType = {
    amount: number;
    product: ProductType;
}

export type ShoppingCartItemType = {
    amount: number;
    productId: number;
}

export type ShoppingCartContextType = {
    shoppingCart: Array<ShoppingCartItemType>;
    insertIntoCart: any;
    deleteFromCart: any;
}

export type ShoppingCartProviderType = {
    children: ReactNode;
}