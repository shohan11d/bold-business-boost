import React from "react";
import FadeInUp from "./FadeInUp";

const ActOnIt = () => {
  return (
    <section className="overflow-hidden bg-white py-15 lg:py-24 px-5">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-10">
          <FadeInUp>
            <h2 className="mb-4 font-gotham text-2xl lg:text-6xl font-bold leading-tight tracking-tight text-brand-blue">
              Don't just identify risks.
            </h2>
          </FadeInUp>
          <FadeInUp delay="delay-100">
            <h1 className="mt-10 cursor-default bg-clip-text font-gotham text-6xl md:text-9xl font-black tracking-tight text-transparent transition-all duration-500 bg-linear-to-r from-brand-blue to-brand-green">
              Act On It.
            </h1>
          </FadeInUp>
        </div>

        {/* Text Blocks */}
        {/* Paragraph 1 - Left Staggered */}
        <FadeInUp delay="delay-200" animation="animate-slide-in-left">
          <p className="mt-3 mb-6 md:pr-[20vw] font-gotham text-base md:text-2xl font-medium leading-relaxed text-left text-gray-700">
            In the fast-paced world of global trade and production, simply
            knowing your standards isn't enough. You need actionable insights
            that allow you to anticipate challenges before they become
            liabilities.
          </p>
        </FadeInUp>

        {/* Paragraph 2 - Right Staggered */}
        <FadeInUp delay="delay-300" animation="animate-slide-in-right">
          <p className="mt-3 mb-6 md:pl-[25vw] font-gotham text-base md:text-2xl font-medium leading-relaxed text-left text-gray-700">
            TicAdvisor provides a comprehensive suite of verification,
            inspection, and certification tools that turn complex data into
            decisive action. Stay compliant, ensure safety, and lead with
            confidence.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};

export default ActOnIt;
