import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/site/TopicPage";
import { TOPICS } from "@/content/topics";

const t = TOPICS.contact;
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: t.title },
      { name: "description", content: t.description },
      { property: "og:title", content: t.title },
      { property: "og:description", content: t.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <TopicPage id="contact" />,
});
