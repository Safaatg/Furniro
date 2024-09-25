import  { useEffect, useState } from "react";
import Product from "../Product/Product";
import "../ProductList/ProductList.css"
import Header from "../Header/Header";

const ProductList = () => {
    const apiProduct = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(apiProduct)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="ProductList">
            
            <div className="ProductListContainer">
                <div className="row-Product">
                {products.map((product) => (
                    <div className="" key={product.id}>
                        <Product product={product} />
                    </div>
                ))}
                </div>

            </div>
        </div>
    );
};

export default ProductList;