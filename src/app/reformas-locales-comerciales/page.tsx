import FAQs from "@/components/FAQs";
import HeroSection from "@/components/HeroSection";
import Nosotros from "@/components/NosotrosCTA";
import Image from "next/image";

export default function ReformasLocalesComercialesPage() {

    const preguntas = [
        {
            question: "¿Qué tipo de reformas ofrecen para locales comerciales?",
            answer: "Ofrecemos reformas integrales, remodelaciones de espacios comerciales, y adaptaciones según las necesidades del negocio."
        },
        {
            question: "¿Cuánto tiempo tardará la reforma de mi local comercial?",
            answer: "El tiempo de reforma varía según el proyecto. Una vez que evaluemos tus necesidades, te proporcionaremos un plazo estimado."
        },
        {
            question: "¿Cómo puedo solicitar un presupuesto?",
            answer: "Para solicitar un presupuesto, puedes contactarnos a través de nuestro formulario en la página de contacto o llamarnos directamente. Estaremos encantados de ayudarte."
        },
        {
            question: "¿Cómo se gestiona el proyecto de reforma de un local comercial?",
            answer: "Nos encargamos de todo el proceso, desde la planificación y diseño hasta la ejecución y supervisión de los trabajos, asegurando que se cumplan los plazos y presupuestos acordados."
        },
        {
            question: "¿Qué consideraciones debo tener en cuenta al reformar un local comercial?",
            answer: "Es importante considerar la funcionalidad del espacio, la imagen de marca, las normativas locales y las necesidades específicas de tu negocio para crear un ambiente atractivo y eficiente."
        },
        {
            question: "¿Cómo puedo maximizar el espacio en mi local comercial?",
            answer: "Utilizamos soluciones de diseño inteligente, como mobiliario modular, estanterías verticales y una distribución eficiente del espacio para maximizar la funcionalidad y la estética."
        }
    ];

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

            <FAQs
                preguntasFrecuentes={preguntas}
            />
        </div>
    );
}