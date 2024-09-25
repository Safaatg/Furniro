import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import stars from "../../../public/assets/stars.png";
import "../ProductDetails/ProductDetails.css";
import { useShoppingCart } from "../../Context/ShopContext";
import Footer from "../Footer/Footer";

const ProductDetails = ({id}) => {
    const {getItemsQuantity, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart();
    const quantity = getItemsQuantity(id);
  const apiProduct = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`${apiProduct}/ ${params.productId}`)
      .then((respons) => respons.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <div className="ProductDetailsContainer">
          <div className="ProductDetails">
      <div className="ProductDetails-left">
        <div className="ProductDetails-Img-list">
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
        </div>
        <div className="mainImg">
          <img src={product.image} />
        </div>
      </div>
      <div className="ProductDetails-right">
        <h1>{product.title}</h1>
        <h3>Rs. {product.price}</h3>
        <div className="Review">
          <img src={stars} />
          <div>|</div>
          <h3> 5 Customer Review</h3>
        </div>
        <p>{product.description}</p>
        <div className="ProductSize">
          <h3>Size</h3>
          <div className="sizes">
            <div className="larg">L</div>
            <div>XL</div>
            <div>XS</div>
          </div>
        </div>
        <div className="colores">
          <div className="purple"></div>
          <div className="black"></div>
          <div className="yellow"></div>
        </div>
        <div className="counter-button">
          <div className="counter">
            <button onClick={()=>decreaseCartQuantity(id)}>-</button>
            <span>{quantity}</span>
            <button onClick={()=>increaseCartQuantity(id)}>+</button>
          </div>
          <div className="ProductDetails-Btn">
            <button onClick={()=>increaseCartQuantity(id)}>Add To Cart</button>
          </div>
        </div>
        <div className="line"></div>

        <div className="Product-Dis">
          <div className="Dis">
            <h3>SKU</h3>
            <h3>: SS001</h3>
          </div>
          <div className="Dis">
            <h3>Category</h3>
            <h3>{product.category}</h3>
          </div>
          <div className="Dis">
            <h3>Tags</h3>
            <h3>: Sofa, Chair, Home, Shop</h3>
          </div>
          <div className="Dis">
            <h3>Share</h3>
            <h3>: SS001</h3>
          </div>
        </div>
      </div>
      
    </div>
    <hr />
    <div className="Description-prod">
      <h2>Description</h2>
      <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker
         takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
      <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar
         as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
