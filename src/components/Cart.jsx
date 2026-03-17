import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
    const { cart, clearCart, getTotalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}>
                <h2 style={{ marginBottom: 16 }}>Tu carrito está vacío</h2>
                <Link
                    to="/"
                    style={{
                        padding: "10px 16px",
                        borderRadius: 12,
                        background: "#efe7ff",
                        color: "#6d28d9",
                        fontWeight: 600,
                    }}
                >
                    Ir a comprar
                </Link>
            </main>
        );
    }

    return (
        <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}>
            <h2 style={{ marginBottom: 20 }}>Carrito</h2>

            <div style={{ display: "grid", gap: 16 }}>
                {cart.map((prod) => (
                    <CartItem key={prod.id} item={prod} />
                ))}
            </div>

            <div
                style={{
                    marginTop: 24,
                    padding: 20,
                    borderRadius: 16,
                    background: "#ffffff",
                    border: "1px solid #eadff7",
                }}
            >
                <p
                    style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#6d28d9",
                        marginBottom: 16,
                    }}
                >
                    Total: ${getTotalPrice()}
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <button
                        onClick={clearCart}
                        style={{
                            padding: "10px 16px",
                            borderRadius: 12,
                            border: "none",
                            background: "#f3e8ff",
                            color: "#6d28d9",
                            fontWeight: 600,
                            cursor: "pointer",
                        }}
                    >
                        Vaciar carrito
                    </button>

                    <Link
                        to="/checkout"
                        style={{
                            padding: "10px 16px",
                            borderRadius: 12,
                            background: "#6d28d9",
                            color: "white",
                            fontWeight: 700,
                            textDecoration: "none",
                        }}
                    >
                        Finalizar compra
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Cart;