import Link from "next/link";

export default function NosotrosCTA() {
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
                            <strong className="pb-2 d-block">Nuestra visión</strong>
                            Promover un desarrollo que cuide el medio ambiente, genere empleo local y reduzca la huella ecológica. 
                            Creemos en la innovación verde, el diseño eficiente y la construcción responsable como camino hacia ciudades más humanas y sostenibles.
                        </p>
                        <Link href="/nosotros" className="btn-slide btn-medium btn-dark hover-slide-right text-uppercase mt-5">
                            <span>Nosotros</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}