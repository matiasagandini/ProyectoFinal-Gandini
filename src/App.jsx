import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";

function App() {
    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Productos para tu bebé" />} />
                <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoría" />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<h2 style={{ padding: 16 }}>404 - Página no encontrada</h2>} />
                <Route path="/checkout" element={<CheckoutForm />} />
            </Routes>
        </>
    );
}

export default App;