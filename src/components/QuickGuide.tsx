'use client';

import Link from 'next/link';

const QuickGuide = () => {
  return (
    <section id="quick-guide" className="padding-large bg-dark text-white">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-header">
              <h2 className="text-uppercase mb-3 left-pattern light">Imprescindible para que nada falle en tu reforma</h2>
              <h3 className="text-uppercase light">Guía rápida de la reforma</h3>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="mb-4" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li className="mb-2">
                <strong>Resuelve las dudas</strong> más frecuentes.
              </li>
              <li className="mb-2">
                <strong>Consejos para presupuestos</strong> de reformas.
              </li>
              <li className="mb-2">
                <strong>Evita problemas graves</strong> en tu reforma.
              </li>
              <li className="mb-2">
                <strong>La clave</strong> para que tu reforma salga perfecta.
              </li>
              <li className="mb-2">
                Cual es el <strong>proceso de una reforma Integral.</strong>
              </li>
            </ul>
            <Link 
              href="/contacto"
              className="btn-slide btn-medium btn-light hover-slide-right text-uppercase mt-5"
            >
              <span>Solicitar Guía Rápida</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickGuide;