import AutoCounter from "@/components/AutoCounter";
import Proyectos from "@/components/Proyectos";
import SobreNosotros from "@/components/Nosotros";
import Image from "next/image";
import Link from "next/link";
import { Reviews } from "@/components/Reviews";

export default function Home() {

  return (
    <div className="overflow-hidden">
      <section id="intro">
        <div className="image-holder position-relative">
          <div className="background-overlay"></div>
          <Image src="/assets/23773.jpg" alt="banner" className="banner-image" width={1920} height={1080} />
        </div>
        <div className="container-lg">
          <div className="banner-content position-absolute aos-init aos-animate" data-aos="fade-up">
            <h1 className="banner-title light text-uppercase fw-bold">CALIDAD, SOSTENIBILIDAD Y COMPROMISO</h1>
            <Link href="/nuestros-proyectos" className="btn-slide btn-medium btn-light hover-slide-right text-uppercase mt-5">
              <span>Nuestros proyectos</span>
            </Link>
          </div>
        </div>
      </section>

      <AutoCounter />

      <Reviews />

      <Proyectos />

      <SobreNosotros />
    </div>
  );
}
