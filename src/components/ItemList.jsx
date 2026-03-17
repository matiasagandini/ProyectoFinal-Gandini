import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
    if (items.length === 0) return <p>No hay productos en esta categoría.</p>;

    return (
        <div className="products-grid">
            {items.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;