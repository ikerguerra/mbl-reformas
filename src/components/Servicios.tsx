
import { faHouse, faPaintRoller, faShop, faSink, faToilet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Servicios() {

    const services = [
        {
            title: "Integrales",
            description: "Reformas completas para transformar tu hogar de principio a fin.",
            icon: faHouse,
            link: "/integrales"
        },
        {
            title: "Baños",
            description: "Diseñamos y renovamos baños modernos, cómodos y funcionales.",
            icon: faToilet,
            link: "/banos"
        },
        {
            title: "Cocinas",
            description: "Cocinas a medida, prácticas y adaptadas a tu estilo.",
            icon: faSink,
            link: "/cocinas"
        },
        {
            title: "Interior & Exterior",
            description: "Mejoramos tus espacios interiores y exteriores con diseño y calidad.",
            icon: faPaintRoller, // Placeholder for a custom icon
            link: "/interior-exterior"
        },
        {
            title: "Locales Comerciales",
            description: "Adaptamos tu local comercial para atraer más clientes.",
            icon: faShop,
            link: "/locales-comerciales"
        }
    ];

    return (
        <>
            <section id="services" className="align-items-center">
                <div className="container my-5 py-5" data-aos="fade-up" data-aos-duration="2000">
                    <div className="section-header my-5">
                        <h2 className="text-uppercase my-3 left-pattern">Nuestros servicios</h2>
                        <h3 className="text-uppercase">Lo que ofrecemos</h3>
                    </div>
                    <div className="row">
                        {
                            services.map((service, index) => (
                                <div className="col-lg-4 col-md-6 my-5 d-flex flex-column" key={index}>
                                    <div className="service-item d-flex flex-column align-items-start h-100">
                                        {typeof service.icon === "string" ? (
                                            // If icon is a string, render a placeholder or use another icon library/component
                                            <span className="service-icon">{/* Render alternative icon here */}</span>
                                        ) : (
                                            <FontAwesomeIcon icon={service.icon} className="fa-light service-icon my-2" />
                                        )}
                                        <h4 className=" fs-1">{service.title}</h4>
                                        <p className="">{service.description}</p>
                                    </div>
                                    <a href={service.link} className="btn-slide btn-medium btn-dark hover-slide-right text-uppercase mt-3 w-75">
                                        <span>Saber más</span>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}