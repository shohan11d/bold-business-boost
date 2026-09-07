import React from "react";
import GlowBackground from "./GlowBackground";
import { 
  MdOutlineFastfood, 
  MdOutlineAgriculture, 
  MdOutlineLocalShipping, 
  MdOutlineShoppingBag, 
  MdOutlineMedicalServices, 
  MdOutlineSecurity, 
  MdOutlineAssignment, 
  MdOutlinePublic 
} from "react-icons/md";

const SERVICES = [
  {
    title: "Food",
    description: "Safeguard food safety with Cotecna's advanced analytical services, offering efficient solutions, crisis management, and quick.",
    icon: <MdOutlineFastfood className="text-brand-cyan-light/80 group-hover:text-white w-12 h-12" />,
    color: "text-brand-cyan-light"
  },
  {
    title: "Agriculture",
    description: "Mitigate risk, ensure compliance, and boost transparency with our tailored agricultural testing, inspection, and certification.",
    icon: <MdOutlineAgriculture className="text-brand-cyan-light/80 group-hover:text-white w-12 h-12" />,
    color: "text-brand-cyan-light"
  },
  {
    title: "Minerals & Metals",
    description: "From exploration to recycling, Cotecna provides inspection, sampling, testing, and certification services, ensuring an efficient.",
    icon: <MdOutlineLocalShipping className="text-brand-cyan-light/80 group-hover:text-white w-12 h-12" />,
    color: "text-brand-cyan-light"
  },
  {
    title: "Consumer Products",
    description: "With Cotecna's expert network, ensure your products meet specifications, quality standards, and regulatory requirements, at.",
    icon: <MdOutlineShoppingBag className="text-brand-cyan-light/80 group-hover:text-white w-12 h-12" />,
    color: "text-brand-cyan-light"
  },
  {
    title: "Pharmaceutical",
    description: "Cotecna offers advanced pharmaceutical testing services to evaluate potency, dosage, and quality, for safe and effective.",
    icon: <MdOutlineMedicalServices className="text-brand-cyan-light/80 group-hover:text-white w-12 h-12" />,
    color: "text-brand-cyan-light"
  },
  {
    title: "Certification",
    description: "Certification, verification and audit services help organisations demonstrate that they meet the requirements of key national or.",
    icon: <MdOutlineSecurity className="text-brand-cyan-light/80 group-hover:text-white w-12 h-12" />,
    color: "text-brand-cyan-light"
  },
  {
    title: "Verification of Conformity",
    description: "Ensure that your shipments meet destination standards through a valid Certificate of Conformity from Cotecna's Verification of.",
    icon: <MdOutlineAssignment className="text-brand-cyan-light/80 group-hover:text-white w-12 h-12" />,
    color: "text-brand-cyan-light"
  },
  {
    title: "Carbon & Environmental Solutions",
    description: "Carbon and Environmental certification schemes allow organisations to demonstrate their product and supply chain.",
    icon: <MdOutlinePublic className="text-brand-cyan-light/80 group-hover:text-white w-12 h-12" />,
    color: "text-brand-cyan-light"
  }
];

function ServicesSection() {
  return (
    <section className="bg-brand-blue py-12 md:py-24 lg:py-34 px-5 relative overflow-hidden">
      <GlowBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl font-bold text-brand-green-light mb-6 font-monsterrat uppercase tracking-wide">Our Services</h2>
          <p className="max-w-4xl mx-auto text-gray-200 font-medium text-sm lg:text-base leading-relaxed opacity-90">
            We provide testing, inspection, and certification services to help our clients navigate evolving regulations, ensure product compliance, and support their sustainability journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg flex flex-col items-start gap-4 h-full rounded-xl cursor-default group"
            >
              <div className="flex items-center justify-start w-full mb-2">
                <div className="bg-white/5 p-3 rounded-lg backdrop-blur-md">
                  {service.icon}
                </div>
              </div>
              <div className="text-left">
                <h3 className={`text-xl font-bold mb-3 font-monsterrat text-brand-green-light/80 transition-colors duration-300 group-hover:text-white`}>
                  {service.title}
                </h3>
                <p className="text-gray-300 text-xs lg:text-[13px] leading-relaxed font-open-sans">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default ServicesSection;
