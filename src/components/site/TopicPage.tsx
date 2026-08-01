import { motion } from "framer-motion";
import { PageLayout } from "./PageLayout";
import { TOPICS } from "@/content/topics";

export function TopicPage({ id }: { id: keyof typeof TOPICS }) {
  const t = TOPICS[id];
  return (
    <PageLayout
      crumbs={[{ label: t.breadcrumb }]}
      eyebrow={t.eyebrow}
      title={t.heroTitle}
      subtitle={t.heroSubtitle}
    >
      <div className="grid gap-6 md:gap-8">
        {t.sections.map((s, i) => (
          <motion.article
            key={s.heading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              {s.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {s.body}
            </p>
            {s.bullets && (
              <ul className="mt-5 grid gap-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.article>
        ))}
      </div>
    </PageLayout>
  );
}
