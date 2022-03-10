import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../../types/ProductTypes";
import { AdminTemplate } from "../components/AdminTemplate";
import { ProductsTable } from "../components/Commom";

export function AdminProducts() {
    const [isData, setIsData] = useState(false);

    useEffect(() => {
        fetch('http://localhost/api-php/products')
            .then(response => response.json())
            .then(data => {
                if(data.length > 0) {
                    setIsData(true);
                }
            });
    }, []);

    return(
        <AdminTemplate>
            <div className="title" style={{display: 'flex', alignItems: 'center'}}>
                <h2>Dashboard &gt; Products</h2>
                <button>
                    <Link to={`/admin/products/new`}>+ Add New Product</Link>
                </button>
            </div>  
            { isData ? <ProductsTable /> : 
                <div className="row">
                    <div className="col">
                        <h3 style={{textAlign: 'center', fontWeight: 300 }}>There is no products but you can <Link style={{ textDecoration: 'underline', color: 'dodgerblue' }} to={`/admin/products/new`}>create a new</Link> one</h3>
                    </div> 
                </div> 
            }
        </AdminTemplate>
    );
}