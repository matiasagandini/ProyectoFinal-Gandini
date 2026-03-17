import { useState } from "react";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/firebase/firestore";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
    const { cart, getTotalPrice, clearCart } = useCart();

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            setError("No podés finalizar la compra con el carrito vacío.");
            return;
        }

        setError("");
        setLoading(true);

        const order = {
            buyer: {
                name: form.name,
                phone: form.phone,
                email: form.email,
            },
            items: cart.map((item) => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
            })),
            total: getTotalPrice(),
            date: new Date(),
        };

        try {
            const id = await createOrder(order);
            setOrderId(id);
            clearCart();
        } catch (err) {
            console.error(err);
            setError("Hubo un error al generar la orden. Intentá de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    if (orderId) {
        return (
            <main style={{ maxWidth: 800, margin: "0 auto", padding: "24px 16px" }}>
                <h2>Compra realizada con éxito 🎉</h2>
                <p>Tu orden fue generada correctamente.</p>
                <p>
                    <b>ID de la orden:</b> {orderId}
                </p>

                <Link to="/" style={{ textDecoration: "none" }}>
                    Volver al catálogo
                </Link>
            </main>
        );
    }

    if (cart.length === 0) {
        return (
            <main style={{ maxWidth: 800, margin: "0 auto", padding: "24px 16px" }}>
                <h2>Checkout</h2>
                <p>Tu carrito está vacío.</p>
                <Link to="/" style={{ textDecoration: "none" }}>
                    Ir a comprar
                </Link>
            </main>
        );
    }

    return (
        <main style={{ maxWidth: 800, margin: "0 auto", padding: "24px 16px" }}>
            <h2>Finalizar compra</h2>

            <div style={{ marginBottom: 20 }}>
                <p>
                    <b>Total a pagar:</b> ${getTotalPrice()}
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    maxWidth: 420,
                }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre completo"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={{ padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    style={{ padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={{ padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
                />

                {error && (
                    <p style={{ margin: 0, color: "red" }}>
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        padding: 12,
                        border: "none",
                        borderRadius: 8,
                        cursor: loading ? "not-allowed" : "pointer",
                    }}
                >
                    {loading ? "Generando orden..." : "Confirmar compra"}
                </button>
            </form>
        </main>
    );
};

export default CheckoutForm;