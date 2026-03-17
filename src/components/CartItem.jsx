import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
    const { removeItem } = useCart();

    return (
        <article className="cart-item">
            <h3 className="cart-item-title">{item.title}</h3>
            <p className="cart-item-text">Precio unitario: ${item.price}</p>
            <p className="cart-item-text">Cantidad: {item.quantity}</p>
            <p className="cart-item-text">Subtotal: ${item.price * item.quantity}</p>
            <button className="danger-btn" onClick={() => removeItem(item.id)}>
                Eliminar
            </button>
        </article>
    );
};

export default CartItem;