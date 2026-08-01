import { Link } from "@tanstack/react-router";
import { Sparkles, Mail, Send, Play, Share2 } from "lucide-react";

const COLS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Timeline", to: "/timeline" },
      { label: "Prophet ﷺ", to: "/prophet" },
      { label: "Khulafa", to: "/khulafa" },
      { label: "Empires", to: "/empires" },
      { label: "Palestine", to: "/palestine" },
      { label: "Heroes", to: "/heroes" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Quiz", to: "/quiz" },
      { label: "Videos", to: "/videos" },
      { label: "Library", to: "/library" },
      { label: "AI Assistant", to: "/assistant" },
      { label: "Daily History (Coming soon)", to: "" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Islam", to: "/about" },
      { label: "Scholars", to: "/scholars" },
      { label: "Contact", to: "/contact" },
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
      { label: "Donate (Future)", to: "/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-gradient shadow-gold">
                <Sparkles className="h-5 w-5 text-gold" />
              </div>
              <span className="font-display text-lg font-bold">
                Tarikh<span className="text-gradient-gold">-ul-Islam</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              An interactive, source-referenced platform for learning the complete
              history of Islam — from Arabia before the Prophet ﷺ to the modern era.
            </p>
            <form className="mt-6 flex max-w-sm items-center gap-2 rounded-full border border-border bg-background p-1.5">
              <Mail className="ml-2 h-4 w-4 text-muted-foreground" />
              <input placeholder="Your email" className="flex-1 bg-transparent px-1 py-1.5 text-sm focus:outline-none min-w-0" />
              <button className="rounded-full bg-emerald-gradient px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                Subscribe
              </button>
            </form>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Tarikh-ul-Islam. Built for the ummah, with references.
          </p>
          <div className="flex items-center gap-3">
            {[Send, Play, Share2].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground hover:text-gold hover:border-gold transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
