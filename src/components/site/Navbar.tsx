import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Search, ArrowUpRight, Languages, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_LINKS: { label: string; to: string }[] = [
  { label: "Timeline", to: "/timeline" },
  { label: "Prophet ﷺ", to: "/prophet" },
  { label: "Khulafa", to: "/khulafa" },
  { label: "Empires", to: "/empires" },
  { label: "Heroes", to: "/heroes" },
  { label: "Scientists", to: "/scientists" },
  { label: "Countries", to: "/countries" },
  { label: "Palestine", to: "/palestine" },
  { label: "Videos", to: "/videos" },
  { label: "Quiz", to: "/quiz" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-soft" : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative h-10 w-10 shrink-0 overflow-visible">
            <img
              src="/favicon.ico"
              alt="Tarikh-ul-Islam"
              className="h-full w-full rounded-full object-contain
                drop-shadow-[0_0_4px_rgba(212,175,55,0.55)]
                dark:drop-shadow-[0_0_6px_rgba(212,175,55,0.7)]"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Tarikh
              <span className="text-gradient-gold">-ul-Islam</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              THE HISTORY OF ISLAM
            </span>
          </div>
        </Link>

        <ul className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                activeProps={{ className: "text-gold" }}
                className="relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/search"
            aria-label="Search"
            className="hidden sm:grid h-10 w-10 place-items-center rounded-full text-foreground/80 hover:bg-accent transition-colors"
          >
            <Search className="h-4 w-4" />
          </Link>
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="grid h-10 w-10 place-items-center rounded-full text-foreground/80 hover:bg-accent transition-colors"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          
          <Link
            to="/timeline"
            
            className="group hidden md:inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-emerald-400/40 bg-gradient-to-b from-emerald-500 to-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_0_#065F46,0_6px_12px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.22)] transition-[transform,box-shadow] duration-150 ease-out hover:translate-y-[3px] hover:shadow-[0_1px_0_#065F46,inset_0_2px_4px_rgba(0,0,0,0.2)] active:translate-y-[4px] active:shadow-[0_0px_0_#065F46,inset_0_2px_4px_rgba(0,0,0,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"


          >
            <span className="relative z-10">Start Learning</span>
            <ArrowUpRight className="relative z-10 h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>


          <button
            aria-label="Menu"
            className="xl:hidden grid h-10 w-10 place-items-center rounded-full hover:bg-accent"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden overflow-hidden glass border-t border-border"
          >
            <ul className="flex flex-col p-4">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-medium text-foreground/90 hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
