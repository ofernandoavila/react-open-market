import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../../types/ProductTypes";

export function AdminHeader() {
    return(
        <header>
            <Link to={'/admin'}><h2>Painel de administração - v0.1</h2></Link>
        </header>
    );
}

export function AdminSideMenu() {
    return (
        <aside>
            <ul>
                <Link to={'/admin'}><li>Home</li></Link>
                <Link to={'/admin/products'}><li>Products</li></Link>
                <Link to={'/admin/category'}><li>Categorias</li></Link>
            </ul>
        </aside>
    );
}

type AdminContentType = {
    children: ReactNode;
}

export function AdminContent (props: AdminContentType) {
    return (
        <main>
            { props.children }
        </main>
    );
}

export function ProductsTable () {
    const [listProducts, setListProducts] = useState<Array<ProductType>>([]);

    useEffect(() => {
        fetch('http://localhost/api-php/products')
            .then(response => response.json())
            .then(data => setListProducts(data));
    }, []);
    
    return (
        <div className="list">
                <table className='checkout-overview'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Thumbnail</th>
                            <th>Name</th>
                            <th>in stock</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { listProducts.map( (produto: ProductType) => (
                            <tr key={ produto.id }>
                                <td>{produto.id}</td>
                                <td style={{width: 90}}>
                                    <Link to={`/product/${produto.name}`}>
                                        <img src={produto.thumbnail} style={{maxWidth: 90}} alt="" />
                                    </Link>
                                </td>
                                <td>{produto.name}</td>
                                <td>{ produto.inStock ? 'Avaible' : 'Unavaible' }</td>
                                <td>R$ {produto.price}</td>
                                <td><Link to={`/admin/products/edit/${produto.name}`}>Editar</Link></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
    );
}