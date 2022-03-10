import { Link } from "react-router-dom";
import { CartShippingCalculator, CartProductsOverview, CartTotalOverview } from "../../components/Cart";
import { Footer, Header } from "../../components/Common";
import '../../styles/cart.scss';

import { ProductType } from "../../../types/ProductTypes";
import { useShoppingCart } from "../../hooks/useShoppingCart";

type ShoppingCartType = {
    amount: number;
    product: ProductType;
}

export function Cart(props: any) {
    const { shoppingCart } = useShoppingCart();

    return (
        <>
            <Header />
            <div className="container">
                    <div className="cart-container">
                    {
                        shoppingCart.length < 1 ? 
                        <h2>Seu carrinho está vazio</h2>
                        :
                        <>
                           { <CartProductsOverview />}
                            <div className="separator"></div>
                            <div className="cart-footer">
                                <div className="cart-footer-shipping">
                                    <CartShippingCalculator />
                                </div>
                                <div className="cart-footer-price-overview">
                                    <CartTotalOverview />
                                </div>
                            </div>
                            <div className="checkout-button">
                                <Link to={'/cart/checkout'}>
                                    <input type="submit" value={'Checkout'} />
                                </Link>
                            </div>
                        </>

                    }
                    </div>
            </div>
            <Footer />
        </>
    );
}