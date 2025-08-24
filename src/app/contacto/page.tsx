import Contacto from "@/components/Contacto";
import HeroSection from "@/components/HeroSection";

export default function ContactoPage() {
    return (
        <div className="overflow-hidden">
            <HeroSection
                title="Contacto"
                breadcrumb="/ Contacto"
                backgroundImage="/assets/hero-contacto.jpg"
            />

            <Contacto />
        </div>
    );
}