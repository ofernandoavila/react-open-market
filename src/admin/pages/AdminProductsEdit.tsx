import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductType } from "../../types/ProductTypes";
import { AdminTemplate } from "../components/AdminTemplate";
import { RegularForm } from "../components/Forms/AdminProductForm";


export function AdminProductsEdit() {
    

    return (
        <AdminTemplate>
            <div className="title" style={{display: 'flex', alignItems: 'center'}}>
                <h2>Dashboard &gt; Products &gt; Edit</h2>
            </div>
            <RegularForm type="edit" />
        </AdminTemplate>
    );
}