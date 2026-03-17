import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ item }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useCart();

    const onAdd = (qty) => {
        setQuantityAdded(qty);
        addItem(item, qty);
    };

    return (
        <main style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>
            <h2 style={{ marginTop: 0 }}>{item.title}</h2>

            <img
                src={item.img}
                alt={item.title}
                style={{ width: "100%", maxWidth: 520, borderRadius: 12, display: "block" }}
            />

            <p style={{ marginTop: 12 }}>{item.description}</p>
            <p>
                <b>Precio:</b> ${item.price}
            </p>
            <p>
                <b>Stock:</b> {item.stock}
            </p>

            {item.stock === 0 ? (
                <p>Sin stock</p>
            ) : quantityAdded > 0 ? (
                <Link to="/cart">Ir al carrito</Link>
            ) : (
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            )}
        </main>
    );
};

export default ItemDetail;