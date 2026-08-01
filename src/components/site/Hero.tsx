import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Play, Search, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-islamic.jpg";


const STARS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 3,
}));

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1200}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Stars */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {STARS.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full bg-gold animate-twinkle"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric orbs */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 -right-20 h-96 w-96 rounded-full bg-gold/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground/80"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            The Complete Interactive Islamic History Platform
          </motion.div>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
            Explore{" "}
            <span className="text-gradient-gold">1400 Years</span>
            <br />
            of Islamic History
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Journey through the Seerah of the Prophet ﷺ, the Rightly-Guided Caliphs,
            the great empires, scholars, and scientists — all rendered as beautifully
            interactive stories, timelines, and maps.
          </p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full glass p-2 shadow-elegant"
          >
            <Search className="ml-3 h-4 w-4 text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="Search Badr, Hijrah, Al-Andalus, Ibn Sina…"
              className="flex-1 bg-transparent px-2 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none min-w-0"
            />
            <button className="shrink-0 rounded-full bg-emerald-gradient px-4 py-2 text-sm font-semibold text-primary-foreground">
              Search
            </button>
          </motion.div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/timeline"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              Explore History
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/videos"
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent"
            >
              <Play className="h-4 w-4 text-gold" />
              Watch Documentaries
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            {[
              { n: "1400+", l: "Years Covered" },
              { n: "500+", l: "Articles" },
              { n: "60+", l: "Interactive Maps" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="glass rounded-2xl p-4 sm:p-5"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold text-gradient-gold">
                  {s.n}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
