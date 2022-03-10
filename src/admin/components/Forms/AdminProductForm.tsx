import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductType } from "../../../types/ProductTypes";

type RegularFormType = {
    type: 'new' | 'edit';
}

type AdminProductsEditParamsType = {
    productName: string;
}

export function RegularForm(props: RegularFormType) {
    const [fileUploaded, setFile] = useState<any>(null);
    const [alertMsg, setAlertMsg] = useState<string>();
    const params = useParams<AdminProductsEditParamsType>();
    const [product, setProduct] = useState<ProductType>();

    const navigate = useNavigate();

    useEffect(() => {
        if(props.type == 'edit') {
            fetch('http://localhost/api-php/product?name=' + params.productName)
            .then(response => response.json())
            .then(data => setProduct(data));

            let frame = document.querySelector("#thumbnail-preview");
            document.querySelector('.upload-group')?.setAttribute('style', 'margin-left: 8px');
            document.querySelector('.upload-group button')!.innerHTML = `Change photo`;
            frame?.setAttribute('style', 'display: block');
            frame?.setAttribute('src', product?.thumbnail!);
        }
    }, []);
    
    function handleFormData(event: any) {
        event.preventDefault();
        
        let data = new FormData();

        if(fileUploaded != null) {
            data.append('file', fileUploaded![0]);
        }

        data.append('product', JSON.stringify(product));

        if(props.type == 'new') {
            fetch('http://localhost/api-php/products/create-new', {
                method: 'post',
                body: data
            }).then(response => response.json())
                .then(data => {
                    console.log(data);
                    if(data.msg) {
                        navigate('/admin/products');
                    } else {
                        setAlertMsg(data.msg);
                    }
                });
        } else {
            fetch('http://localhost/api-php/products/edit-product', {
                method: 'post',
                body: data
            })
            .then(response => response.json())
            .then(data => {
                if(data.msg) {
                    navigate('/admin/products');
                } else {
                    setAlertMsg(data.msg);
                }
            });
        }
    }

    function handleProductName(newName: string) {
        setProduct(prevState => {
            let state = Object.assign({}, prevState);
            state.name = newName;
            return state;
        });
    }

    function handleProductBrand(newBrand: string) {
        setProduct(prevState => {
            let state = Object.assign({}, prevState);
            state.brand = newBrand;
            return state;
        });
    }

    function handleProductPrice(newPrice: string) {
        setProduct(prevState => {
            let state = Object.assign({}, prevState);
            state.price = parseFloat(newPrice);
            return state;
        });
    }

    function handleProductInStock(newState: string) {
        console.log(newState);
        setProduct(prevState => {
            let state = Object.assign({}, prevState);
            state.inStock = (newState == '1');
            return state;
        });
    }

    function handleProductAmount(amount: number) {
        setProduct(prevState => {
            let state = Object.assign({}, prevState);
            state.amount = amount;
            return state;
        });
    }

    function handleFile(file: any) {
        setFile(file);

        const [tmpFile] = file;

        let frame = document.querySelector("#thumbnail-preview");
        document.querySelector('.upload-group')?.setAttribute('style', 'margin-left: 8px');
        document.querySelector('.upload-group button')!.innerHTML = `Change photo`;
        frame?.setAttribute('style', 'display: block');
        frame?.setAttribute('src', URL.createObjectURL(tmpFile));
    }
    return (
        <>
        <div className="row">
            <span>{alertMsg}</span>
        </div>
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col upload-session">
                        <img style={{ display: 'none' }} src={product?.thumbnail ? product.thumbnail : ''}  id="thumbnail-preview"/>
                        <div className="upload-group">
                            <button>Upload photo</button>
                            <input type="file" name="thumbnail" onChange={(value) => handleFile(value.target.files!)} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="input-group">
                            <label htmlFor="name-product">Product name:</label>
                            <input type="text" name="name-product" placeholder="Nome produto" onChange={value => handleProductName(value.target.value)} value={product?.name ?? ''}/>
                        </div>  
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="input-group">
                            <label htmlFor="price-product">Price:</label>
                            <input
                                min={0}
                                name="price-product"
                                type="number" 
                                placeholder="Price"
                                onChange={value => handleProductPrice(value.target.value)}
                                value={product?.price ?? 0}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group">
                            <label htmlFor="amount-price">Amount:</label>
                            <input type="number" min={0} name="amount-price" onChange={(value) => handleProductAmount(parseInt(value.target.value))} value={product?.amount}/>    
                        </div>    
                    </div>
                    <div className="col">
                        <div className="input-group">
                            <label htmlFor="instock-product">in stock</label>
                            <select name="instock-product" defaultValue={0} value={product?.inStock ? 1 : 0 } onChange={value => handleProductInStock(value.target.value)}>
                                <option value="1">Sim</option>
                                <option value="0">Não</option>
                            </select> 
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="input-group">
                            <label htmlFor="brand-product">Brand name:</label>
                            <input type="text" name="brand-product" placeholder="Brand produto" onChange={value => handleProductBrand(value.target.value)} value={product?.brand ?? ''}/>
                        </div>  
                    </div>
                </div>  
            </div>
            <div className="col"></div>
        </div>
        <button onClick={event => handleFormData(event)}>{ props.type == 'new' ? 'Create new product' : 'Save changes' }</button>
        </>
    );
}