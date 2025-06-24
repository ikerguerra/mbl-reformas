import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Contacto() {
    return (
        <>
            <section className="contact-us-wrap py-5 mt-5">
                <div className="container aos-init aos-animate" data-aos="fade-up">
                    <div className="row">
                        <div className="contact-info col-md-6">
                            <h3>Contact information</h3>

                            <p>Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
                            <div className="page-content">
                                <div className="col-md-6">
                                    <div className="content-box my-5">
                                        <h5 className="element-title text-uppercase fs-6 fw-bold mb-3">Head Office</h5>
                                        <div className="contact-address">
                                            <p>730 Glenstone Ave 65802, Springfield, US</p>
                                        </div>
                                        <div className="contact-number ">
                                            <a href="#">+123 987 321 ,</a>
                                            <a href="#">+123 123 654</a>
                                        </div>
                                        <div className="email-address">
                                            <p>
                                                <a href="#"> Boldiz@yourcompany.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="content-box my-5">
                                        <h5 className="element-title text-uppercase fs-6 fw-bold mb-3">Branch Office</h5>
                                        <div className="contact-address">
                                            <p>730 Glenstone Ave 65802, Springfield, US</p>
                                        </div>
                                        <div className="contact-number ">
                                            <a href="#">+123 987 321 ,</a>
                                            <a href="#">+123 123 654</a>
                                        </div>
                                        <div className="email-address">
                                            <p>
                                                <a href="#">contact@yourcompany.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="content-box my-5">
                                        <h5 className="element-title text-uppercase fs-6 fw-bold mb-3">Social info</h5>
                                        <div className="social-links">
                                            <ul className="list-unstyled d-flex gap-3 mt3 ">
                                                <li>
                                                    <a href="#" className="text-secondary me-3 p-0">
                                                        <FontAwesomeIcon icon={faFacebook} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-secondary me-3 p-0">
                                                        <FontAwesomeIcon icon={faInstagram} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-secondary me-3 p-0">
                                                        <FontAwesomeIcon icon={faTwitter} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-secondary me-3 p-0">
                                                        <FontAwesomeIcon icon={faYoutube} />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-secondary me-3 p-0">
                                                        <FontAwesomeIcon icon={faLinkedin} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inquiry-item col-md-6">
                            <h3>Got any questions?</h3>

                            <p>Use the form below to get in touch with us.</p>
                            <form name="contactform" action="contact.php" method="post" className="form-group contact-form mt-4">
                                <div className="form-input col-lg-12 d-flex justify-content-between mb-3">
                                    <div className="w-100 me-3">
                                        <label className="mb-2 fs-6 text-dark">Your Name*</label>
                                        <input type="text" name="name" placeholder="Write Your Name Here" className="form-control shadow-none px-3 py-2" required />
                                    </div>
                                    <div className="w-100">
                                        <label className="mb-2 fs-6 text-dark">Your E-mail*</label>
                                        <input type="email" name="email" placeholder="Write Your Email Here" className="form-control shadow-none px-3 py-2" required />
                                    </div>

                                </div>
                                <div className="col-lg-12 mb-3">
                                    <label className="mb-2 fs-6 text-dark">Phone Number</label>
                                    <input type="number" name="phone" placeholder="Phone Number" className="form-control shadow-none px-3 py-2" />
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <label className="mb-2 fs-6 text-dark">Subject</label>

                                    <input type="text" name="subject" placeholder="Write Your Subject Here" className="form-control shadow-none px-3 py-2" />
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <label className="mb-2 fs-6 text-dark">Your Message*</label>

                                    <textarea name="message" placeholder="Write Your Message Here" className="form-control shadow-none px-3 py-2" style={{ height: '150px' }} required></textarea>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" name="submit" className="btn btn-arrow btn-primary btn-lg btn-dark fs-6">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}