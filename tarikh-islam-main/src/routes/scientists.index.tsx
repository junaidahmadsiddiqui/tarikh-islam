import { createFileRoute } from "@tanstack/react-router";
import { CategoryIndex } from "@/components/site/CategoryPage";
import { CATEGORIES } from "@/content/people";

const c = CATEGORIES.scientists;
export const Route = createFileRoute("/scientists/")({
  head: () => ({
    meta: [
      { title: c.title },
      { name: "description", content: c.description },
      { property: "og:title", content: c.title },
      { property: "og:description", content: c.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CategoryIndex id="scientists" />,
});
