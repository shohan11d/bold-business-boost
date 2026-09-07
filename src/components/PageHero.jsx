import GlowBackground from "./GlowBackground";

function PageHero({ eyebrow, title, highlight, description }) {
  return (
    <section className="relative overflow-hidden bg-brand-blue py-16 lg:py-28">
      <GlowBackground />
      <div className="absolute inset-0 z-0 bg-linear-to-b from-black/40 via-transparent to-brand-blue/20"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 text-white">
        <div className="max-w-3xl font-monsterrat">
          <p className="mb-2 animate-fade-in-up font-gotham text-lg text-brand-cyan-light opacity-0">
            {eyebrow}
          </p>
          <h1 className="mb-4 animate-fade-in-up font-light leading-tight text-4xl opacity-0 delay-100 lg:text-6xl">
            {title}{" "}
            {highlight && (
              <span className="text-brand-green-light">{highlight}</span>
            )}
          </h1>
          <p className="mt-2 animate-fade-in-up font-monsterrat text-sm opacity-0 delay-200 lg:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
