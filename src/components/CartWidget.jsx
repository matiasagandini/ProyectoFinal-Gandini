import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
    const { getTotalQuantity } = useCart();
    const totalQuantity = getTotalQuantity();

    return (
        <Link
            to="/cart"
            style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
            }}
        >
            <span role="img" aria-label="carrito">🛒</span>
            <span>{totalQuantity}</span>
        </Link>
    );
};

export default CartWidget;