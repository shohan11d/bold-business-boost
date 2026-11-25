import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MdOutlineMail, MdOutlineCall, MdOutlinePlace } from "react-icons/md";

import PageHero from "../components/PageHero";
import FadeInUp from "../components/FadeInUp";
import Button from "../components/Button";
import { ArrowRight, ClipboardList, Globe2, PackageCheck } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TIC Advisor — Talk to a TIC Specialist" },
      {
        name: "description",
        content:
          "Get in touch with TIC Advisor for testing, inspection, certification and training enquiries. Global offices and rapid response.",
      },
      { property: "og:title", content: "Contact TIC Advisor" },
      {
        property: "og:description",
        content:
          "Get in touch with TIC Advisor for testing, inspection, certification and training enquiries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const OFFICES = [
  { city: "Geneva", line: "Geneva, Switzerland" },
  { city: "Dhaka", line: "Headquarters — Dhaka, Bangladesh" },
  { city: "Singapore", line: "Singapore" },
];

const SUBJECTS = [
  "Laboratory Testing",
  "Field Inspection",
  "Product Certification",
  "Technical Auditing",
  "Training",
  "Other",
];

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-4 py-3 font-gotham text-sm text-gray-800 outline-none transition-colors focus:border-brand-cyan";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your"
        highlight="compliance goals"
        description="Tell us what you need to test, inspect or certify and a specialist will get back to you within one business day."
      />

      <section className="px-5 py-16 lg:py-24">
        <div className="custom-container grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
          <FadeInUp animation="animate-slide-in-left">
            <h2 className="mb-6 font-gotham text-3xl font-black uppercase tracking-tight leading-[0.95] text-brand-blue lg:text-4xl">
              Send us a message
            </h2>

            {sent ? (
              <div className="rounded-xl border border-brand-green/40 bg-brand-green-light/20 p-8 font-gotham">
                <p className="text-lg font-bold text-brand-blue">Thank you — message received.</p>
                <p className="mt-2 text-sm text-gray-700">
                  One of our specialists will contact you shortly.
                </p>
              </div>
            ) : (
              <form
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label className="mb-2 block font-gotham text-xs font-bold uppercase tracking-widest text-gray-600">
                    Full name
                  </label>
                  <input required name="name" className={inputClass} placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="mb-2 block font-gotham text-xs font-bold uppercase tracking-widest text-gray-600">
                    Company
                  </label>
                  <input name="company" className={inputClass} placeholder="Company Ltd." />
                </div>
                <div>
                  <label className="mb-2 block font-gotham text-xs font-bold uppercase tracking-widest text-gray-600">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    className={inputClass}
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-gotham text-xs font-bold uppercase tracking-widest text-gray-600">
                    Phone
                  </label>
                  <input name="phone" className={inputClass} placeholder="+41 22 000 00 00" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block font-gotham text-xs font-bold uppercase tracking-widest text-gray-600">
                    Service of interest
                  </label>
                  <select name="subject" className={inputClass} defaultValue={SUBJECTS[0]}>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block font-gotham text-xs font-bold uppercase tracking-widest text-gray-600">
                    How can we help?
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className={inputClass}
                    placeholder="Describe your products, markets and the standards you need to meet."
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" variant="default" className="px-8 py-3 font-bold">
                    Send message
                  </Button>
                </div>
              </form>
            )}
          </FadeInUp>

          <FadeInUp animation="animate-slide-in-right">
            <div className="rounded-xl bg-brand-blue p-8 font-gotham text-white">
              <h3 className="mb-6 text-xl font-bold uppercase text-brand-green-light">
                Direct contacts
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MdOutlineMail className="mt-0.5 h-5 w-5 text-brand-cyan-light" />
                  <span>contact@ticadvisor.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MdOutlineCall className="mt-0.5 h-5 w-5 text-brand-cyan-light" />
                  <span>+41 22 000 00 00</span>
                </li>
              </ul>

              <h3 className="mt-10 mb-6 text-xl font-bold uppercase text-brand-green-light">
                Offices
              </h3>
              <ul className="space-y-5 text-sm">
                {OFFICES.map((office) => (
                  <li key={office.city} className="flex items-start gap-3">
                    <MdOutlinePlace className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan-light" />
                    <span>
                      <span className="block font-bold">{office.city}</span>
                      <span className="text-white/80">{office.line}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-16 lg:py-24">
        <div className="custom-container">
          <FadeInUp>
            <p className="eyebrow text-brand-blue-light">A good place to start</p>
            <h2 className="mt-4 max-w-3xl font-gotham text-3xl font-black uppercase leading-tight text-brand-blue lg:text-5xl">
              What would help us guide you?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600">
              A few details help our team understand the question and point you toward the right conversation.
            </p>
          </FadeInUp>
          <div className="mt-9 grid gap-px bg-gray-200 md:grid-cols-3">
            <div className="bg-white p-7 lg:p-9">
              <PackageCheck className="h-8 w-8 text-brand-blue-light" strokeWidth={1.6} aria-hidden="true" />
              <h3 className="mt-5 font-gotham text-lg font-black uppercase text-brand-blue">Product or material</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">Tell us what you make, source, ship or manage.</p>
            </div>
            <div className="bg-white p-7 lg:p-9">
              <Globe2 className="h-8 w-8 text-brand-blue-light" strokeWidth={1.6} aria-hidden="true" />
              <h3 className="mt-5 font-gotham text-lg font-black uppercase text-brand-blue">Market or location</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">Share the destination market or the site that needs support.</p>
            </div>
            <div className="bg-white p-7 lg:p-9">
              <ClipboardList className="h-8 w-8 text-brand-blue-light" strokeWidth={1.6} aria-hidden="true" />
              <h3 className="mt-5 font-gotham text-lg font-black uppercase text-brand-blue">Your main question</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">Describe the standard, concern or outcome you are working toward.</p>
            </div>
          </div>
          <Link to="/services" className="mt-8 inline-flex items-center gap-2 font-gotham text-sm font-bold uppercase text-brand-blue transition-colors hover:text-brand-green">
            Explore all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
