import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import logo from "../assets/LOGO/LOGO-STELLAR-PNG-BLANC.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    const controls = useAnimation();          // Controla las animaciones del <motion.nav>
    const lastScrollY = useRef(0);            // Posición de scroll anterior

    /* ---------- Animación inicial al montar el componente ---------- */
    useEffect(() => {
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1.9 },
        });
    }, [controls]);

    /* ---------- Mostrar / ocultar según dirección del scroll ---------- */
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            // Mantener visible si el menú móvil está abierto
            if (isOpen) {
                controls.start({ y: 0 });
                lastScrollY.current = currentY;
                return;
            }

            if (currentY <= 0) {
                // Parte superior de la página
                controls.start({ y: 0, transition: { duration: 0.3 } });
            } else if (currentY > lastScrollY.current) {
                // Desplazándose hacia abajo
                controls.start({ y: "-100%", transition: { duration: 0.3 } });
            } else {
                // Desplazándose hacia arriba
                controls.start({ y: 0, transition: { duration: 0.3 } });
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls, isOpen]);

    /* ---------- Funciones de menú móvil ---------- */
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu  = () => setIsOpen(false);

    /* ---------- Render ---------- */
    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            className="fixed top-0 left-0 w-full z-50 bg-gray-800 bg-opacity-95 shadow-lg"
        >
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo ----------------------------------------------------- */}
                <NavLink to="/">
                    <img
                        src={logo}
                        alt="Stellar Progress Logo"
                        className="h-12 w-auto cursor-pointer"
                    />
                </NavLink>

                {/* Enlaces de escritorio ----------------------------------- */}
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

                {/* Botón hamburguesa móvil --------------------------------- */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl text-white">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Menú móvil desplegable ------------------------------------ */}
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
        </motion.nav>
    );
}

export default Navbar;
