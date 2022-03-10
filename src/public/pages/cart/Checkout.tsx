import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Header } from "../../components/Common";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import '../../styles/checkout-page.scss';

export function Checkout() {
    const { shoppingCart } = useShoppingCart();
    const navigate = useNavigate();

    useEffect(() => {
        if (shoppingCart.length == 0) {
            navigate('/');
        }
    }, []);
    return (
        <>
            <Header />
            <div className="container">
                <div className="checkout-container">
                    <div className="col">
                        <form action="">
                            <h2>Billing Informations</h2>
                            <div className="row">
                                <input type="text" placeholder="First name"/>
                                <input type="text" placeholder="Last name"/>    
                            </div>
                            <div className="row">
                                <input type="text" placeholder="Email address"/>    
                            </div>
                            <div className="row">
                                <input type="text" placeholder="Billing address"/>    
                            </div>
                            <div className="row">
                                <input type="text" placeholder="City"/>    
                                <input type="text" placeholder="State"/>    
                            </div>
                            <div className="row">

                            </div>
                        </form>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <Footer />
        </>
    );
}