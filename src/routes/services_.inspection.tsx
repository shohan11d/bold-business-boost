import { createFileRoute } from "@tanstack/react-router";
import { ScanSearch } from "lucide-react";
import ServiceCategoryPage from "../components/ServiceCategoryPage";
import serviceDetails from "../data/serviceDetails.js";

const page = serviceDetails.inspection;

export const Route = createFileRoute("/services_/inspection")({
  head: () => ({
    meta: [
      { title: "Inspection Services — TIC Advisor" },
      { name: "description", content: "Independent supplier, site, product and shipment inspections with clear, evidence-based findings." },
      { property: "og:title", content: "Inspection Services | TIC Advisor" },
      { property: "og:description", content: "Independent supplier, site, product and shipment inspections with clear, evidence-based findings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/services/inspection" },
    ],
  }),
  component: InspectionPage,
});

function InspectionPage() {
  return <ServiceCategoryPage page={page} Icon={ScanSearch} />;
}