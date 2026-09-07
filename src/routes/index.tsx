import { createFileRoute } from "@tanstack/react-router";

import Hero from "../components/Hero";
import InfoCards from "../components/InfoCards";
import ServicesSection from "../components/ServicesSection";
import ActOnIt from "../components/ActOnIt";
import Partners from "../components/Partners";
import DecisionPlatform from "../components/DecisionPlatform";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TICAdvisor — The Global Standard for Quality Assurance" },
      {
        name: "description",
        content:
          "Expert testing, inspection and certification services that protect your brand and secure your supply chain worldwide.",
      },
      {
        property: "og:title",
        content: "TICAdvisor — The Global Standard for Quality Assurance",
      },
      {
        property: "og:description",
        content:
          "Expert testing, inspection and certification services that protect your brand and secure your supply chain worldwide.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <InfoCards />
      <ServicesSection />
      <ActOnIt />
      <Partners />
      <DecisionPlatform />
    </>
  );
}
