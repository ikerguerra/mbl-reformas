import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export default function PoliticaCookiesPage() {
    return (
        <div className="overflow-hidden">
            <HeroSection
                title="Política de Cookies"
                breadcrumb="/ Política de Cookies"
                backgroundImage="/assets/hero-servicios.jpg"
            />

            <section className="my-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-element p-4">
                                <p className="mb-4">
                                    En <strong>Construcciones MBL</strong>, utilizamos cookies para mejorar tu experiencia de navegación y
                                    ofrecerte un servicio más personalizado. A continuación, te explicamos qué son las cookies y cómo las utilizamos.
                                </p>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">¿Qué son las Cookies?</h2>
                                </div>
                                <p className="mb-4">
                                    Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo (ordenador,
                                    tableta o teléfono móvil) cuando los visitas. Las cookies nos ayudan a:
                                </p>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">• Hacer que el sitio web funcione según lo esperado</li>
                                    <li className="mb-2">• Recordar tus preferencias y ajustes</li>
                                    <li className="mb-2">• Mejorar la velocidad y seguridad del sitio</li>
                                    <li className="mb-2">• Permitirte compartir páginas en redes sociales</li>
                                </ul>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">Tipos de Cookies que Utilizamos</h2>
                                </div>

                                <h3 className="h5 fw-bold mb-3">1. Cookies Técnicas (Necesarias)</h3>
                                <p className="mb-4">
                                    Son esenciales para el funcionamiento básico del sitio web. Incluyen cookies que permiten:
                                </p>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">• Recordar tus datos durante la navegación</li>
                                    <li className="mb-2">• Acceder a áreas seguras del sitio</li>
                                    <li className="mb-2">• Recordar tus preferencias de privacidad</li>
                                </ul>

                                <h3 className="h5 fw-bold mb-3">2. Cookies Analíticas</h3>
                                <p className="mb-4">
                                    Nos ayudan a entender cómo interactúan los visitantes con nuestro sitio web, utilizando Google Analytics. Recopilan información como:
                                </p>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">• Número de visitantes</li>
                                    <li className="mb-2">• Páginas visitadas</li>
                                    <li className="mb-2">• Tiempo de permanencia</li>
                                    <li className="mb-2">• Origen del tráfico</li>
                                </ul>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">Control de Cookies</h2>
                                </div>
                                <p className="mb-4">
                                    Puedes gestionar las cookies a través de:
                                </p>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">• Nuestro banner de cookies al entrar en la web</li>
                                    <li className="mb-2">• La configuración de tu navegador web</li>
                                </ul>

                                <p className="mb-4">
                                    La mayoría de los navegadores permiten:
                                </p>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">• Ver las cookies existentes</li>
                                    <li className="mb-2">• Eliminar las cookies</li>
                                    <li className="mb-2">• Bloquear cookies de terceros</li>
                                    <li className="mb-2">• Bloquear cookies de sitios específicos</li>
                                    <li className="mb-2">• Bloquear todas las cookies</li>
                                </ul>

                                <div className="alert alert-warning">
                                    <p className="mb-0">
                                        <strong>Nota importante:</strong> Bloquear todas las cookies puede afectar al funcionamiento de
                                        nuestro sitio web. Algunas funcionalidades podrían no estar disponibles.
                                    </p>
                                </div>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">Cookies de Terceros</h2>
                                </div>
                                <p className="mb-4">
                                    Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras páginas:
                                </p>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">• Google Analytics (análisis de uso)</li>
                                    <li className="mb-2">• Redes sociales (si usas botones de compartir)</li>
                                    <li className="mb-2">• Servicios de mapas (para mostrar ubicaciones)</li>
                                </ul>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">Más Información</h2>
                                </div>
                                <p className="mb-4">
                                    Para cualquier duda sobre el uso de cookies en nuestro sitio web, puedes:
                                </p>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">• Consultar nuestra{" "}
                                        <Link href="/politica-privacidad" className="text-primary text-decoration-underline">
                                            Política de Privacidad
                                        </Link>
                                    </li>
                                    <li className="mb-2">• Contactar con nosotros en{" "}
                                        <a href={`mailto:info@${process.env.NEXT_PUBLIC_BASE_URL?.replace(/^https?:\/\/(www\.)?/, "") || "construccionesmbl.com"}`} className="text-primary text-decoration-underline">
                                            info@{process.env.NEXT_PUBLIC_BASE_URL?.replace(/^https?:\/\/(www\.)?/, "") || "construccionesmbl.com"}
                                        </a>
                                    </li>
                                </ul>

                                <div className="section-header text-uppercase mb-4 mt-5">
                                    <h2 className="left-pattern">Actualización de la Política</h2>
                                </div>
                                <p className="mb-4">
                                    Esta Política de Cookies fue actualizada por última vez en octubre de 2025. Nos reservamos
                                    el derecho de modificar esta política en cualquier momento, publicando la versión actualizada en nuestro sitio web.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}