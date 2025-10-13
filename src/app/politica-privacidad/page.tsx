import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export default function PoliticaPrivacidadPage() {
    return (
        <div className="overflow-hidden">
            <HeroSection
                title="Política de Privacidad"
                breadcrumb="/ Política de Privacidad"
                backgroundImage="/assets/hero-servicios.jpg"
            />

            <section className="my-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-element p-4">
                                <p className="mb-4">
                                    En <strong>Construcciones MBL</strong>, en cumplimiento del Reglamento (UE) 2016/679
                                    (RGPD), la Ley Orgánica 3/2018 (LOPDGDD) y la Ley 34/2002 (LSSI-CE),
                                    informamos a los usuarios del sitio web <strong>www.construccionesmbl.com</strong> sobre
                                    el tratamiento de los datos personales recabados durante la navegación o el uso de nuestros formularios de contacto.
                                </p>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">1. Identidad del Responsable</h2>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2"><strong>Titular:</strong> Construcciones MBL</li>
                                    <li className="mb-2"><strong>CIF/NIF:</strong> [B12345678]</li>
                                    <li className="mb-2"><strong>Domicilio:</strong> Gijón, Asturias (España)</li>
                                    <li className="mb-2"><strong>Correo electrónico:</strong> info@construccionesmbl.com</li>
                                    <li className="mb-2"><strong>Teléfono:</strong> +34 684 67 58 98</li>
                                    <li className="mb-2"><strong>Actividad:</strong> Reformas, construcción y rehabilitación de viviendas y locales</li>
                                </ul>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">2. Finalidad del Tratamiento</h2>
                                </div>
                                <p className="mb-4">
                                    Tratamos la información que nos facilitan los usuarios con las siguientes finalidades:
                                </p>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">• Atender y responder las consultas enviadas a través del formulario o WhatsApp.</li>
                                    <li className="mb-2">• Elaborar presupuestos personalizados y realizar seguimiento comercial.</li>
                                    <li className="mb-2">• Gestionar los servicios contratados y las comunicaciones derivadas.</li>
                                    <li className="mb-2">• Cumplir con las obligaciones legales en materia fiscal y administrativa.</li>
                                </ul>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">3. Legitimación del Tratamiento</h2>
                                </div>
                                <p className="mb-4">
                                    La base legal para el tratamiento de tus datos es el <strong>consentimiento</strong> otorgado
                                    al marcar la casilla correspondiente del formulario, así como la <strong>ejecución de un contrato o precontrato</strong> en caso de solicitud de presupuesto o servicios.
                                </p>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">4. Conservación de los Datos</h2>
                                </div>
                                <p className="mb-4">
                                    Los datos personales se conservarán el tiempo necesario para cumplir con la finalidad
                                    del tratamiento, y posteriormente bloqueados mientras puedan derivarse responsabilidades legales.
                                </p>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">5. Cesión de Datos a Terceros</h2>
                                </div>
                                <p className="mb-4">
                                    No se cederán datos a terceros salvo obligación legal o cuando sea necesario para la
                                    prestación del servicio (por ejemplo, gestoría o proveedores tecnológicos, con contrato de confidencialidad).
                                </p>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">6. Derechos de los Usuarios</h2>
                                </div>
                                <p className="mb-4">
                                    Cualquier persona tiene derecho a acceder, rectificar, suprimir, limitar u oponerse al tratamiento
                                    de sus datos, así como a solicitar su portabilidad.
                                </p>
                                <p className="mb-4">
                                    Puedes ejercer estos derechos enviando un correo a{" "}
                                    <a href="mailto:info@construccionesmbl.com" className="text-primary text-decoration-underline">
                                        info@construccionesmbl.com
                                    </a>{" "}
                                    adjuntando una copia de tu DNI.
                                    También puedes presentar una reclamación ante la Agencia Española de Protección de Datos:{" "}
                                    <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-underline">
                                        www.aepd.es
                                    </a>
                                </p>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">7. Seguridad de los Datos</h2>
                                </div>
                                <p className="mb-4">
                                    Construcciones MBL aplica las medidas técnicas y organizativas necesarias para garantizar la
                                    seguridad e integridad de los datos personales, evitando su pérdida, alteración o acceso no autorizado.
                                </p>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">8. Comunicaciones Comerciales</h2>
                                </div>
                                <p className="mb-4">
                                    El usuario da su consentimiento para recibir comunicaciones comerciales relacionadas con nuestros servicios.
                                    Podrá revocar este consentimiento enviando un correo con el asunto "BAJA" a{" "}
                                    <a href="mailto:info@construccionesmbl.com" className="text-primary text-decoration-underline">
                                        info@construccionesmbl.com
                                    </a>.
                                </p>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">9. Política de Cookies</h2>
                                </div>
                                <p className="mb-4">
                                    Este sitio web utiliza cookies propias y de terceros con fines técnicos y analíticos.
                                    Puedes obtener más información o configurar tus preferencias en nuestra{" "}
                                    <Link href="/politica-cookies" className="text-primary text-decoration-underline">
                                        Política de Cookies
                                    </Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
