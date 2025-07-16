import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
    title: string;
    breadcrumb: string;
    backgroundImage: string;
}

export default function HeroSection({ title, breadcrumb, backgroundImage }: HeroSectionProps) {
    return (
        <section id="intro" className="position-relative">
            <Image
                src={backgroundImage}
                alt="Fondo del banner"
                fill
                style={{ objectFit: 'cover' }}
                priority // opcional: para que cargue rápido si es hero/banner
            />
            <div className="background-overlay position-absolute w-100 h-100"></div>
            <div className="container pt-5" data-aos="fade-up">
                <div className="row py-5">
                    <div className="banner-content my-5 py-5">
                        <h1 className="banner-title light text-uppercase fw-bold">{title}</h1>
                        <nav className="breadcrumb mt-3">
                            <Link className="breadcrumb-item text-white" href="/">Inicio</Link>
                            <span className="breadcrumb-item active text-white" aria-current="page">{breadcrumb}</span>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}