'use client';
import { useState, useEffect, useRef } from 'react';

interface CounterItem {
  count: number;
  label: string;
}

export default function AutoCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<{ [key: number]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  const items: CounterItem[] = [
    { count: 260, label: 'Proyectos realizados' },
    { count: 230, label: 'Clientes satisfechos' },
    { count: 20, label: 'Años de experiencia' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || animatedRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY > sectionTop - windowHeight + 100) {
        setIsVisible(true);
        animatedRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Comprobar visibilidad inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    items.forEach((item, index) => {
      let startTime: number;
      const duration = 2000;
      const startValue = 0;
      const endValue = item.count;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          const currentCount = Math.floor(startValue + (endValue - startValue) * progress);
          setCounts(prev => ({ ...prev, [index]: currentCount }));
          requestAnimationFrame(animate);
        } else {
          setCounts(prev => ({ ...prev, [index]: endValue }));
        }
      };

      requestAnimationFrame(animate);
    });
  }, [isVisible]);

  return (
    <section id="our-achievement" className="padding-large bg-gray-200" ref={sectionRef}>
      <div className="container" data-aos="fade-up">
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
              <div className="counter-info text-center flex align-items-end">
                <div className="counter-number flex items-center">
                  <h4 className="timer fw-bold m-0">
                    {counts[index] || 0}
                  </h4>
                </div>
                <p className="counter-description text-uppercase ps-2 fw-bold">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}