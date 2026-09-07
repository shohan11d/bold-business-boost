import Button from "./Button";

const CTASection = () => {
  return (
    <section className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-5">
      <div className="mx-auto max-w-[980px]">
        <div className="border-l-8 border-brand-green-light bg-brand-blue px-6 py-12 text-left shadow-card md:px-14 md:py-14">
          <h2 className="font-gotham text-3xl font-black uppercase tracking-tight text-white md:text-5xl">
            See. Decide. Act.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            TicAdvisor is the central platform where quality verification,
            analytics and powerful tools combine to deliver trusted compliance.
          </p>
          <Button className="mt-8 px-8 py-4 text-sm">Get started</Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
