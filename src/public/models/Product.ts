import { ApiRoutes } from '../config/ApiRoutes';

export function GetProducts() {
    fetch(ApiRoutes.getProducts)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
}