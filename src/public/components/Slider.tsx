import { Link } from 'react-router-dom';
import '../styles/slider.scss';
import { SliderProductsProps } from '../../types/SliderTypes';

/**
 * Simple carousel of slides
 * 
 * @param slides - List of slides to be display in carousel
 */
export function Carousel() {
    return (
        <div className='carousel'>
            <div className="carousel-container">
                <ul>
                    <li className='active'>Slide 1</li>
                    <li>Slide 2</li>
                </ul>
            </div>
        </div>
    );
}

/**
 * Create a slider of products to be display
 * 
 * @param title - Define the title of the slider
 * @param products - List of products to be display 
 */
export function SliderProducts(props: SliderProductsProps) {
    return (
        <div className='slider-products'>
            <div className="slider-products-container">
                <h2>{ props.title }</h2>
                <ul>
                    { props.products.map(produto => (
                        <Link key={produto.id} to={`/product/${produto.name}`}>
                            <li> 
                                <img src={produto.thumbnail} alt="" />
                                <div className="product-info">
                                    <p>{produto.name}</p>
                                    <h3>R$ {produto.price}</h3>
                                    
                                </div>
                            </li>
                        </Link>
                    )) }
                </ul>
            </div>
            <div className="slider-controls">
                <div className="control-left"><i className='fa-solid fa-angle-left'></i></div>
                <div className="control-right"><i className='fa-solid fa-angle-right'></i></div>
            </div>
        </div>
    );
}