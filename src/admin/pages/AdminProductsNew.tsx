import { useEffect, useState } from "react";
import { ProductType } from "../../types/ProductTypes";
import { AdminTemplate } from "../components/AdminTemplate";
import { RegularForm } from "../components/Forms/AdminProductForm";

export function AdminProductsNew() {
    return(
        <AdminTemplate>
            <div className="title" style={{display: 'flex', alignItems: 'center'}}>
                <h2>Dashboard &gt; Products &gt; New Product</h2>
            </div>
            <RegularForm type="new" />
        </AdminTemplate>
    );
}   