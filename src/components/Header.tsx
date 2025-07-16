'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {

    const [scrollTop, setScrollTop] = useState(0);
    const [isScrolling, setIsScrolling] = useState('');
    const [isScrollingUp, setIsScrollingUp] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;

            if (currentScroll > 80) {
                if (currentScroll > scrollTop) {
                    setIsScrolling('scrolling');
                    setIsScrollingUp('');
                } else {
                    setIsScrollingUp('up');
                }
            } else {
                setIsScrolling('');
                setIsScrollingUp('');
            }

            setScrollTop(currentScroll);
        })

    }, [scrollTop])

    // Función para manejar el cierre del offcanvas al hacer clic en un enlace
    const handleLinkClick = useCallback(() => {
        const offcanvasEl = document.getElementById("bdNavbar");

        if (offcanvasEl) {
            const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasEl);
            if (bsOffcanvas) bsOffcanvas.hide();
        }
    }, []);

    return (
        <header id="header" className="site-header position-absolute">
            <nav id="header-nav" className={`navbar navbar-expand-lg p-3 container-fluid position-fixed smart-scroll ${isScrolling} ${isScrollingUp}`}>
                <div className="container-lg">
                    <Link className="navbar-brand" href="/">
                        <h3 className="banner-title light text-uppercase fw-bold">M<span className="primary-color">B</span>L</h3>
                    </Link>
                    <button className="navbar-toggler d-flex d-lg-none order-3 p-2 shadow-none" type="button"
                        data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} className="text-white" size="xl" />
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="bdNavbar"
                        aria-labelledby="bdNavbarOffcanvasLabel">
                        <div className="offcanvas-header px-4 pb-0">
                            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas"
                                aria-label="Close" data-bs-target="#bdNavbar"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul id="navbar"
                                className="navbar-nav text-uppercase justify-content-lg-center justify-content-md-end align-items-center flex-grow-1  text-hover">
                                <li className="nav-item me-5">
                                    <Link className="nav-link light text-uppercase p-0" href="/" onClick={handleLinkClick}>Inicio</Link>
                                </li>
                                <li className="nav-item dropdown me-5">
                                    <Link className="nav-link text-uppercase dropdown-toggle py-0 pe-0 "
                                        data-bs-toggle="dropdown" href="#" role="button"
                                        aria-expanded="false">Servicios<FontAwesomeIcon icon={faAngleDown} className="mx-1"/></Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link href="/reformas-integrales" className="dropdown-item text-uppercase " onClick={handleLinkClick}>Integrales</Link>
                                        </li>
                                        <li>
                                            <Link href="/reformas-banos" className="dropdown-item text-uppercase " onClick={handleLinkClick}>Baños</Link>
                                        </li>
                                        <li>
                                            <Link href="/reformas-cocinas" className="dropdown-item text-uppercase " onClick={handleLinkClick}>Cocinas</Link>
                                        </li>
                                        <li>
                                            <Link href="/servicios" className="dropdown-item text-uppercase " onClick={handleLinkClick}>Todos los servicios</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item me-5">
                                    <Link className="nav-link light text-uppercase p-0" href="/nuestros-proyectos" onClick={handleLinkClick}>Proyectos</Link>
                                </li>
                                <li className="nav-item me-5">
                                    <Link className="nav-link light text-uppercase p-0" href="/nosotros" onClick={handleLinkClick}>Nosotros</Link>
                                </li>
                                <li className="nav-item me-5">
                                    <Link className="nav-link light text-uppercase p-0" href="/contacto" onClick={handleLinkClick}>Contacto</Link>
                                </li>
                            </ul>
                            <div className="social-links d-flex mt-5 mt-lg-0 align-items-center justify-content-end">
                                <ul className="navbar-nav list-unstyled align-items-center justify-content-end">
                                    <li className="pe-4">
                                        <Link href="#" className="light">
                                            <FontAwesomeIcon icon={faFacebook} size="xl"/>
                                        </Link>
                                    </li>
                                    <li className="pe-4">
                                        <Link href="#" className="light">
                                            <FontAwesomeIcon icon={faInstagram} size="xl"/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}