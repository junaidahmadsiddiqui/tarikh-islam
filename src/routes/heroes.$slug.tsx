import { createFileRoute } from "@tanstack/react-router";
import { CategoryDetail } from "@/components/site/CategoryPage";
import { CATEGORIES } from "@/content/people";

export const Route = createFileRoute("/heroes/$slug")({
  head: ({ params }) => {
    const entry = CATEGORIES.heroes.entries.find((e) => e.slug === params.slug);
    const title = entry ? `${entry.name} — Tarikh-ul-Islam` : "Hero — Tarikh-ul-Islam";
    const description = entry?.summary ?? "Biography of an Islamic hero.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  return <CategoryDetail id="heroes" slug={slug} />;
}
