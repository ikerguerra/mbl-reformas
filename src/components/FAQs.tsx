interface PreguntaFrecuente {
    question: string;
    answer: string;
}

interface FAQsProps {
    preguntasFrecuentes?: PreguntaFrecuente[]; // opcional, si necesitas un array de strings
}

export default function FAQs({ preguntasFrecuentes }: FAQsProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": preguntasFrecuentes?.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className="faqs-wrap padding-large pt-5">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

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
                                            <div className="accordion-header" id={`heading${index}`}>
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                                                    <span className="h4 mb-0">{pregunta.question}</span>
                                                </button>
                                            </div>
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