import FAQs from "@/components/FAQs";
import HeroSection from "@/components/HeroSection";
import Nosotros from "@/components/Nosotros";
import Image from "next/image";

export default function ReformasCocinasPage() {

    const preguntas = [
        {
            question: "¿Por dónde empezar el diseño?",
            answer: "Comienza por definir tus necesidades y deseos, realizar mediciones precisas del espacio y considerar la ubicación de puertas, ventanas y conexiones existentes."
        },
        {
            question: "¿Cómo distribuir los muebles y electrodomésticos?",
            answer: "Considera el triángulo de trabajo (fregadero, nevera, cocina) y busca una distribución ergonómica y funcional que se adapte a tus hábitos."
        },
        {
            question: "¿Cocina abierta o cerrada?",
            answer: "Una cocina abierta puede crear una sensación de mayor amplitud y fomentar la interacción social, mientras que una cerrada puede ser más adecuada para quienes buscan mantener el ruido y los olores contenidos."
        },
        {
            question: "¿Es mejor una isla o península?",
            answer: "Las islas y penínsulas ofrecen espacio adicional de trabajo y almacenamiento, pero requieren suficiente espacio para ser funcionales."
        },
        {
            question: "¿Cómo optimizar el espacio de almacenamiento?",
            answer: "Utiliza soluciones de almacenamiento inteligente, como cajones extraíbles, estantes deslizantes y organizadores."
        },
        {
            question: "¿Cómo puedo solicitar un presupuesto?",
            answer: "Para solicitar un presupuesto, puedes contactarnos a través de nuestro formulario en la página de contacto o llamarnos directamente. Estaremos encantados de ayudarte."
        }
    ];

    return (
        <div className="overflow-hidden">
            <HeroSection
                title="Cocinas"
                breadcrumb="/ Cocinas"
                backgroundImage="/assets/cocina-hall.jpeg"
            />

            <div className="post-wrap py-5 no-padding-bottom">
                <div className="container">
                    <article className="post-item">
                        <div className="row align-items-center my-4">
                            <div className="col-md-8" data-aos="fade-right">
                                <div className="section-header mb-3 d-flex flex-column">
                                    <h2 className="text-uppercase mb-3 left-pattern">DONDE TODO EMPIEZA</h2>
                                    <h3 className="text-uppercase mb-3">Reformamos tu cocina</h3>
                                    <ul className="inner-list list-unstyled d-flex flex-column gap-3 mt-4">
                                        <li className="font-size-li"><span className="price-tick">✓</span> Cocinas con alma y funcionalidad.</li>
                                        <li className="font-size-li"><span className="price-tick">✓</span> Nos encargamos de lo complejo, tú eliges lo que te gusta.</li>
                                        <li className="font-size-li"><span className="price-tick">✓</span> Te escuchamos antes de dibujar una sola línea.</li>
                                        <li className="font-size-li"><span className="price-tick">✓</span> Diseños que conectan contigo.</li>
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