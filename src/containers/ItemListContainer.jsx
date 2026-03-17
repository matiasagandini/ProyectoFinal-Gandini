import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { getProducts, getProductsByCategory } from "../services/firebase/firestore";

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const request = categoryId ? getProductsByCategory(categoryId) : getProducts();

        request
            .then((res) => setItems(res))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
    <main className="container page-section">
        <h2 className="page-title">
            {categoryId ? `Categoría: ${categoryId}` : greeting}
        </h2>

        {loading ? (
            <p className="loader-text">Cargando productos...</p>
        ) : (
            <ItemList items={items} />
        )}
    </main>
);
};

export default ItemListContainer;
