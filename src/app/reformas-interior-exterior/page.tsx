import FAQs from "@/components/FAQs";
import HeroSection from "@/components/HeroSection";
import Nosotros from "@/components/NosotrosCTA";
import Image from "next/image";

export default function ReformasInteriorExteriorPage() {

    return (
        <div className="overflow-hidden">
            <HeroSection
                title="Interior & Exterior"
                breadcrumb="/ Interior & Exterior"
                backgroundImage="/assets/hero-reformas-interior-exterior.jpg"
            />

            <div className="post-wrap py-5 no-padding-bottom">
                <div className="container">
                    <article className="post-item">
                        <div className="row align-items-center my-4">
                            <div className="col-md-8" data-aos="fade-right">
                                <div className="section-header mb-3 d-flex flex-column">
                                    <h2 className="text-uppercase mb-3 left-pattern">ESPACIOS QUE INSPIRAN</h2>
                                    <h3 className="text-uppercase mb-3">Transforma tu hogar por dentro y por fuera</h3>
                                    <ul className="inner-list list-unstyled d-flex flex-column gap-3 mt-4">
                                        <li className="font-size-li"><span className="price-tick">✓</span> Rediseñamos tu interior para que refleje cómo vives, no solo dónde vives.</li>
                                        <li className="font-size-li"><span className="price-tick">✓</span> Damos nueva vida a tus exteriores: fachadas, terrazas y jardines con intención y estilo.</li>
                                        <li className="font-size-li"><span className="price-tick">✓</span> Nuestro equipo transforma ideas en espacios donde vivir cobra un nuevo sentido.</li>
                                        <li className="font-size-li"><span className="price-tick">✓</span> Tu hogar merece equilibrio dentro y carácter fuera.</li>
                                    </ul>
                                </div>
                                <div className="my-5">
                                    <a href="/contacto" className="btn-slide btn-medium btn-dark hover-slide-right text-uppercase">
                                        <span>Pide tu presupuesto</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4" data-aos="fade-left">
                                <Image src="/assets/reformas-interior-exterior.jpg" alt="post-image" width={600} height={400} className="img-fluid align-right" />
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