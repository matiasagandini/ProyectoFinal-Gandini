import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
    const { getTotalQuantity } = useCart();
    const totalQuantity = getTotalQuantity();

    return (
        <Link to="/cart" className="cart-widget">
            <span role="img" aria-label="carrito">🛒</span>
            <span>{totalQuantity}</span>
        </Link>
    );
};

export default CartWidget;