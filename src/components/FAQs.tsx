export default function FAQs() {

    const preguntasFrecuentes = [
        {
            question: "How to Get a Quote?",
            answer: "Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."
        },
        {
            question: "Do I need to open an account compulsory?",
            answer: "Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."
        },
        {
            question: "Can I get discounts?",
            answer: "Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."
        },
        {
            question: "What information should I need to provide when getting a quote?",
            answer: "Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."
        },
        {
            question: "Can I cancel my booking?",
            answer: "Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."
        },
        {
            question: "What’s your refund policy?",
            answer: "Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."
        }
    ];

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
                                    preguntasFrecuentes.map((pregunta, index) => (
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