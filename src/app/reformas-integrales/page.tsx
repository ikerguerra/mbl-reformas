import FAQs from "@/components/FAQs";
import Nosotros from "@/components/Nosotros";
import Image from "next/image";
import Link from "next/link";

export default function ReformasIntegralesPage() {

    return (
        <div className="overflow-hidden">
            <section id="intro" style={{ backgroundImage: "url('/assets/banner-item1.jpg')" }}>
                <div className="overlay"></div>
                <div className="container pt-5" data-aos="fade-up">
                    <div className="row py-5 ">
                        <div className="banner-content my-5 py-5">
                            <h1 className="banner-title light text-uppercase fw-bold">Integrales</h1>
                            <nav className="breadcrumb mt-3 ">
                                <Link className="breadcrumb-item text-white" href="/">Inicio</Link>
                                <span className="breadcrumb-item active text-white" aria-current="page">/ Integrales</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <div className="post-wrap py-5 no-padding-bottom">
                <div className="container">
                    <article className="post-item">
                        <div className="row align-items-center my-4">
                            <div className="col-md-8" data-aos="fade-right">
                                <div className="section-header mb-3 d-flex flex-column">
                                    <h2 className="text-uppercase mb-3 left-pattern">Transforma tu hogar sin complicaciones</h2>
                                    <h3 className="text-uppercase mb-3">Especialistas en reformas integrales </h3>
                                    <ul className="inner-list list-unstyled d-flex flex-column gap-3 mt-4">
                                        <li><span className="price-tick">✓</span> Te ayudamos a optimizar cada espacio según tus necesidades.</li>
                                        <li><span className="price-tick">✓</span> Contamos con un equipo cualificado para ejecutar tu proyecto con precisión..</li>
                                        <li><span className="price-tick">✓</span> Te guiamos en cada paso para lograr un estilo coherente y personalizado.</li>
                                        <li><span className="price-tick">✓</span> Trabajamos en todo Asturias llevando calidad.</li>
                                    </ul>
                                </div>
                                <div className="my-5">
                                    <a href="/contacto" className="btn-slide btn-medium btn-dark hover-slide-right text-uppercase">
                                        <span>Pide información</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4" data-aos="fade-left">
                                <Image src="/assets/cocina.jpeg" alt="post-image" width={600} height={400} className="img-fluid align-right" />
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <Nosotros />

            <FAQs />
        </div>
    );
}