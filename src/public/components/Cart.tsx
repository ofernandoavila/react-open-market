import { useEffect, useState } from 'react';
import { ProductType } from '../../types/ProductTypes';
import { ApiRoutes } from '../config/ApiRoutes';
import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/checkout.scss';

type ShoppingCartType = {
    amount: number;
    product: ProductType;
}

export function CartProductsOverview() {
    const [cart, setCart] = useState<Array<ShoppingCartType>>([]);
    const { shoppingCart, deleteFromCart } = useShoppingCart();

    useEffect(() => {
        shoppingCart.map(item => {
            fetch(ApiRoutes.getProductById + `?id=${item.productId}`)
                .then(response => response.json())
                .then(data => setCart(ext => [...ext, { amount: item.amount, product: data }]))
        });
    }, []);

    function handleDeleteFromCart(event: any, produto: number) {
        event.preventDefault();
        deleteFromCart(produto);
        event.target.parentElement.parentElement.remove();
    }

    return (
        <table className='checkout-overview'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Ações</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                { cart.map( (item: ShoppingCartType) => (
                    <tr key={ item.product.id }>
                        <td>
                            <img style={{maxWidth: 75}} src={item.product.thumbnail} alt="" />
                        </td>
                        <td>{item.product.name}</td>
                        <td>
                            <input
                                type="number"
                                // onChange={value => changeAmountProduct(item, value.target.value)}
                                value={item.amount}
                                max={item.product.amount}
                            />
                        </td>
                        <td>
                            <button onClick={event => handleDeleteFromCart(event, item.product.id!)}>Remove</button>
                        </td>
                        <td>R$ {item.product.price}</td>
                    </tr>
                )) }
            </tbody>
        </table>
    );
}

export function CartShippingCalculator() {
    return (
        <div className="checkout-form-overview">
            <div className="shipping-calculator">
                <p>Shipping calculator</p>
                <div className="form-group">
                    <input type="number" placeholder='_____-___' maxLength={1} />
                    <button>Calculate</button>
                </div>
            </div>
        </div>
    );
}

export function CartTotalOverview() {
    const [totalPrice, setTotalPrice] = useState<any>();
    const [cart, setCart] = useState<Array<ShoppingCartType>>([]);
    const { shoppingCart } = useShoppingCart();

    useEffect(() => {
        setCart([]);
        shoppingCart.map(item => {
            fetch(ApiRoutes.getProductById + `?id=${item.productId}`)
                .then(response => response.json())
                .then(data => setCart(ext => [...ext, { amount: item.amount, product: data }]))
        });
    }, [shoppingCart]);

    useEffect(() => {
        setTotalPrice(0);
        let total = cart.reduce((total, current) => total = total + (current.product.price * current.amount), 0);
        let newTotal = total.toFixed(2);
        setTotalPrice(newTotal ? newTotal : 0);
    }, [cart]);

    return (
        <div className="checkout-total-overview">
            <table>
                <thead>
                    <tr>
                        <th>Total</th>
                        <th>Shipping</th>
                        <th>Cupom</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>R$ {totalPrice}</td>
                        <td>R$ 89,98</td>
                        <td>
                            <div className="form-group">
                                <button>Aplicar</button>
                                <input type="text" />
                            </div>

                            <p>Nenhum cupom foi encontrado</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}