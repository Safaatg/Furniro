
import ProductList from '../Components/ProductList/ProductList';
import Feature from "../Components/Feature/Feature";
import Footer from "../Components/Footer/Footer"; 
import bannerShop from "../../public/assets/Group 78.png"
const Shop = () => {
    return (
        <div>
            <img src={bannerShop} className='contactImg' alt="" />
        <ProductList></ProductList>
        <Feature />
        <Footer />
        
        </div>
    );
}

export default Shop;
