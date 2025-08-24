import HeroSection from "@/components/HeroSection";
import Proyectos from "@/components/Proyectos";
import Link from "next/link";

export default function NuestrosProyectos() {

    return (
        <div className="overflow-hidden">
            <HeroSection
                title="Proyectos"
                breadcrumb="/ Proyectos"
                backgroundImage="/assets/hero-proyectos.jpg"
            />

            <Proyectos />
        </div>
    )
}