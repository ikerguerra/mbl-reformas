import Link from "next/link";
import LogoMBL from "./LogoMBL";

export default function Footer() {
    return (
        <footer id="footer" className="overflow-hidden padding-large bg-dark">
            <div className="container">
                <div className="row d-flex flex-wrap justify-content-between">
                    <div className="col-lg-3 col-md-6 col-sm-6 pb-3">
                        <div className="footer-menu">
                            <LogoMBL />
                            <p className="light">Calidad, compromiso y sostenibilidad</p>
                            {/* Legal links */}
                            <ul className="menu-list list-unstyled mt-4">
                                <li className="pb-2">
                                    <Link href="/aviso-legal" className="light small">Aviso Legal</Link>
                                </li>
                                <li className="pb-2">
                                    <Link href="/politica-privacidad" className="light small">Política de Privacidad</Link>
                                </li>
                                <li className="pb-2">
                                    <Link href="/politica-cookies" className="light small">Política de Cookies</Link>
                                </li>
                            </ul>
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
                                <li className="pb-2 light">Av. Argentina 132 (Cristasa of.221), Gijón, Asturias</li>
                                <li className="pb-2 light">684 675 898</li>
                                <li className="pb-2">
                                    <Link href="mailto:info@construccionesmbl.es" className="light">info@construccionesmbl.com</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}