import Button from "./Button";
import GlowBackground from "./GlowBackground";
import CountUp from "./CountUp";

const STATS = [
  { value: "60+", label: "Countries" },
  { value: "180", label: "Accredited labs" },
  { value: "4,500", label: "Experts" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue">
      <GlowBackground />

      {/* large globe watermark */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full opacity-[0.06] lg:w-2/3"
        aria-hidden="true"
      >
        <img
          src="/footer-globe.svg"
          alt=""
          className="h-full w-full object-contain object-right"
        />
      </div>

      {/* diagonal accent */}
      <div
        className="pointer-events-none absolute top-0 right-0 z-0 h-full w-1/3 origin-top-right -skew-x-12 bg-brand-green-light/5"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-green-light">
              Testing. Inspection. Certification
            </p>
            <h1 className="mt-6 font-gotham text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              The global
              <br />
              standard for
              <br />
              <span className="text-brand-green-light">quality assurance</span>
            </h1>
            <div className="mt-8 max-w-xl border-l-4 border-brand-green-light pl-5">
              <p className="text-base leading-relaxed text-white/85 lg:text-lg">
                Protect your brand and secure your entire supply chain.
                TICAdvisor delivers expert testing, inspection and certification
                services built for the most rigorous international standards.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="px-8 py-4 text-sm">Talk to an expert</Button>
              <Button variant="outline" className="px-8 py-4 text-sm">
                Explore services
              </Button>
            </div>
          </div>

          {/* right-side visual block */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square max-w-lg">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-8 rounded-full border border-white/10" />
              <div className="absolute inset-16 rounded-full border border-brand-green-light/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-gotham text-8xl font-black text-white/90">
                    TIC
                  </p>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.3em] text-brand-green-light">
                    Advisor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* stats bar */}
        <div className="mt-16 border-t-2 border-white/15 bg-white/5 backdrop-blur-sm lg:mt-20">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center px-2 py-7 text-center sm:py-8"
              >
                <p className="font-gotham text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-cyan-light sm:text-[11px]">
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
