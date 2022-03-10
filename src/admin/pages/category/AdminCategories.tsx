import { Link } from "react-router-dom";
import { AdminTemplate } from "../../components/AdminTemplate";

export function AdminCategories () {
    return (
        <AdminTemplate>
            <div className="title" style={{display: 'flex', alignItems: 'center'}}>
                <h2>Dashboard &gt; Products</h2>
                <button>
                    <Link to={`/admin/products/new`}>+ Add New Product</Link>
                </button>
            </div> 
        </AdminTemplate>
    );
}