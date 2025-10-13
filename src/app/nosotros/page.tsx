import AutoCounter from "@/components/AutoCounter";
import Contacto from "@/components/Contacto";
import HeroSection from "@/components/HeroSection";
import { Reviews } from "@/components/Reviews";
import Image from "next/image";

export default function NosotrosPage() {

    return (
        <div className="overflow-hidden">
            <HeroSection
                title="Nosotros"
                breadcrumb="/ Nosotros"
                backgroundImage="/assets/hero-nosotros.jpg"
            />

            <section id="about-us" className="my-5 py-5">
                <div className="vertical-element" data-aos="fade-up">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-5">
                                <div className="image-holder">
                                    <Image src="/assets/quienes-somos-mbl.jpeg" alt="banner" className="img-fluid" width={410} height={370} />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="section-element ps-0 p-5">
                                    <div className="section-header text-uppercase mb-4">
                                        <h2 className="left-pattern">Sobre nosotros</h2>
                                        <h3>¿Quiénes somos?</h3>
                                    </div>

                                    <p>Somos una empresa de construcción, reformas y rehabilitación con más de 20 años de experiencia en el sector. Nos especializamos en ofrecer
                                        servicios de alta calidad, adaptados a las necesidades de nuestros clientes, siempre priorizando la sostenibilidad y el compromiso con el
                                        medio ambiente.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AutoCounter />

            <Reviews />

            <Contacto />
        </div>
    )
}