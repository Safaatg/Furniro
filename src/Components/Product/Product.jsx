import { Link } from "react-router-dom";
import "../Product/Product.css";

const Product = (props) => {
    const { product } = props;

    return (
        <div className="card">
            <Link className="noUnderline" to={`/product/${product.id}`}>
                <img src={product.image} className="" alt="Product" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                        {product.category}
                    </p>
                    <div className="productPrice">
                        <h2>Rp {product.price}</h2>
                    </div>
                </div>
                <div className="overlay">
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </Link>
        </div>
    );
}

export default Product;