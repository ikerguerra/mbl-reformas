import Link from "next/link";

export default function Footer() {
    return (
        <footer id="footer" className="overflow-hidden padding-large bg-dark">
            <div className="container">
                <div className="row d-flex flex-wrap justify-content-between">
                    <div className="col-lg-3 col-md-6 col-sm-6 pb-3">
                        <div className="footer-menu">
                            <h3 className="banner-title light text-uppercase fw-bold color-dark">M<span className="primary-color">B</span>L</h3>
                            <p className="light">Calidad, compromiso y sostenibilidad</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6 pb-3">
                        <div className="footer-menu">
                            <ul className="menu-list list-unstyled">
                                <li className="pb-2">
                                    <Link href="/servicios" className="light">Servicios</Link>
                                </li>
                                <li className="pb-2">
                                    <Link href="/nosotros" className="light">Nosotros</Link>
                                </li>
                                <li className="pb-2">
                                    <Link href="/nuestros-proyectos" className="light">Proyectos</Link>
                                </li>
                                <li className="pb-2">
                                    <Link href="/contacto" className="light">Contacto</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 pb-3">
                        <div className="footer-menu">
                            <ul className="menu-list list-unstyled">
                                <li className="pb-2">
                                    <Link href="/reformas-integrales" className="light">Integrales</Link>
                                </li>
                                <li className="pb-2">
                                    <Link href="/reformas-banos" className="light">Baños</Link>
                                </li>
                                <li className="pb-2">
                                    <Link href="/reformas-cocinas" className="light">Cocinas</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 pb-3">
                        <div className="footer-menu">
                            <ul className="menu-list list-unstyled">
                                <li className="pb-2 light">Gijón, Principado de Asturias</li>
                                <li className="pb-2 light">+34 666 555 444 </li>
                                <li className="pb-2">
                                    <Link href="mailto:info@construccionesmbl.es" className="light">info@construccionesmbl.es</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}