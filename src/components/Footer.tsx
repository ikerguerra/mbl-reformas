import Link from "next/link";

export default function Footer() {
    return (
        <footer id="footer" className="overflow-hidden padding-large bg-dark">
            <div className="container">
                <div className="row d-flex flex-wrap justify-content-between">
                    <div className="col-lg-3 col-md-6 col-sm-6 pb-3">
                        <div className="footer-menu">
                            <h3 className="banner-title light text-uppercase fw-bold color-dark">M<span className="primary-color">B</span>L</h3>
                            <p className="light">Vehicula at eget a arcu neque, ultricies liquet tempus.</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6 pb-3">
                        <div className="footer-menu">
                            <ul className="menu-list list-unstyled">
                                <li className="pb-2">
                                    <Link href="#about" className="light">About</Link>
                                </li>
                                <li className="pb-2">
                                    <Link href="#" className="light">Terms &amp; Conditions</Link>
                                </li>
                                <li className="pb-2">
                                    <Link href="#" className="light">Privacy Policy</Link>
                                </li>
                                <li className="pb-2">
                                    <Link href="#" className="light">Career</Link>
                                </li>
                                <li className="pb-2">
                                    <Link href="#" className="light">Contact</Link>
                                </li>
                                <li className="pb-2">
                                    <Link href="#" className="light">Help</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 pb-3">
                        <div className="footer-menu">
                            <ul className="menu-list list-unstyled">
                                <li className="pb-2">
                                    <Link href="#about" className="light">Quick Links</Link>
                                </li>
                                <li className="pb-2">
                                    <Link href="#" className="light">Newsletter</Link>
                                </li>
                                <li className="pb-2">
                                    <Link href="#" className="light">Articles</Link>
                                </li>
                                <li className="pb-2">
                                    <Link href="#" className="light">Location</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 pb-3">
                        <div className="footer-menu">
                            <ul className="menu-list list-unstyled">
                                <li className="pb-2 light">163 Elm Drive, New York City United States </li>
                                <li className="pb-2 light">(+089) 234-516-6123 </li>
                                <li className="pb-2">
                                    <Link href="mailto:" className="nav-link light">info@yourinfo.com</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}