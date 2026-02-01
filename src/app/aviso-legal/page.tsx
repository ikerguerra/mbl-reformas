import HeroSection from "@/components/HeroSection";

export default function AvisoLegalPage() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://construccionesmbl.vercel.app";
    const domain = baseUrl.replace(/^https?:\/\//, "");

    return (
        <div className="overflow-hidden">
            <HeroSection
                title="Aviso Legal"
                breadcrumb="/ Aviso Legal"
                backgroundImage="/assets/hero-servicios.jpg"
            />

            <section className="my-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-element p-4">
                                <div className="section-header text-uppercase mb-4">
                                    <h2 className="left-pattern">Información Legal</h2>
                                </div>

                                <p className="mb-4">
                                    El titular del sitio web <strong>{domain}</strong> es{" "}
                                    <strong>Construcciones MBL</strong>, con domicilio en Gijón, Asturias (España).
                                </p>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">Condiciones de Uso</h2>
                                </div>

                                <p className="mb-4">
                                    El acceso y uso del sitio web implica la aceptación de estas condiciones generales y de la
                                    política de privacidad. El usuario se compromete a hacer un uso adecuado de los contenidos
                                    y servicios que ofrece Construcciones MBL, evitando actividades ilícitas o contrarias a la buena fe.
                                </p>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">Propiedad Intelectual</h2>
                                </div>

                                <p className="mb-4">
                                    Queda prohibida la reproducción, distribución o modificación de los contenidos sin
                                    autorización expresa del titular. Todos los derechos reservados.
                                </p>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">Responsabilidad</h2>
                                </div>

                                <p className="mb-4">
                                    Construcciones MBL no se hace responsable de la información y contenidos almacenados en foros, redes sociales o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en nuestra web.
                                </p>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">Legislación Aplicable</h2>
                                </div>

                                <p className="mb-4">
                                    Las presentes condiciones se rigen por la legislación española. Cualquier controversia que pudiera derivarse del acceso o uso de este sitio web estará sometida a la jurisdicción de los Juzgados y Tribunales de Gijón.
                                </p>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">Datos de Contacto</h2>
                                </div>

                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2"><strong>Empresa:</strong> Construcciones MBL</li>
                                    <li className="mb-2"><strong>CIF/NIF:</strong> [B12345678]</li>
                                    <li className="mb-2"><strong>Dirección:</strong> Gijón, Asturias (España)</li>
                                    <li className="mb-2"><strong>Email:</strong> info@construccionesmbl.com</li>
                                    <li className="mb-2"><strong>Teléfono:</strong> [+34 666 666 666]</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
