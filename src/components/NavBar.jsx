import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header className="navbar">
            <nav
                className="navbar-inner"
                style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    padding: "18px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 20,
                }}
            >
                {/* LOGO */}
                <Link
                    to="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        textDecoration: "none",
                    }}
                >
                    <img
                        src="/logo.png"
                        alt="Rincón del Bebé"
                        style={{
                            height: 45,
                            objectFit: "contain",
                        }}
                    />
                </Link>

                {/* LINKS */}
                <div
                    style={{
                        display: "flex",
                        gap: 10,
                        flexWrap: "wrap",
                        alignItems: "center",
                    }}
                >
                    <NavLink
                        to="/category/panales"
                        style={({ isActive }) => ({
                            padding: "8px 14px",
                            borderRadius: 999,
                            color: isActive ? "#6d28d9" : "#4b4453",
                            background: isActive ? "#efe7ff" : "transparent",
                            fontWeight: isActive ? 700 : 500,
                            textDecoration: "none",
                        })}
                    >
                        Pañales
                    </NavLink>

                    <NavLink
                        to="/category/higiene"
                        style={({ isActive }) => ({
                            padding: "8px 14px",
                            borderRadius: 999,
                            color: isActive ? "#6d28d9" : "#4b4453",
                            background: isActive ? "#efe7ff" : "transparent",
                            fontWeight: isActive ? 700 : 500,
                            textDecoration: "none",
                        })}
                    >
                        Higiene
                    </NavLink>

                    <NavLink
                        to="/category/alimentacion"
                        style={({ isActive }) => ({
                            padding: "8px 14px",
                            borderRadius: 999,
                            color: isActive ? "#6d28d9" : "#4b4453",
                            background: isActive ? "#efe7ff" : "transparent",
                            fontWeight: isActive ? 700 : 500,
                            textDecoration: "none",
                        })}
                    >
                        Alimentación
                    </NavLink>
                </div>

                {/* CARRITO */}
                <CartWidget />
            </nav>
        </header>
    );
};

export default NavBar;