'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const AnimatedParallax = () => {
  const services = [
    'reformas integrales',
    2000,
    'baños',
    2000,
    'cocinas',
    2000,
    'locales comerciales',
    2000,
    'unifamiliares',
    2000,
    'rehabilitación',
    2000,
  ];

  return (
    <section 
      className="position-relative overflow-hidden py-5" 
      style={{
        background: 'radial-gradient(circle at center center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
        minHeight: '500px'
      }}
      role="region"
      aria-label="Especialidades de MBL Reformas"
    >

      <div 
        className="parallax-bg position-absolute w-100 h-100 top-0 start-0" 
        style={{
          backgroundImage: 'url(/assets/reformas-interior-exterior.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          zIndex: -1,
          filter: 'brightness(0.9)',
        }}
        aria-hidden="true"
      />
      
      <div className="container text-center position-relative">
        <div className="py-5">
          <Image 
            src="/assets/LogoMBL-Light.svg" 
            alt="Logo MBL Reformas" 
            width={250} 
            height={114}
            className="mb-4"
            priority
          />
          
          <h3 className="fs-1 fw-bold" style={{ 
            color: '#ffffff',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            letterSpacing: '0.5px'
          }}>
            <span>Somos especialistas en </span>
            <TypeAnimation
              sequence={services}
              wrapper="span"
              speed={50}
              style={{ 
                display: 'inline-block',
                color: '#6B9071' // Color corporativo más brillante para mejor contraste
              }}
              repeat={Infinity}
            />
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AnimatedParallax;