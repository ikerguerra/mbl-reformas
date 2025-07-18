interface PreguntaFrecuente {
    question: string;
    answer: string;
}

interface FAQsProps {
    preguntasFrecuentes?: PreguntaFrecuente[]; // opcional, si necesitas un array de strings
}

export default function FAQs({ preguntasFrecuentes }: FAQsProps) {

    return (
        <section className="faqs-wrap padding-large pt-5">
            <div className="container">
                <div className="row g-md-5 my-4">
                    <main className="col-md-8">
                        <div className="section-header" data-aos="fade-left">
                            <h2 className="text-uppercase mb-3 left-pattern">Resuelve tus dudas</h2>
                            <h3 className="text-uppercase">Preguntas frecuentes</h3>
                        </div>
                        <div className="page-content my-5" data-aos="fade-right">
                            <div className="accordion mb-5" id="accordionExample">
                                {
                                    preguntasFrecuentes?.map((pregunta, index) => (
                                        <div className="accordion-item" key={index}>
                                            <h3 className="accordion-header" id={`heading${index}`}>
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                                                    <h4>{pregunta.question}</h4>
                                                </button>
                                            </h3>
                                            <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`}>
                                                <div className="accordion-body">
                                                    {pregunta.answer}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}