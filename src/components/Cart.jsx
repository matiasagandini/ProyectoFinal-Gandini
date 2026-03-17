import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
    const { cart, clearCart, getTotalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <main className="cart-page">
                <h2 className="cart-title">Tu carrito está vacío</h2>
                <Link to="/" className="secondary-link">Ir a comprar</Link>
            </main>
        );
    }

    return (
        <main className="cart-page">
            <h2 className="cart-title">Carrito</h2>

            <div className="cart-list">
                {cart.map((prod) => (
                    <CartItem key={prod.id} item={prod} />
                ))}
            </div>

            <section className="cart-summary">
                <p className="cart-total">Total: ${getTotalPrice()}</p>

                <div className="cart-buttons">
                    <button className="danger-btn" onClick={clearCart}>
                        Vaciar carrito
                    </button>

                    <Link to="/checkout" className="secondary-link">
                        Finalizar compra
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Cart;