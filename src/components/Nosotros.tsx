import Link from "next/link";

export default function Nosotros() {
    return (
        <section id="about" className="padding-large bg-gray-200">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-header">
                            <h2 className="text-uppercase mb-3 left-pattern">Nosotros</h2>
                            <h3 className="text-uppercase">Conozca más sobre nuestra empresa</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p>
                            <strong className="pb-2 d-block">Enim leo leo non in viverra adipiscing nisi sed dictum nisi
                                blandit.</strong> Gravida feugiat viverra porttitor semper in faucibus ut. Ipsum, vel
                            aliquet purus urna placerat convallis felis. Pretium curabitur fames est.
                        </p>
                        <Link href="about.html" className="btn-slide btn-medium btn-dark hover-slide-right text-uppercase mt-5">
                            <span>Nosotros</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}