import React from "react";
import CTASection from "./CTASection";
import FadeInUp from "./FadeInUp";

import cards from "../data/platformCards.json";

const DecisionPlatform = () => {
  return (
    <section className="relative z-20 bg-white px-5 py-8 lg:py-12 lg:pt-40 text-gray-900">
      <div className="custom-container pb-12 md:pb-20 lg:pb-50">
        <div className="mx-auto flex flex-col items-center">
          {/* Header Section */}
          <div className="text-center mb-12">
            <FadeInUp>
              <h2 className="mt-3 mb-8 font-gotham text-4xl md:text-6xl lg:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r to-brand-blue-light from-brand-green">
                Testing. Inspection. Certification
              </h2>
            </FadeInUp>
            <FadeInUp delay="delay-100">
              <p className="mt-2 mb-3 text-left text-base md:text-xl md:mb-4 lg:mx-32 text-gray-600">
                When the scope of your supply chain is global and regulatory
                requirements change frequently, the potential for compliance
                risks increases.
              </p>
            </FadeInUp>
            <FadeInUp delay="delay-200">
              <p className="mt-2 mb-3 text-left text-base md:text-xl md:mb-4 lg:mx-32 text-gray-600">
                TicAdvisor combines powerful testing, inspection, and
                certification capabilities into a single trusted partnership,
                providing our clients with the critical insights needed to
                ensure safety and make decisions with confidence.
              </p>
            </FadeInUp>
            {/* 4-Column Cards Grid */}
            <div className="grid w-full grid-cols-1 justify-items-center gap-4 pt-4 pb-8 md:grid-cols-2 lg:grid-cols-4">
              {cards.map((card, idx) => (
                <FadeInUp
                  key={idx}
                  delay={`delay-${(idx % 4) * 100}`}
                  className="w-full h-full flex"
                >
                  <div className="w-full flex-1 px-6 py-8 group rounded-xl border border-gray-200  bg-brand-blue text-left font-gotham transition-all duration-300 hover:border-brand-cyan-light hover:shadow-lg cursor-default">
                    <h6 className="mt-4 mb-4 md:mt-8 md:mb-4 text-xl md:text-2xl uppercase text-brand-green-light font-bold transition-colors duration-300 group-hover:text-white">
                      {card.title.split(" ").map((word, i) => (
                        <React.Fragment key={i}>
                          {word}
                          {i === 0 && <br />}
                        </React.Fragment>
                      ))}
                    </h6>
                    <p className="mt-2 mb-2 font-gotham text-sm text-white">
                      {card.description}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </section>
  );
};

export default DecisionPlatform;
