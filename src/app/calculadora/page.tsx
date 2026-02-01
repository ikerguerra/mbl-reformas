import BudgetCalculator from "@/components/BudgetCalculator";
import HeroSection from "@/components/HeroSection";
import AOSWrapper from "@/components/AOSWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Calculadora de Presupuesto | MBL Reformas",
    description: "Calcula el coste de tu reforma integral en Asturias en 1 minuto. Estimación gratuita para cocinas, baños y viviendas completas.",
};

export default function CalculadoraPage() {
    return (
        <AOSWrapper>
            <div className="overflow-hidden">
                {/* 
                  USING SHARED HERO COMPONENT 
                  Ensures exact consistency with 'Nosotros', 'Servicios', etc.
                  Reusing a generic background image for now.
                */}
                <HeroSection
                    title="Calculadora"
                    breadcrumb="/ Calculadora Online"
                    backgroundImage="/assets/hero-nosotros.jpg"
                />

                <section className="padding-medium">
                    <BudgetCalculator />
                </section>
            </div>
        </AOSWrapper>
    );
}
