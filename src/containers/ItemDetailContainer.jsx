import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/firebase/firestore";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        getProductById(itemId)
            .then((res) => setItem(res))
            .finally(() => setLoading(false));
    }, [itemId]);

    if (loading) return <p style={{ padding: 16 }}>Cargando...</p>;
    if (!item) return <h2 style={{ padding: 16 }}>Producto no encontrado</h2>;

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
