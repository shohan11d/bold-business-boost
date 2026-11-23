import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import ServiceCategoryPage from "../components/ServiceCategoryPage";
import serviceDetails from "../data/serviceDetails.js";

const page = serviceDetails.training;

export const Route = createFileRoute("/services_/training")({
  head: () => ({
    meta: [
      { title: "Training Services — TIC Advisor" },
      { name: "description", content: "Practical, standards-based training to help quality teams strengthen their day-to-day skills." },
      { property: "og:title", content: "Training Services | TIC Advisor" },
      { property: "og:description", content: "Practical, standards-based training to help quality teams strengthen their day-to-day skills." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/services/training" },
    ],
  }),
  component: TrainingPage,
});

function TrainingPage() {
  return <ServiceCategoryPage page={page} Icon={GraduationCap} />;
}