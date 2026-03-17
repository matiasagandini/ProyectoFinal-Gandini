import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header className="navbar">
            <nav className="navbar-inner">
                <Link to="/" className="brand-box">
                    <h1 className="brand-title">Rincon del bebe</h1>
                    <span className="brand-subtitle">Cuidado, higiene y alimentación</span>
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