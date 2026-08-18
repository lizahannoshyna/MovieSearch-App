import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const getLinkClass = ({ isActive }) => 
        `text-[#39273f] font-medium transition-colors hover:text-[#7ea928] ${
            isActive ? "text-[#7ea928] underline" : ""
        }`;

    return (
        <section className="py-4 px-8 shadow-sm">
            <nav className="flex gap-6">
                <NavLink to="/" className={getLinkClass}>
                    Home
                </NavLink>
                <NavLink to="/movies" className={getLinkClass}>
                    Movies
                </NavLink>
            </nav>
        </section>
    );
};

export default Header;