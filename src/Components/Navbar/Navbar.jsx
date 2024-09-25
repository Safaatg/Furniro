import "../Navbar/Navbar.css"
import logo from "../../../public/assets/logo.png"
import carIcon from "../../../public/assets/ant-design_shopping-cart-outlined.png"
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../Context/ShopContext";
const Navbar = () => {
    const {openCart, cartQuantity} = useShoppingCart();
    return (
        <div className="navbar">
            <div className="nav-logo">
               <Link to='/'><img src={logo} /></Link> 
            </div>
            <ul className="nav-menu">
                <li><Link className="link" to='/'>Home</Link></li>
                <li><Link className="link" to='/shop'>Shop</Link></li>
                <li><Link className="link" to='/Contact'>Contact</Link></li>
            </ul>
            <div className="loginCart">
                <button className="carIcon" onClick={openCart}><img src={carIcon} /></button>
                <div className="cartCount">{cartQuantity}</div>
            </div>
        </div>
    );
}

export default Navbar;
