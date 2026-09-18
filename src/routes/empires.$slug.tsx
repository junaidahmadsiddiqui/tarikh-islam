import { createFileRoute } from "@tanstack/react-router";
import { CategoryDetail } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/empires/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();

  return <CategoryDetail id="empires" slug={slug} />;
}