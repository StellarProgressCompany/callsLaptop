import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/LOGO/LOGO-STELLAR-PNG-BLANC.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);      // estado menú móvil
    const [visible, setVisible] = useState(true);     // controla visibilidad del navbar
    const location = useLocation();
    const isHome = location.pathname === "/";
    const lastScrollY = useRef(0);

    // Maneja la visibilidad al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (currentY > lastScrollY.current && currentY > 50) {
                // scroll hacia abajo y hemos superado 50px
                setVisible(false);
            } else {
                // scroll hacia arriba
                setVisible(true);
            }
            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu  = () => setIsOpen(false);

    return (
        <nav
            className={`
        fixed top-0 left-0 w-full z-50
        bg-gray-800 bg-opacity-95 shadow-lg
        transform transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
        >
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <NavLink to="/">
                    <img
                        src={logo}
                        alt="Stellar Progress Logo"
                        className="h-12 w-auto cursor-pointer"
                    />
                </NavLink>

                {/* Enlaces escritorio */}
                <div className="hidden md:flex">
                    <ul className="flex space-x-6 font-thin text-white">
                        <li>
                            {isHome ? (
                                <Link
                                    to="hero"
                                    smooth
                                    duration={500}
                                    offset={-80}
                                    onClick={closeMenu}
                                    className="cursor-pointer hover:text-yellow-500 transition-colors"
                                >
                                    Inicio
                                </Link>
                            ) : (
                                <NavLink
                                    to="/"
                                    onClick={closeMenu}
                                    className="cursor-pointer hover:text-yellow-500 transition-colors"
                                >
                                    Inicio
                                </NavLink>
                            )}
                        </li>
                        <li>
                            {isHome ? (
                                <Link
                                    to="services"
                                    smooth
                                    duration={500}
                                    offset={-80}
                                    onClick={closeMenu}
                                    className="cursor-pointer hover:text-yellow-500 transition-colors"
                                >
                                    Servicios
                                </Link>
                            ) : (
                                <NavLink
                                    to="/"
                                    onClick={closeMenu}
                                    className="cursor-pointer hover:text-yellow-500 transition-colors"
                                >
                                    Servicios
                                </NavLink>
                            )}
                        </li>
                        <li>
                            {isHome ? (
                                <Link
                                    to="about"
                                    smooth
                                    duration={500}
                                    offset={-80}
                                    onClick={closeMenu}
                                    className="cursor-pointer hover:text-yellow-500 transition-colors"
                                >
                                    Quiénes somos
                                </Link>
                            ) : (
                                <NavLink
                                    to="/"
                                    onClick={closeMenu}
                                    className="cursor-pointer hover:text-yellow-500 transition-colors"
                                >
                                    Quiénes somos
                                </NavLink>
                            )}
                        </li>
                        <li>
                            {isHome ? (
                                <Link
                                    to="contact"
                                    smooth
                                    duration={500}
                                    offset={-80}
                                    onClick={closeMenu}
                                    className="cursor-pointer hover:text-yellow-500 transition-colors"
                                >
                                    Contacto
                                </Link>
                            ) : (
                                <NavLink
                                    to="/"
                                    onClick={closeMenu}
                                    className="cursor-pointer hover:text-yellow-500 transition-colors"
                                >
                                    Contacto
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </div>

                {/* Botón hamburguesa móvil */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl text-white">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Menú móvil desplegable */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 bg-opacity-90">
                    <ul className="flex flex-col space-y-4 font-thin p-4 text-white">
                        <li>
                            {isHome ? (
                                <Link
                                    to="hero"
                                    smooth
                                    duration={500}
                                    offset={-80}
                                    onClick={closeMenu}
                                    className="cursor-pointer hover:text-yellow-500 transition-colors"
                                >
                                    Inicio
                                </Link>
                            ) : (
                                <NavLink
                                    to="/"
                                    onClick={closeMenu}
                                    className="cursor-pointer hover:text-yellow-500 transition-colors"
                                >
                                    Inicio
                                </NavLink>
                            )}
                        </li>
                        <li>
                            {isHome ? (
                                <Link
                                    to="services"
                                    smooth
                                    duration={500}
                                    offset={-80}
                                    onClick={closeMenu}
                                    className="cursor-pointer hover:text-yellow-500 transition-colors"
                                >
                                    Servicios
                                </Link>
                            ) : (
                                <NavLink
                                    to="/"
                                    onClick={closeMenu}
                                    className="cursor-pointer hover:text-yellow-500 transition-colors"
                                >
                                    Servicios
                                </NavLink>
                            )}
                        </li>
                        <li>
                            {isHome ? (
                                <Link
                                    to="about"
                                    smooth
                                    duration={500}
                                    offset={-80}
                                    onClick={closeMenu}
                                    className="cursor-pointer hover:text-yellow-500 transition-colors"
                                >
                                    Quiénes somos
                                </Link>
                            ) : (
                                <NavLink
                                    to="/"
                                    onClick={closeMenu}
                                    className="cursor-pointer hover:text-yellow-500 transition-colors"
                                >
                                    Quiénes somos
                                </NavLink>
                            )}
                        </li>
                        <li>
                            {isHome ? (
                                <Link
                                    to="contact"
                                    smooth
                                    duration={500}
                                    offset={-80}
                                    onClick={closeMenu}
                                    className="cursor-pointer hover:text-yellow-500 transition-colors"
                                >
                                    Contacto
                                </Link>
                            ) : (
                                <NavLink
                                    to="/"
                                    onClick={closeMenu}
                                    className="cursor-pointer hover:text-yellow-500 transition-colors"
                                >
                                    Contacto
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
