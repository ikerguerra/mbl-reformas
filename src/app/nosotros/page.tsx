import SobreNosotros from "@/components/Nosotros";
import Link from "next/link";

export default function NosotrosPage() {

    return (
        <>
            <section id="intro" style={{ backgroundImage: "url('/assets/banner-item1.jpg')" }}>
                <div className="overlay"></div>
                <div className="container pt-5 aos-init aos-animate" data-aos="fade-up">
                    <div className="row py-5 ">
                        <div className="banner-content my-5 py-5">
                            <h1 className="banner-title light text-uppercase fw-bold">Nosotros</h1>
                            <nav className="breadcrumb mt-3 ">
                                <Link className="breadcrumb-item text-white" href="index.html">Home</Link>
                                <span className="breadcrumb-item active text-white" aria-current="page">/ Project</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about-us" className="mt-5 pt-5">

                <div className="vertical-element aos-init aos-animate" data-aos="fade-up">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-5">
                                <div className="image-holder">
                                    {/* <img src="images/post-item1.jpg" alt="about-us" className="img-fluid"> */}
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="section-element ps-0 p-5">
                                    <div className="section-header text-uppercase mb-4">
                                        <h2 className="left-pattern">About Us</h2>
                                        <h3>Who are we?</h3>
                                    </div>

                                    <p>The beginning of our journey vel tellus Turpis purus, gravida orci, fringilla a. Ac
                                        sed
                                        eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit
                                        libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis
                                        donec dolor id in. Pulvinar commodo mollis diam sed facilisis at magna imperdiet
                                        cursus
                                        ac faucibus sit libero.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <SobreNosotros /> */}
        </>
    )
}