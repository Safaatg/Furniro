import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../../Context/ShopContext";
import { useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";


const ShoppingCart = ({isOpen}) => {
    const { cartItems, closeCart } = useShoppingCart();
    const apiProduct = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(apiProduct)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    // العثور على المنتجات في عربة التسوق مع البيانات من الـ API
    const cartProducts = cartItems.map(item => 
        products.find(product => product.id === item.id)
    );

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cartProducts.map((product) => (
                    product && (
                        <CartItem key={product.id} product={product} />
                    )
                ))}
                <CartItem></CartItem>
            </Offcanvas.Body>
           
        </Offcanvas>
    );
};
export default ShoppingCart;