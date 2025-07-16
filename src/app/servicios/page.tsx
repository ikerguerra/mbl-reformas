import HeroSection from "@/components/HeroSection";
import Servicios from "@/components/Servicios";

export default function ServiciosPage() {
    return (
        <div className="overflow-hidden">
            <HeroSection
                title="Servicios"
                breadcrumb="/ Servicios"
                backgroundImage="/assets/hero-servicios.jpg"
            />

            <Servicios />
        </div>
    );
}