import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ApiRoutes } from '../config/ApiRoutes';
import '../styles/product.scss';
import { ProductContainerProps, ProductType } from '../../types/ProductTypes';
import { useShoppingCart } from '../hooks/useShoppingCart';

/**
 * Display the single product container on page
 */
export function ProductContainer(props: ProductContainerProps) {

    const [produto, setProduto] = useState<ProductType>();
    const { insertIntoCart } = useShoppingCart();
    
    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0 ,0);
        fetch(ApiRoutes.getProduct + `?name=${props.productName}`)
            .then((response) => response.json())
            .then((data) => setProduto(data));
    }, []);

    function handleInsertIntoCart(event: any, produto?: ProductType) {
        event.preventDefault();
        insertIntoCart(produto?.id);
        navigate('/cart');
    }
    
    return (
        <div className="product">
            <div className="container">
                <div className="product-content">
                    <div className="image-gallery">
                        <img src={produto?.thumbnail} alt="" />
                    </div>
                    <div className="product-info">
                        <div className="product-rating">
                            <ul>
                                <li><i className='fa-solid fa-star'></i></li>
                                <li><i className='fa-solid fa-star'></i></li>
                                <li><i className='fa-solid fa-star'></i></li>
                                <li><i className='fa-solid fa-star'></i></li>
                                <li><i className='fa-solid fa-star-half-stroke'></i></li>
                            </ul>
                            <span>(402 avaliações)</span>
                        </div>
                        <div className="product-title">
                            <h3>{produto?.name}</h3>
                            <div>
                                <span>(Cód. Item 55020335)</span>
                                <span>Outros produtos {produto?.brand}</span>
                            </div>
                        </div>
                        <div className="product-price">
                            <div>
                                <p>R$ {produto?.price}</p>
                                
                            </div>
                            <button
                                onClick={event => handleInsertIntoCart(event, produto)}    
                            >Comprar</button>
                        </div>
                        <div className="product-shipping">
                            <label htmlFor="shipping-calculator">Calcule o frete e o prazo de entrega</label>
                            <input type="text" name='shipping-calculator' placeholder='_____-___'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

type ProductGridType = {
    products: Array<ProductType>;
}
export function ProductGrid(props: ProductGridType) {
    return (
        <div className="container">
            <div className="products-grid">
                { props.products.map( item => (
                    <Link key={item.id} to={`/product/${item.name}`}>
                        <div className="grid-item">
                            <img src={item.thumbnail} alt="" />
                            <div className="product-info">
                                <p>{item.name}</p>
                                <h3>R$ {item.price}</h3>
                            </div>
                        </div>
                    </Link>
                )) }
            </div>    
        </div>
    );
}