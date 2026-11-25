import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Check, MoveRight } from "lucide-react";
import PageHero from "./PageHero";
import FadeInUp from "./FadeInUp";
import Button from "./Button";

function ServiceCategoryPage({ page, Icon }) {
  const navigate = useNavigate();

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        highlight={page.highlight}
        description={page.description}
      />

      <section className="px-5 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
          <FadeInUp>
            <p className="eyebrow text-brand-blue-light">A clearer picture</p>
            <h2 className="mt-4 max-w-2xl font-gotham text-3xl font-black uppercase leading-tight text-brand-blue lg:text-5xl">
              {page.overviewTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 lg:text-lg">
              {page.overview}
            </p>
            <Link
              to="/services"
              className="mt-7 inline-flex items-center gap-2 font-gotham text-sm font-bold uppercase text-brand-blue transition-colors hover:text-brand-green"
            >
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeInUp>
          <FadeInUp animation="animate-slide-in-right">
            <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue to-brand-blue-light p-10 text-white lg:min-h-80">
              <div className="absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
              <Icon className="relative h-28 w-28 text-brand-green-light" strokeWidth={1.15} aria-hidden="true" />
              <span className="absolute bottom-6 left-7 font-gotham text-xs font-bold uppercase tracking-widest text-white/75">
                TIC Advisor · {page.eyebrow}
              </span>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeInUp>
            <p className="eyebrow text-brand-blue-light">What we cover</p>
            <h2 className="mt-4 max-w-3xl font-gotham text-3xl font-black uppercase leading-tight text-brand-blue lg:text-5xl">
              Support at every step
            </h2>
          </FadeInUp>
          <div className="mt-10 grid gap-px bg-gray-200 md:grid-cols-3">
            {page.capabilities.map((item, index) => (
              <FadeInUp key={item.title} delay={`delay-${index * 100}`}>
                <article className="h-full bg-white p-7 lg:p-9">
                  <span className="font-gotham text-sm font-black text-brand-blue-light">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 font-gotham text-lg font-black uppercase leading-tight text-brand-blue">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </article>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-blue px-5 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeInUp>
            <p className="eyebrow text-brand-cyan-light">A practical process</p>
            <h2 className="mt-4 max-w-3xl font-gotham text-3xl font-black uppercase leading-tight lg:text-5xl">
              From question to action
            </h2>
          </FadeInUp>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {page.workflow.map((step, index) => (
              <FadeInUp key={step.step} delay={`delay-${index * 100}`}>
                <div className="border-t border-white/25 pt-6">
                  <span className="font-gotham text-4xl font-black text-brand-green-light">
                    {step.step}
                  </span>
                  <h3 className="mt-5 font-gotham text-lg font-black uppercase text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
                    {step.text}
                  </p>
                  {index < page.workflow.length - 1 && (
                    <MoveRight className="mt-6 hidden h-5 w-5 text-brand-cyan-light md:block" aria-hidden="true" />
                  )}
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-l-4 border-brand-green-light bg-gradient-to-r from-brand-blue/5 to-transparent px-6 py-8 md:flex-row md:items-center md:px-10">
          <div>
            <h2 className="font-gotham text-2xl font-black uppercase leading-tight text-brand-blue lg:text-3xl">
              {page.closingTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 lg:text-base">
              {page.closingText}
            </p>
          </div>
          <Button
            className="shrink-0 gap-2 px-6 py-3 text-sm"
            onClick={() => navigate({ to: "/contact" })}
          >
            Talk to our team <Check className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}

export default ServiceCategoryPage;