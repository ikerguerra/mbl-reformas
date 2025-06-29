import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faClock, faEnvelope, faLocationDot, faMobileScreenButton, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Contacto() {
    return (
        <>
            <section className="contact-us-wrap py-5 mt-5">
                <div className="container aos-init aos-animate" data-aos="fade-up">
                    <div className="row">
                        <div className="contact-info col-md-6">
                            <h3>Información de contacto</h3>
                            <div className="page-content">
                                <div className="col-md-6">
                                    <div className="content-box my-4">
                                        <ul className="list-unstyled mb-0">
                                            <li className="d-flex align-items-center mb-4">
                                                <span className="d-flex align-items-center justify-content-center rounded-circle bg-light p-2" style={{ width: 48, height: 48, minWidth: 48 }}>
                                                    <FontAwesomeIcon icon={faLocationDot} size="2xl" />
                                                </span>
                                                <span className="ms-3">Gijón, Principado de Asturias, España</span>
                                            </li>
                                            <li className="d-flex align-items-center mb-4">
                                                <span className="d-flex align-items-center justify-content-center rounded-circle bg-light p-2" style={{ width: 48, height: 48, minWidth: 48 }}>
                                                    <FontAwesomeIcon icon={faPhone} size="2xl" />
                                                </span>
                                                <a href="tel:+123987321" className="ms-3 text-decoration-none text-dark">+123 987 321</a>
                                            </li>
                                            <li className="d-flex align-items-center mb-4">
                                                <span className="d-flex align-items-center justify-content-center rounded-circle bg-light p-2" style={{ width: 48, height: 48, minWidth: 48 }}>
                                                    <FontAwesomeIcon icon={faMobileScreenButton} size="2xl" />
                                                </span>
                                                <a href="tel:+123123654" className="ms-3 text-decoration-none text-dark">+123 123 654</a>
                                            </li>
                                            <li className="d-flex align-items-center mb-4">
                                                <span className="d-flex align-items-center justify-content-center rounded-circle bg-light p-2" style={{ width: 48, height: 48, minWidth: 48 }}>
                                                    <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                                                </span>
                                                <a href="mailto:mbl@construccionesmbl.com" className="ms-3 text-decoration-none text-dark">mbl@construccionesmbl.com</a>
                                            </li>
                                            <li className="d-flex align-items-center mb-4">
                                                <span className="d-flex align-items-center justify-content-center rounded-circle bg-light p-2" style={{ width: 48, height: 48, minWidth: 48 }}>
                                                    <FontAwesomeIcon icon={faClock} size="2xl" />
                                                </span>
                                                <span className="ms-3">Lunes a Viernes: 10:00 a 14:00 y 16:00 a 20:00</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="content-box my-5">
                                        <h3>Redes sociales</h3>
                                        <div className="social-links">
                                            <ul className="list-unstyled d-flex gap-3 mt-4 ">
                                                <li>
                                                    <Link href="#" className="me-3 p-0">
                                                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="#" className="me-3 p-0">
                                                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="me-3 p-0">
                                                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="me-3 p-0">
                                                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="me-3 p-0">
                                                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inquiry-item col-md-6">
                            <h3>Contacta con nosotros</h3>

                            <p className="mt-4">Ponte en contacto con nosotros a través del formulario o llámanos para hablar directamente con un especialista en construcción, reformas o 
                                rehabilitación. Nos encantará conocer tu caso y ofrecerte una primera asesoría personalizada y sin compromiso.</p>
                            <form name="contactform" action="contact.php" method="post" className="form-group contact-form mt-4">
                                <div className="form-input col-lg-12 d-flex justify-content-between mb-3">
                                    <div className="w-100 me-3">
                                        <label className="mb-2 fs-6 text-dark">Nombre</label>
                                        <input type="text" name="name" placeholder="Nombre" className="form-control shadow-none px-3 py-2" required />
                                    </div>
                                    <div className="w-100">
                                        <label className="mb-2 fs-6 text-dark">E-mail</label>
                                        <input type="email" name="email" placeholder="email@email.com" className="form-control shadow-none px-3 py-2" required />
                                    </div>

                                </div>
                                <div className="col-lg-12 mb-3">
                                    <label className="mb-2 fs-6 text-dark">Número de teléfono</label>
                                    <input type="number" name="phone" placeholder="Número de teléfono" className="form-control shadow-none px-3 py-2" />
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <label className="mb-2 fs-6 text-dark">Mensaje</label>

                                    <textarea name="message" placeholder="Escribe un mensaje" className="form-control shadow-none px-3 py-2" style={{ height: '150px' }} required></textarea>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" name="submit" className="btn btn-arrow btn-primary btn-lg btn-dark fs-6">Enviar</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}