import ReviewsWidget from "./ReviewsWidget";

export function Reviews() {
    return (
        <>
            <section id="testimonials" className="padding-large jarallax" style={{ backgroundImage: "url('/assets/banner-item1.jpg')" }}>
                <div className="container mt-5" data-aos="fade-up">
                    <div className="row">
                        <div className="section-header mb-5 text-uppercase">
                            <h2 className="light left-pattern">Reseñas</h2>
                            <h3 className="light">Lo que piensan nuestros clientes</h3>
                        </div>

                        <ReviewsWidget />
                    </div>
                </div>
                {/* <div id="jarallax-container-1" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; z-index: -100; clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%);"><div style="background-position: 50% 50%; background-size: cover; background-repeat: no-repeat; background-image: url(&quot;https://demo.templatesjungle.com/boldiz/images/bg-image2.jpg&quot;); position: fixed; top: 0px; left: 0px; width: 511px; height: 859.5px; overflow: hidden; pointer-events: none; transform-style: preserve-3d; backface-visibility: hidden; will-change: transform, opacity; margin-top: 25.75px; transform: translate3d(0px, 20.4844px, 0px);"></div></div> */}
            </section>
        </>
    )
}