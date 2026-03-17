import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
    const { removeItem } = useCart();

    return (
        <article
            style={{
                border: "1px solid #ddd",
                borderRadius: 12,
                padding: 16,
                marginBottom: 12,
            }}
        >
            <h3>{item.title}</h3>
            <p>Precio unitario: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </article>
    );
};

export default CartItem;