import FAQs from "@/components/FAQs";
import HeroSection from "@/components/HeroSection";
import Nosotros from "@/components/Nosotros";
import Image from "next/image";

export default function ReformasBanosPage() {

    const preguntas = [
        {
            question: "¿Cuánto cuesta reformar un baño completo?",
            answer: "El costo varía según el tamaño del baño, la calidad de los materiales, la complejidad de la obra y si es una reforma parcial o integral."
        },
        {
            question: "¿Qué factores influyen en el precio?",
            answer: "Los materiales (pavimentos, revestimientos, sanitarios, grifería), la mano de obra, los trabajos de fontanería y electricidad, y la complejidad del diseño son factores clave."
        },
        {
            question: "¿Cuánto tiempo se tarda en reformar un baño?",
            answer: "Una reforma parcial puede llevar de 3 a 5 días, mientras que una reforma integral puede tomar de 1 a 3 semanas, dependiendo del tamaño y la complejidad."
        },
        {
            question: "¿Cómo planifico la distribución del baño?",
            answer: "Es fundamental considerar la funcionalidad y el espacio disponible. Se recomienda hacer un plano a escala y visualizar la distribución de cada elemento."
        },
        {
            question: "¿Cómo puedo solicitar un presupuesto?",
            answer: "Para solicitar un presupuesto, puedes contactarnos a través de nuestro formulario en la página de contacto o llamarnos directamente. Estaremos encantados de ayudarte."
        }
    ];

    return (
        <div className="overflow-hidden">
            <HeroSection
                title="Baños"
                breadcrumb="/ Baños"
                backgroundImage="/assets/hero-reformas-banos.jpg"
            />

            <div className="post-wrap py-5 no-padding-bottom">
                <div className="container">
                    <article className="post-item">
                        <div className="row align-items-center my-4">
                            <div className="col-md-8" data-aos="fade-right">
                                <div className="section-header mb-3 d-flex flex-column">
                                    <h2 className="text-uppercase mb-3 left-pattern">TU BAÑO, TU ESPACIO</h2>
                                    <h3 className="text-uppercase mb-3">¿Imaginas un baño hecho a tu medida?</h3>
                                    <ul className="inner-list list-unstyled d-flex flex-column gap-3 mt-4">
                                        <li className="font-size-li"><span className="price-tick">✓</span> Te guiamos para que el diseño final refleje tu estilo.</li>
                                        <li className="font-size-li"><span className="price-tick">✓</span> Cuidamos los detalles porque creemos que en un buen baño, todo suma.</li>
                                        <li className="font-size-li"><span className="price-tick">✓</span> Nos encargamos de todo, desde las tuberías hasta el último azulejo.</li>
                                        <li className="font-size-li"><span className="price-tick">✓</span> Sabemos que cada baño es diferente. Por eso, el primer paso siempre es entender lo que necesitas.</li>
                                    </ul>
                                </div>
                                <div className="my-5">
                                    <a href="/contacto" className="btn-slide btn-medium btn-dark hover-slide-right text-uppercase">
                                        <span>Pide tu presupuesto</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4" data-aos="fade-left">
                                <Image src="/assets/banio.jpeg" alt="post-image" width={600} height={400} className="img-fluid align-right" />
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