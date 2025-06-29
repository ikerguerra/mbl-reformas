import Contacto from "@/components/Contacto";

export default function ContactoPage() {
    return (
        <>
            <section id="intro" style={{ backgroundImage: "url('/assets/banner-item1.jpg')" }}>
                <div className="overlay"></div>
                <div className="container pt-5 aos-init aos-animate" data-aos="fade-up">
                    <div className="row py-5 ">
                        <div className="banner-content my-5 py-5">
                            <h1 className="banner-title light text-uppercase fw-bold">Contacto</h1>
                            <nav className="breadcrumb mt-3 ">
                                <span className="breadcrumb-item text-white" aria-current="page">Inicio</span>
                                <span className="breadcrumb-item active text-white" aria-current="page">/ Contacto</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <Contacto />
        </>
    );
}