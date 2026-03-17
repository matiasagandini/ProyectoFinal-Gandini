import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const dec = () => setCount((c) => Math.max(initial, c - 1));
    const inc = () => setCount((c) => Math.min(stock, c + 1));

    return (
        <div className="count-box">
            <button className="qty-btn" onClick={dec}>-</button>
            <span className="qty-number">{count}</span>
            <button className="qty-btn" onClick={inc}>+</button>

            <button
                className="primary-btn"
                onClick={() => onAdd(count)}
                disabled={stock === 0}
            >
                Agregar
            </button>
        </div>
    );
};

export default ItemCount;