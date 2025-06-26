'use client';

import { useEffect, useRef } from 'react';

export default function TrustindexWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = 'trustindex-loader-script';

    // Evita insertar el script más de una vez
    if (widgetRef.current && !document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://cdn.trustindex.io/loader.js?46a952d48cd5942460864b71383';
      script.defer = true;
      script.async = true;
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="my-6" ref={widgetRef}>
      {/* Aquí aparecerá el widget cargado por el script */}
    </div>
  );
}
