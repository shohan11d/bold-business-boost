import Button from "./Button";
import GlowBackground from "./GlowBackground";

const STATS = [
  { value: "60+", label: "Countries" },
  { value: "180", label: "Accredited labs" },
  { value: "4,500", label: "Experts" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue">
      <GlowBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 lg:py-32">
        <div className="max-w-4xl">
          <p className="eyebrow text-brand-green-light">
            Testing. Inspection. Certification
          </p>
          <h1 className="mt-6 font-gotham text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
            The global
            <br />
            standard for
            <br />
            <span className="text-brand-green-light">quality assurance</span>
          </h1>
          <div className="mt-8 max-w-2xl border-l-4 border-brand-green-light pl-5">
            <p className="text-base leading-relaxed text-white/85 lg:text-lg">
              Protect your brand and secure your entire supply chain. TICAdvisor
              delivers expert testing, inspection and certification services
              built for the most rigorous international standards.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button className="px-8 py-4 text-sm">Talk to an expert</Button>
            <Button variant="outline" className="px-8 py-4 text-sm">
              Explore services
            </Button>
          </div>
        </div>

        <div className="mt-16 grid max-w-3xl grid-cols-3 border-t-2 border-white/15">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-r border-white/10 py-6 pr-4 last:border-r-0">
              <p className="font-gotham text-3xl font-black text-white lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-brand-cyan-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
