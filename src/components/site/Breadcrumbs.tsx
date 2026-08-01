import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-2">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-gold transition-colors">
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={i} className="inline-flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 opacity-50" />
            {c.to ? (
              <Link to={c.to} className="hover:text-gold transition-colors">
                {c.label}
              </Link>
            ) : (
              <span className="text-foreground/80">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
