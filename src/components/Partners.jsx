import React from "react";
import FadeInUp from "./FadeInUp";
import {
  FaStripe,
  FaSpotify,
  FaTwitch,
  FaApple,
  FaAmazon,
  FaGoogle,
  FaWindows,
  FaReact,
  FaSalesforce,
  FaSlack,
  FaGitlab,
  FaFigma,
} from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";

const partnersData = [
  { name: "Stripe", icon: FaStripe, color: "text-[#635BFF]", since: "2015" },
  { name: "Spotify", icon: FaSpotify, color: "text-[#1DB954]", since: "2015" },
  { name: "Apple", icon: FaApple, color: "text-white", since: "2016" },
  { name: "Twitch", icon: FaTwitch, color: "text-[#9146FF]", since: "2015" },
  { name: "Amazon", icon: FaAmazon, color: "text-[#FF9900]", since: "2017" },
  { name: "Google", icon: FaGoogle, color: "text-[#4285F4]", since: "2015" },
  {
    name: "Microsoft",
    icon: FaWindows,
    color: "text-[#00A4EF]",
    since: "2018",
  },
  { name: "React", icon: FaReact, color: "text-[#61DAFB]", since: "2015" },
  {
    name: "Salesforce",
    icon: FaSalesforce,
    color: "text-[#00A1E0]",
    since: "2019",
  },
  { name: "Slack", icon: FaSlack, color: "text-[#E01E5A]", since: "2020" },
  { name: "GitLab", icon: FaGitlab, color: "text-[#FCA121]", since: "2021" },
  { name: "Figma", icon: FaFigma, color: "text-[#F24E1E]", since: "2022" },
];

import GlowBackground from "./GlowBackground";

const Partners = () => {
  return (
    <section className="bg-brand-blue py-24 px-5 text-white relative overflow-hidden">
      <GlowBackground />
      <div className="custom-container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <FadeInUp>
            <h2 className="mb-4 font-gotham text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-brand-cyan-light to-brand-green-light">
              Our Key Partners
            </h2>
          </FadeInUp>
          <FadeInUp delay="delay-100">
            <p className="mb-6 font-gotham text-base opacity-80">
              Here at TicAdvisor we focus on markets where safety, quality, and
              compliance can unlock long-term value.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-brand-green-light hover:text-white transition-colors duration-300 font-semibold font-gotham text-sm opacity-80"
            >
              Become a partner <GoArrowRight />
            </a>
          </FadeInUp>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-16">
          {partnersData.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <FadeInUp
                key={idx}
                delay={`delay-${(idx % 4) * 100}`}
                className={`${idx >= 8 ? "hidden md:flex" : "flex"} flex-col items-center`}
              >
                <div className="h-14 flex items-center justify-center mb-3">
                  <Icon className={`text-6xl ${partner.color}`} />
                </div>
                <p className=" text-[11px] uppercase tracking-widest mb-4 font-gotham font-bold opacity-80">
                  Partner since {partner.since}
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 hover:bg-brand-cyan-light hover:text-brand-blue transition-all duration-300 text-xs font-bold font-gotham text-brand-cyan-light hover:border-brand-cyan opacity-70"
                >
                  <FiExternalLink className="text-[14px]" /> Visit website
                </a>
              </FadeInUp>
            );
          })}
        </div>

        {/* And many more */}
        <FadeInUp delay="delay-300">
          <p className="text-center mt-12 font-gotham text-lg text-white/60 italic tracking-wide">
            and many more...
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Partners;
