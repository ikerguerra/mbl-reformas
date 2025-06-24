'use client';
import { useEffect } from "react";

// Este componente se encarga de importar y ejecutar el JavaScript de Bootstrap en el lado del cliente.
export default function BootstrapClient() {
    useEffect(() => {
        // Importación incluye el JavaScript de Bootstrap cuando el componente se monta.
        import('bootstrap');
    }, []);

    // El componente no necesita renderizar nada, por eso retornamos un fragmento vacío.
    return <></>;
}