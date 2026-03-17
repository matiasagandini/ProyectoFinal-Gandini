import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
    const { getTotalQuantity } = useCart();
    const totalQuantity = getTotalQuantity();

    return (
        <Link
            to="/cart"
            className="cart-widget"
            style={{
                fontWeight: 600,
                background: "#efe7ff",
                color: "#6d28d9",
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 14px",
                borderRadius: 999,
            }}
        >
            <span style={{ fontSize: 18 }}>🛍️</span>
            <span>{totalQuantity}</span>
        </Link>
    );
};

export default CartWidget;