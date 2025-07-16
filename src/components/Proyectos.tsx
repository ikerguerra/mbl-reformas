'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Proyectos() {

    const [filter, setFilter] = useState('*');

    const filters = [
        { value: '*', label: 'Todos' },
        { value: '.cocina', label: 'Cocinas' },
        { value: '.interior', label: 'Interior & Exterior' },
        { value: '.banio', label: 'Baños' }
    ];

    const proyectos = [
        { id: 1, category: 'cocina', image: '/assets/cocina.jpeg', title: 'Cocina Moderna' },
        { id: 2, category: 'banio', image: '/assets/banio-vater-elevado.jpeg', title: 'Baño Elevado' },
        { id: 3, category: 'cocina', image: '/assets/cocina-hall.jpeg', title: 'Cocina con Hall' },
        { id: 4, category: 'banio', image: '/assets/banio.jpeg', title: 'Baño Clásico' },
        { id: 5, category: 'banio', image: '/assets/ducha-mampara.jpeg', title: 'Ducha con Mampara' },
        { id: 6, category: 'interior', image: '/assets/hall.jpeg', title: 'Hall de Entrada' }
    ];

    const handleFilterClick = (filterValue: string) => {
        setFilter(filterValue);
    }

    useEffect(() => {
        const $container = document.querySelector('.isotope-container');
        if ($container) {
            const items = $container.querySelectorAll('.item');
            items.forEach(item => {
                if (filter === '*' || item.classList.contains(filter.slice(1))) {
                    item.classList.remove('d-none');
                } else {
                    item.classList.add('d-none');
                }
            });
        }
    }, [filter]);

    return (
        <section id="projects" className="padding-large">
            <div className="container-fluid">
                <div className="section-header offset-lg-4">
                    <h2 className="text-uppercase mb-3 left-pattern">Nuestros proyectos</h2>
                    <h3 className="text-uppercase">Explora nuestro trabajo</h3>
                </div>
                <div className="projects-isotope">
                    <div className="projects-flters d-flex flex-wrap justify-content-center my-5">
                        {
                            filters.map((filterItem) => (
                                <button className={`filter-button ${filter === filterItem.value ? 'active' : ''} border-0 bg-transparent me-5 mb-3`} key={filterItem.value} onClick={() => handleFilterClick(filterItem.value)}>
                                    {filterItem.label}
                                </button>
                            ))
                        }
                    </div>
                    <div className="row isotope-container">
                        {
                            proyectos.map((proyecto) => (
                                <div className={`col-lg-4 col-md-6 item ${proyecto.category}`} key={proyecto.id}>
                                    <div className="image-holder mx-auto zoom-effect">
                                        <Image src={proyecto.image} className="reveal-curve-top" alt={proyecto.title} width={400} height={500} />
                                    </div>
                                    <h3 className="fs-3 text-uppercase text-center mt-3 mb-5">
                                        {proyecto.title}
                                    </h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}