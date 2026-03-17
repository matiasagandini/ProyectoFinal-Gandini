import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    padding: "6px 10px",
    borderRadius: 10,
    color: "inherit",
    background: isActive ? "#eee" : "transparent",
});

const NavBar = () => {
    return (
        <header style={{ borderBottom: "1px solid #e8e8e8" }}>
            <nav
                style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    padding: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                }}
            >
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <h1 style={{ margin: 0, fontSize: 20 }}>Rincon del bebe</h1>
                </Link>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <NavLink to="/category/panales" style={linkStyle}>
                        Pañales
                    </NavLink>

                    <NavLink to="/category/higiene" style={linkStyle}>
                        Higiene
                    </NavLink>

                    <NavLink to="/category/alimentacion" style={linkStyle}>
                        Alimentación
                    </NavLink>
                </div>

                <CartWidget />
            </nav>
        </header>
    );
};

export default NavBar;
