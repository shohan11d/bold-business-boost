import { useNavigate } from "@tanstack/react-router";
import Button from "./Button";
import CountUp from "./CountUp";
import GlobeVisual from "./GlobeVisual";

const STATS = [
  { value: "60+", label: "Countries served" },
  { value: "180", label: "Accredited labs" },
  { value: "4,500", label: "Experts worldwide" },
];

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] overflow-hidden bg-gradient-to-br from-brand-blue-deep via-brand-blue to-brand-blue-deep">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-35" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-5 py-4">
        <div className="grid items-center gap-8 lg:grid-cols-[1.16fr_.84fr] lg:gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-green-light">
              Testing. Inspection. Certification
            </p>
            <h1 className="mt-4 font-gotham text-4xl font-black uppercase leading-[0.97] text-white sm:text-5xl lg:text-[2.75rem] xl:text-5xl 2xl:text-7xl">
              The global
              <br />
              standard for
              <br />
              <span className="text-brand-green-light">quality assurance</span>
            </h1>
            <div className="mt-6 max-w-xl border-l-4 border-brand-green-light pl-5">
              <p className="text-base leading-relaxed text-white/85 lg:text-lg">
                Protect your brand and secure your entire supply chain.
                TIC Advisor delivers expert testing, inspection and certification
                services built for the most rigorous international standards.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button
                className="px-8 py-4 text-sm"
                onClick={() => navigate({ to: "/contact" })}
              >
                Talk to an expert
              </Button>
              <Button
                variant="outline"
                className="px-8 py-4 text-sm"
                onClick={() => navigate({ to: "/services" })}
              >
                Explore services
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <GlobeVisual />
          </div>
        </div>

        <div className="mt-6 border-y border-white/15 bg-white/5">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-24 flex-col items-center justify-center px-3 py-3 text-center sm:min-h-24"
              >
                <p className="font-gotham text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-2 max-w-36 text-[10px] font-bold uppercase tracking-widest text-brand-cyan-light sm:text-[11px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
