import Button from "./Button";
import GlowBackground from "./GlowBackground";
import { useState, useEffect } from "react";

function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const textVariations = [
    "Quality Assurance",
    "Safety Standards",
    "Excellence Certified",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textVariations.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-10 lg:py-30 overflow-hidden bg-brand-blue">
      <GlowBackground />
      {/* Subtle Linear Overlay for Contrast */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-brand-blue/20 z-0"></div>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-5 text-white z-10">
        <div className="max-w-3xl font-monsterrat">
          <p className="mb-2 font-gotham text-lg text-brand-cyan-light animate-fade-in-up opacity-0">
            Testing. Inspection. Certification
          </p>
          <h1 className="mb-4 text-4xl lg:text-6xl font-light leading-tight font-Montserrat animate-fade-in-up delay-100 opacity-0">
            The Global Standard for <br />
            <span className="animate-text-cycle inline-block text-brand-green-light  opacity-80">
              {textVariations[textIndex]}
            </span>
          </h1>
          <p className="mt-2 mb-4 font-monsterrat text-sm lg:text-lg animate-fade-in-up delay-200 opacity-0">
            Protect your brand and ensure safety across your entire supply
            chain. TICAdvisor delivers expert testing, inspection, and
            certification services to meet the most rigorous international standards.
          </p>
          <div className="animate-fade-in-up delay-300 opacity-0">
            <Button variant="square" className="px-6 py-3 font-bold">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
