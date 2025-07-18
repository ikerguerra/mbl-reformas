import FAQs from "@/components/FAQs";
import HeroSection from "@/components/HeroSection";
import Nosotros from "@/components/NosotrosCTA";
import Image from "next/image";

export default function ReformasIntegralesPage() {

    const preguntas = [
        {
            question: "¿Qué incluye una reforma integral?",
            answer: "Una reforma integral abarca la renovación completa de un espacio, incluyendo estructuras, instalaciones eléctricas, fontanería y acabados."
        },
        {
            question: "¿Cómo se gestiona el proyecto de reforma integral?",
            answer: "Nos encargamos de todo el proceso, desde la planificación y diseño hasta la ejecución y supervisión de los trabajos."
        },
        {
            question: "¿Cuánto tiempo suele llevar una reforma integral?",
            answer: "El tiempo varía según el tamaño y complejidad del proyecto, pero generalmente puede tomar entre 4 a 12 semanas."
        },
        {
            question: "¿Puedo personalizar el diseño de mi reforma integral?",
            answer: "Sí, trabajamos contigo para crear un diseño que se adapte a tus gustos y necesidades específicas."
        },
        {
            question: "¿Cómo puedo solicitar un presupuesto?",
            answer: "Para solicitar un presupuesto, puedes contactarnos a través de nuestro formulario en la página de contacto o llamarnos directamente. Estaremos encantados de ayudarte."
        }
    ];

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

            <FAQs
                preguntasFrecuentes={preguntas}
            />
        </div>
    );
}