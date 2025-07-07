import Servicios from "@/components/Servicios";
import Link from "next/link";

export default function ServiciosPage() {
    return (
        <>
            <section id="intro" style={{ backgroundImage: "url('/assets/banner-item1.jpg')" }}>
                <div className="overlay"></div>
                <div className="container pt-5" data-aos="fade-up">
                    <div className="row py-5 ">
                        <div className="banner-content my-5 py-5">
                            <h1 className="banner-title light text-uppercase fw-bold">Servicios</h1>
                            <nav className="breadcrumb mt-3 ">
                                <Link className="breadcrumb-item text-white" href="/">Inicio</Link>
                                <span className="breadcrumb-item active text-white" aria-current="page">/ Servicios</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <Servicios />
        </>
    );
}