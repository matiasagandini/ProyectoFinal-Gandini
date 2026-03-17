import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header className="navbar">
            <nav className="navbar-inner">
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <h1 style={{ margin: 0, fontSize: 20 }}>Rincon del bebe</h1>
                </Link>

                <div className="nav-links">
                    <NavLink
                        to="/category/panales"
                        className={({ isActive }) => `nav-pill ${isActive ? "active" : ""}`}
                    >
                        Pañales
                    </NavLink>

                    <NavLink
                        to="/category/higiene"
                        className={({ isActive }) => `nav-pill ${isActive ? "active" : ""}`}
                    >
                        Higiene
                    </NavLink>

                    <NavLink
                        to="/category/alimentacion"
                        className={({ isActive }) => `nav-pill ${isActive ? "active" : ""}`}
                    >
                        Alimentación
                    </NavLink>
                </div>

                <CartWidget />
            </nav>
        </header>
    );
};

export default NavBar;