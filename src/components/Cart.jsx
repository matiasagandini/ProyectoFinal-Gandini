import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
    const { cart, clearCart, getTotalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <main style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
                <h2>Tu carrito está vacío</h2>
                <Link to="/">Ir a comprar</Link>
            </main>
        );
    }

    return (
        <main style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
            <h2>Carrito</h2>

            {cart.map((prod) => (
                <CartItem key={prod.id} item={prod} />
            ))}

            <h3>Total: ${getTotalPrice()}</h3>

            <div style={{ display: "flex", gap: 12 }}>
                <button onClick={clearCart}>Vaciar carrito</button>
                <Link to="/checkout">Finalizar compra</Link>
            </div>
        </main>
    );
};

export default Cart;