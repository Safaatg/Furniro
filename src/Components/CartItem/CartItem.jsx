import { Stack } from "react-bootstrap";
import FormatCurrency from "../FormatCurrency/FormatCurrency"
import { useShoppingCart } from "../../Context/ShopContext";
const CartItem = ({ product, quantity , id}) => {
    const {removeFromCart} = useShoppingCart()
    return (
      <div>
        {product ? (
          <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
          <img
            src={product.imgUrl}
            alt="cart-img"
            style={{ width: "125px", height: "75px", objectFit: "cover" }}
          />
          <div className="me-auto">
            <div>
              {product.name}{" "}
              {quantity > 1 && (
                <span className="text-muted" style={{ fontSize: "0.65rem" }}>
                  x{quantity}
                </span>
              )}
            </div>
            <div className="text-muted" style={{ fontSize: "0.75rem" }}>
              {FormatCurrency(product.price)}
            </div>
          </div>
          <div>{FormatCurrency(product.price * quantity)}</div>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => removeFromCart(product.id)}
          >
            &times;
          </Button>
        </Stack>
        ) : (
          <p>No product available</p>
        )}
      </div>
    );
  };
  
  export default CartItem;