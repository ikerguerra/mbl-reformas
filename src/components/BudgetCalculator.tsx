"use client";

import React, { useEffect, useState } from "react";
import { useForm, useWatch, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from 'react-hot-toast';

// --- Types ---
interface FormValues {
    name: string;
    email: string;
    phone: string;
    housingReformType: string;
    kitchenReformType: string;
    bathReformType: string;
    constructionType: string;
    kitchenSize: string;
    quality: string;
    location: string;
    startDate: string;
    generalSize: number;
    specificWorks: string[];
    message: string;
    legalAccepted: boolean;
}

const BudgetCalculator: React.FC = () => {
    const { register, control, handleSubmit, formState: { isValid }, setValue } = useForm<FormValues>({
        mode: "onChange",
        defaultValues: {
            housingReformType: "",
            kitchenReformType: "",
            bathReformType: "",
            constructionType: "",
            kitchenSize: "",
            quality: "",
            location: "",
            startDate: "",
            generalSize: 90,
            specificWorks: [],
            message: "",
            legalAccepted: false
        }
    });

    const [totalMin, setTotalMin] = useState(0);
    const [totalMax, setTotalMax] = useState(0);

    const formValues = useWatch({ control });

    useEffect(() => {
        calculateBudget(formValues as FormValues);
    }, [formValues]);

    const calculateBudget = (values: FormValues) => {
        let basePrice = 0;

        if (values.housingReformType === "Piso Completo") basePrice += 15000 + (values.generalSize * 400);
        else if (values.housingReformType === "Chalet o Casa Unifamiliar") basePrice += 20000 + (values.generalSize * 450);
        else if (values.housingReformType === "Sólo Algunas Habitaciones") basePrice += 5000 + (values.generalSize * 300);

        if (values.kitchenReformType.includes("Cocina Estándar")) basePrice += 3500;
        else if (values.kitchenReformType.includes("Cocina Grande")) basePrice += 6000;
        else if (values.kitchenReformType.includes("Cocina con isla")) basePrice += 8000;
        else if (values.kitchenReformType.includes("Sólo cambio de muebles")) basePrice += 2500;

        if (values.bathReformType.includes("Baño Completo")) basePrice += 2800;
        else if (values.bathReformType.includes("Aseo")) basePrice += 1500;
        else if (values.bathReformType.includes("plato de ducha")) basePrice += 1200;

        if (values.constructionType && values.constructionType !== "---" && values.constructionType !== "Otro") {
            basePrice += 100000;
        }

        let multiplier = 1.0;
        if (values.quality.includes("Media")) multiplier = 1.3;
        if (values.quality.includes("Premium")) multiplier = 1.7;

        let extras = 0;
        const works = values.specificWorks || [];
        if (works.includes("Cambio de instalación eléctrica completa")) extras += 2500;
        if (works.includes("Renovación de fontanería")) extras += 1800;
        if (works.includes("Carpintería exterior (ventanas, puertas)")) extras += 4000;
        if (works.includes("Suelo radiante o climatización especial")) extras += 3500;
        if (works.includes("Aislamiento térmico y acústico")) extras += 1500;

        const total = (basePrice * multiplier) + extras;

        setTotalMin(Math.round(total * 0.95));
        setTotalMax(Math.round(total * 1.10));
    };

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
    };

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("Datos:", data);
        toast.success("Solicitud enviada correctamente.");
    };

    return (
        <section id="budget-calculator" className="padding-large bg-light">
            <div className="container">

                <div className="section-header offset-lg-3 text-center mb-5" data-aos="fade-up">
                    <h2 className="text-uppercase mb-3 left-pattern d-inline-block">Calculadora Online</h2>
                    <h3 className="text-uppercase text-muted">Obtén tu presupuesto al instante</h3>
                </div>

                <Toaster position="bottom-center" />

                <div className="row g-5">

                    {/* === FORM COLUMN === */}
                    <div className="col-lg-8 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                        <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white shadow-sm rounded border border-light">

                            {/* 1. CONTACTO */}
                            <div className="mb-5">
                                <h4 className="border-bottom pb-2 mb-4 text-uppercase fs-5 fw-bold text-dark">
                                    <span className="text-primary me-2">01.</span>Tus Datos
                                </h4>
                                <div className="row g-3">
                                    <div className="col-md-4">
                                        <label className="form-label fw-bold small text-uppercase">Nombre Completo</label>
                                        <input type="text" {...register("name", { required: true })} className="form-control" placeholder="Nombre" />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label fw-bold small text-uppercase">Email</label>
                                        <input type="email" {...register("email", { required: true })} className="form-control" placeholder="tu@email.com" />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label fw-bold small text-uppercase">Teléfono</label>
                                        <input type="tel" {...register("phone", { required: true })} className="form-control" placeholder="Teléfono" />
                                    </div>
                                </div>
                            </div>

                            {/* 2. PROYECTO */}
                            <div className="mb-5">
                                <h4 className="border-bottom pb-2 mb-4 text-uppercase fs-5 fw-bold text-dark">
                                    <span className="text-primary me-2">02.</span>Detalles del Proyecto
                                </h4>

                                <div className="row g-4 mb-4">
                                    <div className="col-md-6">
                                        <label className="form-label fw-bold small text-uppercase">Tipo de Reforma Integral</label>
                                        <select {...register("housingReformType")} className="form-select">
                                            <option value="">— Seleccionar —</option>
                                            <option value="Piso Completo">Piso Completo</option>
                                            <option value="Chalet o Casa Unifamiliar">Chalet o Casa Unifamiliar</option>
                                            <option value="Sólo Algunas Habitaciones">Sólo Algunas Habitaciones</option>
                                            <option value="Otro">Otro</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-bold small text-uppercase">Construcción Nueva</label>
                                        <select {...register("constructionType")} className="form-select">
                                            <option value="---">— Seleccionar —</option>
                                            <option value="Terreno ya disponible">Terreno ya disponible</option>
                                            <option value="Buscando Terreno">Buscando Terreno</option>
                                            <option value="Proyecto Inicial">Proyecto Inicial</option>
                                            <option value="Presupuesto para construcción">Presupuesto para construcción</option>
                                            <option value="Otro">Otro</option>
                                        </select>
                                    </div>
                                </div>

                                {/* SUB-SECCIONES ESPACIALES */}
                                <div className="row g-3">
                                    <div className="col-md-4">
                                        <label className="form-label fw-bold small text-uppercase">Cocina</label>
                                        <select {...register("kitchenReformType")} className="form-select">
                                            <option value="---">— No / Seleccionar —</option>
                                            <option value="Cocina Estándar (hasta 10 m²)">Cocina Estándar (hasta 10 m²)</option>
                                            <option value="Cocina Grande (más de 10 m²)">Cocina Grande (&gt; 10 m²)</option>
                                            <option value="Cocina con isla o desayunador">Cocina con isla</option>
                                            <option value="Sólo cambio de muebles">Sólo muebles</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label fw-bold small text-uppercase">Baño</label>
                                        <select {...register("bathReformType")} className="form-select">
                                            <option value="---">— No / Seleccionar —</option>
                                            <option value="Baño Completo">Baño Completo</option>
                                            <option value="Aseo o medio baño">Aseo</option>
                                            <option value="Baño Principal con plato de ducha">Baño c/ ducha</option>
                                            <option value="Baño con bañera">Baño c/ bañera</option>
                                            <option value="Cambiar bañera por plato de ducha">Cambio bañera x ducha</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label fw-bold small text-uppercase">Calidad Materiales</label>
                                        <select {...register("quality")} className="form-select">
                                            <option value="---">— Seleccionar —</option>
                                            <option value="Económica - Buena calidad y precio ajustado">Económica</option>
                                            <option value="Media - Equilibrio perfecto Calidad-Precio">Media (Estándar)</option>
                                            <option value="Premium - Materiales de Primera y precio personalizado">Premium</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Logic Helpers */}
                                {(formValues.housingReformType === "Piso Completo" || formValues.housingReformType === "Chalet o Casa Unifamiliar") && (
                                    <div className="alert alert-light border mt-4">
                                        <label className="form-label fw-bold small text-uppercase">Superficie Total Aproximada (m²)</label>
                                        <input type="number" {...register("generalSize")} className="form-control w-50" placeholder="Ej: 90" />
                                        <div className="form-text">Dato necesario para el cálculo integral.</div>
                                    </div>
                                )}
                            </div>

                            {/* 3. EXTRAS */}
                            <div className="mb-5">
                                <label className="form-label fw-bold small text-uppercase d-block mb-3 text-secondary">Trabajos Específicos</label>
                                <div className="row g-2">
                                    {[
                                        "Instalación eléctrica",
                                        "Fontanería",
                                        "Aislamiento térmico",
                                        "Humedades",
                                        "Ventanas / Puertas",
                                        "Suelo radiante",
                                        "Diseño 3D",
                                        "Licencias"
                                    ].map((work) => (
                                        <div key={work} className="col-6 col-md-3">
                                            <div className="form-check p-3 border rounded bg-light h-100 position-relative">
                                                <input className="form-check-input" type="checkbox" value={work} {...register("specificWorks")} id={`chk-${work}`} />
                                                <label className="form-check-label small stretched-link" htmlFor={`chk-${work}`}>
                                                    {work}
                                                </label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 4. FINAL */}
                            <div className="row g-4 align-items-end">
                                <div className="col-md-8">
                                    <label className="form-label fw-bold small text-uppercase">¿Qué tienes en mente?</label>
                                    <textarea {...register("message")} className="form-control" rows={3} placeholder="Cuéntanos más detalles..."></textarea>
                                </div>
                                <div className="col-md-4 text-end">
                                    <label className="form-check-label text-muted small d-block mb-2">
                                        <input className="form-check-input me-2" type="checkbox" {...register("legalAccepted", { required: true })} />
                                        Acepto la <a href="/aviso-legal" className="text-dark fw-bold text-decoration-none">política de privacidad</a>
                                    </label>

                                    <button
                                        type="submit"
                                        disabled={!isValid || !formValues.legalAccepted}
                                        className={`btn-slide btn-medium hover-slide-right text-uppercase ${!isValid || !formValues.legalAccepted ? "bg-secondary text-white disabled border-0" : "btn-dark"}`}
                                        style={{ width: '100%', textAlign: 'center' }}
                                    >
                                        <span>Solicitar Estimación</span>
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>

                    {/* === SUMMARY COLUMN === */}
                    <div className="col-lg-4 order-1 order-lg-2">
                        <div className="sticky-top" style={{ top: '120px', zIndex: 5 }}>
                            <div className="card border-0 shadow-lg bg-dark text-white mb-4">
                                <div className="card-header bg-transparent border-bottom border-secondary py-3">
                                    <div className="d-flex align-items-center">
                                        <FontAwesomeIcon icon={faCalculator} className="text-primary me-2" />
                                        <span className="text-uppercase fw-bold small text-primary tracking-wide">Tu Estimación</span>
                                    </div>
                                </div>
                                <div className="card-body text-center py-5">
                                    <h2 className="display-4 fw-bold text-white mb-0">
                                        {formatCurrency(totalMin).replace(",00", "").replace(" €", "")}€
                                    </h2>
                                    <div className="my-2 border-top border-secondary w-50 mx-auto opacity-50"></div>
                                    <p className="small text-muted mb-0">
                                        Rango máximo: <span className="text-white fw-bold">{formatCurrency(totalMax).replace(",00", "").replace(" €", "")}€</span>
                                    </p>
                                </div>
                                <div className="card-footer bg-secondary bg-opacity-10 border-top border-secondary py-3">
                                    <ul className="list-unstyled mb-0 small text-light opacity-75">
                                        <li className="d-flex justify-content-between mb-1">
                                            <span>Reforma:</span>
                                            <span className="fw-bold">{formValues.housingReformType || "—"}</span>
                                        </li>
                                        <li className="d-flex justify-content-between mb-1">
                                            <span>Cocina/Baño:</span>
                                            <span className="fw-bold">{[formValues.kitchenReformType, formValues.bathReformType].some(v => v && v !== "---") ? "Sí" : "No"}</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <span>Calidad:</span>
                                            <span className="fw-bold text-primary">{(formValues.quality || "").split(" -")[0] || "—"}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="alert alert-info border-0 shadow-sm d-flex align-items-start">
                                <div className="me-3 mt-1">
                                    <FontAwesomeIcon icon={faClipboardCheck} className="fs-4" />
                                </div>
                                <div>
                                    <h6 className="fw-bold text-uppercase small mb-1">Presupuesto sin compromiso</h6>
                                    <p className="small mb-0 text-muted">Este cálculo es aproximado. Envía tu solicitud para una visita técnica gratuita.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BudgetCalculator;
