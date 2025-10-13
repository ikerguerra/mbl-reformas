import AnimatedParallax from "@/components/AnimatedParallax";
import HeroSection from "@/components/HeroSection";
import Proyectos from "@/components/Proyectos";

export default function NuestrosProyectos() {

    return (
        <div className="overflow-hidden">
            <HeroSection
                title="Proyectos"
                breadcrumb="/ Proyectos"
                backgroundImage="/assets/hero-proyectos.jpg"
            />

            <Proyectos />

            <AnimatedParallax />
        </div>
    )
}