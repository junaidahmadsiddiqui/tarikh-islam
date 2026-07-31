import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/site/TopicPage";
import { TOPICS } from "@/content/topics";

const t = TOPICS.assistant;
export const Route = createFileRoute("/assistant")({
  head: () => ({
    meta: [
      { title: t.title },
      { name: "description", content: t.description },
      { property: "og:title", content: t.title },
      { property: "og:description", content: t.description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <TopicPage id="assistant" />,
});
