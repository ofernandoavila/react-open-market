import { createContext, ReactNode, useEffect, useState } from "react";
import { ShoppingCartContextType, ShoppingCartItemType, ShoppingCartProviderType } from "../../types/CartTypes";

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function ShoppingCartProvider(props: ShoppingCartProviderType) {
    const [ shoppingCart, setShoppingCart ] = useState<Array<ShoppingCartItemType>>([]);

    useEffect(() => {
        if(localStorage.getItem('@react-market/shoppingCart') !== null) {
            let data = localStorage.getItem('@react-market/shoppingCart');
            setShoppingCart(JSON.parse(data || '{}'));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('@react-market/shoppingCart', JSON.stringify(shoppingCart));
    }, [shoppingCart]);

    function insertIntoCart (produtoId: any) {
        let alreadyAdded = false;

        shoppingCart.map((item: ShoppingCartItemType) => {
            if(item.productId == produtoId) {
                alreadyAdded = true;
                let newAmount = item.amount + 1;
                let tmpCart = shoppingCart;
                let cartFiltered = tmpCart.filter((element) => {
                    return element.productId != produtoId;
                });
                setShoppingCart([...cartFiltered, { amount: newAmount, productId: produtoId }]);
                return;
            }
        });

        if(!alreadyAdded) {
            setShoppingCart([...shoppingCart, { amount: 1, productId: produtoId }]);
        }
    }

    function deleteFromCart(produtoId: any) {
        shoppingCart.map((item: ShoppingCartItemType) => {
            if(item.productId == produtoId) {
                let tmpCart = shoppingCart;
                let cartFiltered = tmpCart.filter((element) => {
                    return element.productId != produtoId;
                });
                setShoppingCart([...cartFiltered]);
                return;
            }
        });
    }

    return (
        <ShoppingCartContext.Provider value={{ shoppingCart, insertIntoCart, deleteFromCart }}>
            {props.children}
        </ShoppingCartContext.Provider>
    );
}