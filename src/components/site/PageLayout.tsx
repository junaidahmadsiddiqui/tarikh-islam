import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { PageHero } from "./PageHero";

export function PageLayout({
  crumbs,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Breadcrumbs items={crumbs} />
        <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">{children}</div>
      </motion.main>
      <Footer />
    </div>
  );
}
