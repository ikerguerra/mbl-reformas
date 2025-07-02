import AutoCounter from "@/components/AutoCounter";
import Contacto from "@/components/Contacto";
import Image from "next/image";
import Link from "next/link";

export default function NosotrosPage() {

    return (
        <>
            <section id="intro" style={{ backgroundImage: "url('/assets/banner-item1.jpg')" }}>
                <div className="overlay"></div>
                <div className="container pt-5" data-aos="fade-up">
                    <div className="row py-5 ">
                        <div className="banner-content my-5 py-5">
                            <h1 className="banner-title light text-uppercase fw-bold">Nosotros</h1>
                            <nav className="breadcrumb mt-3 ">
                                <Link className="breadcrumb-item text-white" href="index.html">Home</Link>
                                <span className="breadcrumb-item active text-white" aria-current="page">/ Project</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about-us" className="my-5 py-5">
                <div className="vertical-element" data-aos="fade-up">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-5">
                                <div className="image-holder">
                                    <Image src="/assets/projects-item1.jpg" alt="banner" className="img-fluid" width={410} height={370} />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="section-element ps-0 p-5">
                                    <div className="section-header text-uppercase mb-4">
                                        <h2 className="left-pattern">Sobre nosotros</h2>
                                        <h3>¿Quiénes somos?</h3>
                                    </div>

                                    <p>Somos una empresa de construcción, refomas y rehabilitación con más de 20 años de experiencia en el sector. Nos especializamos en ofrecer 
                                        servicios de alta calidad, adaptados a las necesidades de nuestros clientes, siempre priorizando la sostenibilidad y el compromiso con el 
                                        medio ambiente.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AutoCounter />

            <Contacto />
        </>
    )
}