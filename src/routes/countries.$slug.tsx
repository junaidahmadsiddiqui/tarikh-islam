import { createFileRoute } from "@tanstack/react-router";
import { CategoryDetail } from "@/components/site/CategoryPage";
import { CATEGORIES } from "@/content/people";

export const Route = createFileRoute("/countries/$slug")({
  head: ({ params }) => {
    const entry = CATEGORIES.countries.entries.find((e) => e.slug === params.slug);
    const title = entry ? `${entry.name} — Tarikh-ul-Islam` : "Country — Tarikh-ul-Islam";
    const description = entry?.summary ?? "A Muslim-majority country and its Islamic heritage.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  return <CategoryDetail id="countries" slug={slug} />;
}
