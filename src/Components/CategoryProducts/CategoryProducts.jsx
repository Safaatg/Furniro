import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import "../CategoryProducts/CategoryProducts.css"
import Footer from '../Footer/Footer';

const CategoryProducts = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            });
    }, [category]);

    return (
<>
<div className="Products">
    
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
        <hr />
        <Footer></Footer></>
    );
}

export default CategoryProducts;