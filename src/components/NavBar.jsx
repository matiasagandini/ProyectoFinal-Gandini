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
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <span
                        style={{
                            fontSize: 26,
                            fontWeight: 800,
                            letterSpacing: "-0.03em",
                            color: "#241b2f",
                        }}
                    >
                        Rincón del Bebé
                    </span>
                    <span
                        style={{
                            fontSize: 13,
                            color: "#7b7288",
                        }}
                    >
                        Tienda online
                    </span>
                </Link>

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
                            textDecoration: "none",
                            padding: "8px 14px",
                            borderRadius: 999,
                            color: isActive ? "#6d28d9" : "#4b4453",
                            background: isActive ? "#efe7ff" : "transparent",
                            fontWeight: isActive ? 700 : 500,
                        })}
                    >
                        Pañales
                    </NavLink>

                    <NavLink
                        to="/category/higiene"
                        style={({ isActive }) => ({
                            textDecoration: "none",
                            padding: "8px 14px",
                            borderRadius: 999,
                            color: isActive ? "#6d28d9" : "#4b4453",
                            background: isActive ? "#efe7ff" : "transparent",
                            fontWeight: isActive ? 700 : 500,
                        })}
                    >
                        Higiene
                    </NavLink>

                    <NavLink
                        to="/category/alimentacion"
                        style={({ isActive }) => ({
                            textDecoration: "none",
                            padding: "8px 14px",
                            borderRadius: 999,
                            color: isActive ? "#6d28d9" : "#4b4453",
                            background: isActive ? "#efe7ff" : "transparent",
                            fontWeight: isActive ? 700 : 500,
                        })}
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