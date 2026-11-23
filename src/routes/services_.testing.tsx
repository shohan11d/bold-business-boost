import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical } from "lucide-react";
import ServiceCategoryPage from "../components/ServiceCategoryPage";
import serviceDetails from "../data/serviceDetails.js";

const page = serviceDetails.testing;

export const Route = createFileRoute("/services_/testing")({
  head: () => ({
    meta: [
      { title: "Testing Services — TIC Advisor" },
      { name: "description", content: "Product and laboratory testing that helps teams understand quality, composition and compliance." },
      { property: "og:title", content: "Testing Services | TIC Advisor" },
      { property: "og:description", content: "Product and laboratory testing that helps teams understand quality, composition and compliance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/services/testing" },
    ],
  }),
  component: TestingPage,
});

function TestingPage() {
  return <ServiceCategoryPage page={page} Icon={FlaskConical} />;
}