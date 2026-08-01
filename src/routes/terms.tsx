import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/site/TopicPage";
import { TOPICS } from "@/content/topics";

const t = TOPICS.terms;
export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: t.title },
      { name: "description", content: t.description },
      { property: "og:title", content: t.title },
      { property: "og:description", content: t.description },
      { property: "og:type", content: "article" },
    ],
  }),
  component: () => <TopicPage id="terms" />,
});
