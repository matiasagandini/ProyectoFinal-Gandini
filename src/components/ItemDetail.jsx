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
        <main className="detail-wrap">
            <section className="detail-card">
                <div>
                    <img
                        src={item.img}
                        alt={item.title}
                        className="detail-image"
                    />
                </div>

                <div>
                    <h2 className="detail-title">{item.title}</h2>
                    <p className="detail-text">{item.description}</p>
                    <p className="detail-price">${item.price}</p>
                    <p className="detail-stock">Stock disponible: {item.stock}</p>

                    <div className="detail-actions">
                        {item.stock === 0 ? (
                            <p>Sin stock</p>
                        ) : quantityAdded > 0 ? (
                            <Link to="/cart" className="link-button">
                                Ir al carrito
                            </Link>
                        ) : (
                            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ItemDetail;