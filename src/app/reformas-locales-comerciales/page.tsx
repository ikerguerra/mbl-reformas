import FAQs from "@/components/FAQs";
import HeroSection from "@/components/HeroSection";
import Nosotros from "@/components/Nosotros";
import Image from "next/image";

export default function ReformasLocalesComercialesPage() {

    return (
        <div className="overflow-hidden">
            <HeroSection
                title="Locales Comerciales"
                breadcrumb="/ Locales Comerciales"
                backgroundImage="/assets/hero-reformas-locales-comerciales.jpg"
            />

            <div className="post-wrap py-5 no-padding-bottom">
                <div className="container">
                    <article className="post-item">
                        <div className="row align-items-center my-4">
                            <div className="col-md-8" data-aos="fade-right">
                                <div className="section-header mb-3 d-flex flex-column">
                                    <h2 className="text-uppercase mb-3 left-pattern">Tu negocio empieza con un buen espacio</h2>
                                    <h3 className="text-uppercase mb-3">Reformas de locales comerciales que potencian lo que vendes</h3>
                                    <ul className="inner-list list-unstyled d-flex flex-column gap-3 mt-4">
                                        <li className="font-size-li"><span className="price-tick">✓</span> Diseñamos espacios que no solo atraen miradas, generan experiencias de marca.</li>
                                        <li className="font-size-li"><span className="price-tick">✓</span> Creamos entornos funcionales, estéticos y adaptados al ritmo real de tu negocio.</li>
                                        <li className="font-size-li"><span className="price-tick">✓</span> Nuestro equipo entiende que un local no es solo un lugar, es tu carta de presentación.</li>
                                    </ul>
                                </div>
                                <div className="my-5">
                                    <a href="/contacto" className="btn-slide btn-medium btn-dark hover-slide-right text-uppercase">
                                        <span>Pide tu presupuesto</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4" data-aos="fade-left">
                                <Image src="/assets/reformas-locales-comerciales.jpg" alt="post-image" width={600} height={400} className="img-fluid align-right" />
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