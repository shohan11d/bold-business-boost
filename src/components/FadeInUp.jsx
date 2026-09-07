import React, { useEffect, useState, useRef } from 'react';

const FadeInUp = ({ children, delay = '', className = '', animation = 'animate-fade-in-up' }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${isInView ? `${animation} ${delay}` : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInUp;
