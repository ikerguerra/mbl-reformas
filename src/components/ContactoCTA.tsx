import Image from "next/image";
import Link from "next/link";

export default function ContactoCTA() {
    return (
        // <section id="contact" className="jarallax d-flex align-items-center padding-large" style={{ backgroundImage: "url('assets/hero-servicios.jpg')", width: "100%", height: "567px", backgroundRepeat: "no-repeat", objectFit: "cover" }} data-jarallax-original-styles="background-image: url(images/bg-image3.jpg); width: 100%; height: 567px; background-repeat: no-repeat; background-position: center;">
        //     <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000">
        //         <div className="row justify-content-center">
        //             <div className="col-md-8">
        //                 <h3 className="light text-uppercase">¿Estás listo para comenzar un nuevo proyecto?</h3>
        //                 <p className="light mt-4">Si tienes algún proyecto en mente, contáctanos en <strong>
        //                     <a href="mailto:info@construccionesmbl.com">info@construccionesmbl.com</a>
        //                 </strong>
        //                 </p>
        //                 <a href="/contacto" className="btn-slide btn-medium btn-light hover-slide-right text-uppercase mt-5">
        //                     <span>Contáctanos</span>
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section id="intro" className="position-relative">
            <Image
                src={"/assets/hero-contacto.jpg"}
                alt="Fondo del banner"
                fill
                style={{ objectFit: 'cover' }}
                priority // opcional: para que cargue rápido si es hero/banner
            />
            <div className="background-overlay position-absolute w-100 h-100"></div>
            <div className="container pt-5" data-aos="fade-up">
                <div className="row py-5">
                    <div className="banner-content my-5 py-5">
                        <h1 className="banner-title light text-uppercase fw-bold">Contacta</h1>
                        <nav className="breadcrumb mt-3">
                            <Link className="breadcrumb-item text-white" href="/">Inicio</Link>
                            <span className="breadcrumb-item active text-white" aria-current="page">Contacta</span>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}