import FAQs from "@/components/FAQs";
import HeroSection from "@/components/HeroSection";
import Nosotros from "@/components/NosotrosCTA";
import Image from "next/image";

export default function ReformasIntegralesPage() {

    return (
        <div className="overflow-hidden">
            <HeroSection
                title="Integrales"
                breadcrumb="/ Integrales"
                backgroundImage="/assets/hero-reformas-integrales.jpg"
            />

            <div className="post-wrap py-5 no-padding-bottom">
                <div className="container">
                    <article className="post-item">
                        <div className="row align-items-center my-4">
                            <div className="col-md-8" data-aos="fade-right">
                                <div className="section-header mb-3 d-flex flex-column">
                                    <h2 className="text-uppercase mb-3 left-pattern">Transforma tu hogar sin complicaciones</h2>
                                    <h3 className="text-uppercase mb-3">Especialistas en reformas integrales </h3>
                                    <ul className="inner-list list-unstyled d-flex flex-column gap-3 mt-4">
                                        <li className="font-size-li"><span className="price-tick">✓</span> Te ayudamos a optimizar cada espacio según tus necesidades.</li>
                                        <li className="font-size-li"><span className="price-tick">✓</span> Contamos con un equipo cualificado para ejecutar tu proyecto con precisión..</li>
                                        <li className="font-size-li"><span className="price-tick">✓</span> Te guiamos en cada paso para lograr un estilo coherente y personalizado.</li>
                                        <li className="font-size-li"><span className="price-tick">✓</span> Trabajamos en todo Asturias llevando calidad.</li>
                                    </ul>
                                </div>
                                <div className="my-5">
                                    <a href="/contacto" className="btn-slide btn-medium btn-dark hover-slide-right text-uppercase">
                                        <span>Pide tu presupuesto</span>
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