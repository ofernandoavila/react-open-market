import { createContext, useEffect, useState } from "react";
import { CartItemType } from "../../types/CartTypes";
import { ProductType } from "../../types/ProductTypes";
import { ApiRoutes } from "../config/ApiRoutes";

type CartContextType = {
    cart: Array<CartItemType>;
    insertIntoCart: any;
    deleteFromCart: any;
    changeAmountProduct: any;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider(props: any) {
    const [cart, setCart] = useState<Array<CartItemType>>([]);

    useEffect(() => {
        if(localStorage.getItem('@react-market/cart') !== null) {
            let data = localStorage.getItem('@react-market/cart');
            setCart(JSON.parse(data || '{}'));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('@react-market/cart', JSON.stringify(cart));
    }, [cart]);

    function changeAmountProduct(produto: CartItemType, newAmount:number) {
        
        if(newAmount == 0) {
            deleteFromCart(produto);
            return;
        }
        cart.map((item: CartItemType) => {
            if(item.product.id == produto.product.id) {
                let tmpCart = cart
                let cartFiltered = tmpCart.filter((element) => {
                    return element.product.id != produto.product.id;
                });

                setCart([...cartFiltered, { amount: newAmount, product: produto.product }]);
                return;
            }
        });
        console.log(cart);
    }

    function deleteFromCart (produto: CartItemType) {
        if(!window.confirm("Are you sure you want to remove '" + produto.product.name + "' from your cart?")) {
            return;
        }
        cart.map((item: CartItemType) => {
            if(item.product.id == produto.product.id) {
                let newAmount = item.amount + 1;
                let tmpCart = cart;
                let cartFiltered = tmpCart.filter((element) => {
                    return element.product != produto.product;
                });
                setCart([...cartFiltered]);
                return;
            }
        });
    }

    function insertIntoCart (produto: ProductType) {
        let alreadyAdded = false;

        cart.map((item: CartItemType) => {
            if(item.product.id == produto.id) {
                alreadyAdded = true;
                let newAmount = item.amount + 1;
                let tmpCart = cart;
                let cartFiltered = tmpCart.filter((element) => {
                    return element.product.id != produto.id;
                });
                setCart([...cartFiltered, { amount: newAmount, product: produto }]);
                return;
            }
        });

        if(!alreadyAdded) {
            setCart([...cart, { amount: 1, product: produto }]);
        }
    }

    return (
        <CartContext.Provider value={{ cart, insertIntoCart, changeAmountProduct, deleteFromCart }}>
            {props.children}
        </CartContext.Provider>
    );
}