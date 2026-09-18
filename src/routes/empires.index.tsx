import { createFileRoute } from "@tanstack/react-router";
import { CategoryIndex } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/empires/")({
    component: () => <CategoryIndex id="empires" />,
});