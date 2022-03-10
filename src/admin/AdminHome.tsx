import { useEffect, useState } from 'react';
import { AdminTemplate } from './components/AdminTemplate';
import { AdminContent, AdminHeader, AdminSideMenu } from './components/Commom';
import './styles/main.scss';

export function AdminHome() {
    const [amountProducts, setAmountProducts] = useState(0);

    useEffect(() => {
        fetch('http://localhost/api-php/total-amount-products')
            .then(response => response.json())
            .then(data => setAmountProducts(data.productAmount));
    }, []);

    return (
        <AdminTemplate>
            <h2>Dashboard</h2>
            <div className="row">
                <div className="col" style={{backgroundColor: 'red'}}>
                    <h3>Products</h3>
                    <p>{ amountProducts }</p>
                </div>
                <div className="col" style={{backgroundColor: 'green'}}>
                    <h3>Users</h3>
                </div>
                <div className="col" style={{backgroundColor: 'blue'}}>
                    <h3>Orders</h3>
                </div>
            </div>
        </AdminTemplate>
    );
}