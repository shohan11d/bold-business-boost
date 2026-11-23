import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import ServiceCategoryPage from "../components/ServiceCategoryPage";
import serviceDetails from "../data/serviceDetails.js";

const page = serviceDetails.certification;

export const Route = createFileRoute("/services_/certification")({
  head: () => ({
    meta: [
      { title: "Certification Services — TIC Advisor" },
      { name: "description", content: "Certification and conformity assessment to help demonstrate that products and systems meet defined requirements." },
      { property: "og:title", content: "Certification Services | TIC Advisor" },
      { property: "og:description", content: "Certification and conformity assessment to help demonstrate that products and systems meet defined requirements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/services/certification" },
    ],
  }),
  component: CertificationPage,
});

function CertificationPage() {
  return <ServiceCategoryPage page={page} Icon={BadgeCheck} />;
}