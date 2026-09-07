import React from "react";

const CTASection = () => {
  return (
    <section className="absolute bottom-0 left-0 right-0 translate-y-[50%] px-5">
      <div className="mx-auto max-w-[900px]">
        <div className="py-10 px-6 md:px-15 md:py-15 rounded-xl border border-gray-800/50 bg-linear-to-r from-brand-green to-brand-blue text-center shadow-2xl">
          <h2 className="mb-4 font-gotham text-2xl md:text-3xl font-bold text-white">
            See. Decide. Act.
          </h2>
          <p className="mt-3 mb-8 font-gotham text-base md:text-xl leading-relaxed text-white">
            TicAdvisor is the central platform where quality verification, 
            analytics, and powerful tools are combined to deliver trusted compliance.
          </p>
          <button className="transform rounded-lg bg-brand-green-light text-brand-blue px-8 py-4 font-bold transition-all duration-300 text-sm  hover:bg-brand-green hover:text-white">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
