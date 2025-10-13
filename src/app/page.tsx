'use client';

import AutoCounter from "@/components/AutoCounter";
import Proyectos from "@/components/Proyectos";
import Nosotros from "@/components/NosotrosCTA";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Reviews } from "@/components/Reviews";
import QuickGuide from "@/components/QuickGuide";
import AnimatedParallax from "@/components/AnimatedParallax";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 2500
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <section id="intro">
        <div className="image-holder position-relative">
          <div className="background-overlay"></div>
          <Image src="/assets/23773.jpg" alt="banner" className="banner-image" width={1920} height={1080} />
        </div>
        <div className="container-lg">
          <div className="banner-content position-absolute" data-aos="fade-up">
            <h1 className="banner-title light text-uppercase fw-bold pt-5">CALIDAD COMPROMISO SOSTENIBILIDAD</h1>
            <Link href="/contacto" className="btn-slide btn-medium btn-light hover-slide-right text-uppercase mt-5">
              <span>Pide tu presupuesto</span>
            </Link>
          </div>
        </div>
      </section>

      <Proyectos />

      <AnimatedParallax />

      <QuickGuide />

      <AutoCounter />

      <Reviews />
      
      <Nosotros />
    </div>
  );
}
