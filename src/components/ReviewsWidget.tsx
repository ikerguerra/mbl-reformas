'use client';

import { useEffect, useRef } from 'react';

export default function ReviewsWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = 'review-loader-script';

    // Evita insertar el script más de una vez
    if (widgetRef.current && !document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.defer = true;
      script.async = true;
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="my-6" ref={widgetRef}>
      {/* Aquí aparecerá el widget cargado por el script */}
      <div className="elfsight-app-836eeb06-1a2f-4f4e-8b8e-44f080150c0a" data-elfsight-app-lazy></div>
    </div>

  );
}
