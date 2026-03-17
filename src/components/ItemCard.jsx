import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
    return (
        <article className="card">
            <img
                src={item.img}
                alt={item.title}
                className="card-image"
            />

            <h3 className="card-title">{item.title}</h3>
            <p className="price">${item.price}</p>

            <Link to={`/item/${item.id}`} className="link-button">
                Ver detalle
            </Link>
        </article>
    );
};

export default ItemCard;