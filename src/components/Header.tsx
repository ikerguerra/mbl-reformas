'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

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
                        <svg className="navbar-icon">
                            {/* <use xlink:href="#navbar-icon"></use> */}
                        </svg>
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
                                    <Link className="nav-link light text-uppercase p-0" href="/">Inicio</Link>
                                </li>
                                <li className="nav-item dropdown me-5">
                                    <Link className="nav-link text-uppercase dropdown-toggle py-0 pe-0 "
                                        data-bs-toggle="dropdown" href="#" role="button"
                                        aria-expanded="false">Servicios</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link href="blog.html" className="dropdown-item text-uppercase ">Integrales</Link>
                                        </li>
                                        <li><Link href="blog.html" className="dropdown-item text-uppercase ">Baños</Link></li>
                                        <li><Link href="blog.html" className="dropdown-item text-uppercase ">Cocinas</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item me-5">
                                    <Link className="nav-link light text-uppercase p-0" href="/nuestros-proyectos">Proyectos</Link>
                                </li>
                                <li className="nav-item me-5">
                                    <Link className="nav-link light text-uppercase p-0" href="/nosotros">Nosotros</Link>
                                </li>
                                <li className="nav-item me-5">
                                    <Link className="nav-link light text-uppercase p-0" href="/contacto">Contacto</Link>
                                </li>
                            </ul>
                            <div className="social-links d-flex mt-5 mt-lg-0 align-items-center justify-content-end">
                                <ul className="navbar-nav list-unstyled align-items-center justify-content-end">
                                    <li className="pe-4">
                                        <Link href="#" className="light">
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </Link>
                                    </li>
                                    <li className="pe-4">
                                        <Link href="#" className="light">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </Link>
                                    </li>
                                    <li className="pe-4">
                                        <Link href="#" className="light">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </Link>
                                    </li>
                                    <li className="pe-4">
                                        <Link href="#" className="light">
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </Link>
                                    </li>
                                    <li className="pe-4">
                                        <Link href="#" className="light">
                                            <FontAwesomeIcon icon={faYoutube} />
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