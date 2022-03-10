import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";

export function useShoppingCart() {
    const value = useContext(ShoppingCartContext);
    const { shoppingCart, deleteFromCart, insertIntoCart } = value;
    return { shoppingCart, deleteFromCart, insertIntoCart };
}