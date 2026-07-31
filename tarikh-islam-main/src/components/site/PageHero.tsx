import { motion } from "framer-motion";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero opacity-10" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pt-12 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {eyebrow && (
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
