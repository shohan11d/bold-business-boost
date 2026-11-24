import { createFileRoute, Link } from "@tanstack/react-router";
import { MdOutlinePublic, MdOutlineShield, MdOutlineHandshake } from "react-icons/md";
import { ArrowUpRight } from "lucide-react";

import PageHero from "../components/PageHero";
import FadeInUp from "../components/FadeInUp";
import Button from "../components/Button";
import GlowBackground from "../components/GlowBackground";
import CountUp from "../components/CountUp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TIC Advisor — Our Mission & Global Network" },
      {
        name: "description",
        content:
          "Who we are: a global testing, inspection and certification partner helping companies prove quality, safety and compliance.",
      },
      { property: "og:title", content: "About TIC Advisor" },
      {
        property: "og:description",
        content:
          "Who we are: a global testing, inspection and certification partner helping companies prove quality, safety and compliance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    title: "Independence",
    icon: MdOutlineShield,
    text: "Our findings are impartial. We report what the evidence shows, never what is convenient.",
  },
  {
    title: "Global Reach",
    icon: MdOutlinePublic,
    text: "Laboratories, inspectors and auditors positioned where your suppliers and markets actually are.",
  },
  {
    title: "Partnership",
    icon: MdOutlineHandshake,
    text: "We work alongside your teams to turn compliance from a cost centre into a competitive edge.",
  },
];

const STATS = [
  { value: "60+", label: "Countries served" },
  { value: "180", label: "Accredited labs" },
  { value: "4,500", label: "Experts worldwide" },
  { value: "25 yrs", label: "Industry experience" },
];

const MILESTONES = [
  {
    year: "2001",
    text: "Founded as a specialist inspection bureau serving agricultural exporters.",
  },
  {
    year: "2008",
    text: "Opened our first accredited multi-discipline testing laboratory network.",
  },
  {
    year: "2015",
    text: "Expanded into consumer products, pharmaceuticals and industrial certification.",
  },
  {
    year: "2021",
    text: "Launched digital reporting, giving clients live visibility of every inspection.",
  },
  {
    year: "2026",
    text: "Serving clients across six continents with sustainability verification at the core.",
  },
];

const SERVICE_LINES = [
  { title: "Testing", path: "/services/testing", text: "Analytical evidence for product quality and compliance decisions." },
  { title: "Inspection", path: "/services/inspection", text: "Independent observations at facilities and across shipment stages." },
  { title: "Certification", path: "/services/certification", text: "Assessment against defined product, process and system requirements." },
  { title: "Training", path: "/services/training", text: "Practical learning for teams working with quality and standards." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TIC Advisor"
        title="Trusted evidence for"
        highlight="critical decisions"
        description="We exist so that manufacturers, traders and regulators can rely on the same source of truth about quality, safety and compliance."
      />

      <section className="px-5 py-16 lg:py-24">
        <div className="custom-container grid grid-cols-1 gap-12 lg:grid-cols-2">
          <FadeInUp animation="animate-slide-in-left">
            <h2 className="mb-6 font-gotham text-3xl font-black uppercase tracking-tight leading-[0.95] text-brand-blue lg:text-5xl">
              Our mission
            </h2>
            <p className="mb-4 font-gotham text-base leading-relaxed text-gray-600 lg:text-lg">
              Global supply chains move faster than the rules that govern them. TICAdvisor
              closes that gap with independent testing, inspection and certification that
              stands up to scrutiny anywhere in the world.
            </p>
            <p className="font-gotham text-base leading-relaxed text-gray-600 lg:text-lg">
              We combine accredited laboratory science with on-the-ground inspection and
              clear digital reporting, so our clients can act on risk instead of merely
              documenting it.
            </p>
          </FadeInUp>

          <FadeInUp animation="animate-slide-in-right">
            <div className="overflow-hidden rounded-xl shadow-card">
              <img
                src="/inspection.jpg"
                alt="TICAdvisor inspector reviewing product quality on site"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-blue px-5 py-16 lg:py-24">
        <GlowBackground />
        <div className="custom-container relative z-10">
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {STATS.map((stat, idx) => (
              <FadeInUp key={stat.label} delay={`delay-${(idx % 4) * 100}`}>
                <p className="font-gotham text-4xl font-black text-brand-green-light lg:text-6xl">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-2 font-gotham text-xs uppercase tracking-widest text-white/80">
                  {stat.label}
                </p>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:py-24">
        <div className="custom-container">
          <FadeInUp>
            <h2 className="mb-12 font-gotham text-3xl font-black uppercase tracking-tight leading-[0.95] text-brand-blue lg:text-5xl">
              What we stand for
            </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <FadeInUp key={value.title} delay={`delay-${(idx % 3) * 100}`}>
                  <div className="group h-full rounded-xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan hover:shadow-card">
                    <Icon className="mb-5 h-10 w-10 text-brand-blue-light transition-colors group-hover:text-brand-green" />
                    <h3 className="mb-3 font-gotham text-lg font-bold uppercase tracking-wider text-darkBlue">
                      {value.title}
                    </h3>
                    <p className="font-gotham text-sm leading-relaxed text-gray-600">
                      {value.text}
                    </p>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-16 lg:py-24">
        <div className="custom-container">
          <FadeInUp>
            <p className="eyebrow text-brand-blue-light">Our expertise</p>
            <h2 className="mt-4 max-w-3xl font-gotham text-3xl font-black uppercase leading-tight text-brand-blue lg:text-5xl">
              Four ways to strengthen confidence
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600">
              Bring testing, inspection, certification and training together around the needs of your products and supply chain.
            </p>
          </FadeInUp>
          <div className="mt-9 grid gap-px bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_LINES.map((item, idx) => (
              <FadeInUp key={item.title} delay={`delay-${idx * 100}`}>
                <Link
                  to={item.path}
                  className="group flex h-full flex-col bg-white p-6 transition-colors duration-300 hover:bg-brand-blue/5"
                >
                  <span className="font-gotham text-xs font-black text-brand-blue-light">0{idx + 1}</span>
                  <h3 className="mt-5 font-gotham text-lg font-black uppercase text-brand-blue">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{item.text}</p>
                  <ArrowUpRight className="mt-5 h-5 w-5 text-brand-blue-light transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-16 lg:py-24">
        <div className="custom-container">
          <FadeInUp>
            <h2 className="mb-12 font-gotham text-3xl font-black uppercase tracking-tight leading-[0.95] text-brand-blue lg:text-5xl">
              Our history
            </h2>
          </FadeInUp>
          <div className="border-l border-brand-cyan/40 pl-6">
            {MILESTONES.map((item, idx) => (
              <FadeInUp key={item.year} delay={`delay-${(idx % 3) * 100}`}>
                <div className="relative pb-10">
                  <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-brand-green" />
                  <p className="font-gotham text-xl font-bold text-brand-blue">{item.year}</p>
                  <p className="mt-2 max-w-2xl font-gotham text-sm text-gray-600 lg:text-base">
                    {item.text}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay="delay-200">
            <Link to="/contact">
              <Button variant="default" className="mt-4 px-8 py-3 font-bold">
                Work with us
              </Button>
            </Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
