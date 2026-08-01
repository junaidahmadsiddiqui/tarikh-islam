import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "./PageLayout";
import { CATEGORIES, type Category } from "@/content/people";

export function CategoryIndex({ id }: { id: Category["id"] }) {
  const c = CATEGORIES[id];
  return (
    <PageLayout
      crumbs={[{ label: c.navLabel }]}
      eyebrow={c.eyebrow}
      title={c.heroTitle}
      subtitle={c.heroSubtitle}
    >
      <p className="max-w-3xl text-muted-foreground">{c.intro}</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {c.entries.map((e, i) => (
          <motion.div
            key={e.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          >
            <Link
              to={`${c.path}/$slug`}
              params={{ slug: e.slug }}
              className="group block h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold">
                  {e.era}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                {e.name}
              </h3>
              <p className="mt-1 text-sm text-gold/90">{e.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {e.summary}
              </p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-gold transition-colors">
                Read profile
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}

export function CategoryDetail({ id, slug }: { id: Category["id"]; slug: string }) {
  const c = CATEGORIES[id];
  const entry = c.entries.find((e) => e.slug === slug);
  if (!entry) {
    return (
      <PageLayout
        crumbs={[{ label: c.navLabel, to: c.path }, { label: "Not found" }]}
        title="Not found"
        subtitle="This profile doesn't exist yet."
      >
        <Link to={c.path} className="text-primary hover:text-gold">
          ← Back to {c.navLabel}
        </Link>
      </PageLayout>
    );
  }
  return (
    <PageLayout
      crumbs={[{ label: c.navLabel, to: c.path }, { label: entry.name }]}
      eyebrow={entry.era}
      title={entry.name}
      subtitle={entry.subtitle}
    >
      <p className="max-w-3xl text-lg text-foreground/90">{entry.summary}</p>
      <div className="mt-10 grid gap-6">
        {entry.sections.map((s) => (
          <article
            key={s.heading}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft"
          >
            <h2 className="font-display text-2xl font-bold text-foreground">{s.heading}</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <Link to={c.path} className="text-primary hover:text-gold text-sm font-semibold">
          ← Back to {c.navLabel}
        </Link>
      </div>
    </PageLayout>
  );
}
