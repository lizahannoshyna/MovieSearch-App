import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
    return (
        <section className="header">
            <nav>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    Home
                </NavLink>
                <NavLink to="/movies" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    Movies
                </NavLink>
            </nav>
        </section>
    )
}

export default Header;