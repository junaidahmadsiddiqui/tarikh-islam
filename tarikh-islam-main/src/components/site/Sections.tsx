import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  BookOpen, Compass, Crown, Scroll, Sword, FlaskConical,
  Globe2, Video, Brain, Users, MapPin, Sparkles,
} from "lucide-react";
import mosque from "@/assets/mosque.jpg";
import manuscript from "@/assets/manuscript.jpg";
import science from "@/assets/science.jpg";
import pattern from "@/assets/pattern-geometric.jpg";

const SECTIONS: { icon: typeof BookOpen; title: string; desc: string; tag: string; to: string }[] = [
  { icon: Compass, title: "Arabia Before Islam", desc: "Geography, tribes, Kaaba, society, trade, and pre-Islamic culture.", tag: "Origins", to: "/pre-islam" },
  { icon: BookOpen, title: "Life of Prophet ﷺ", desc: "From birth in Makkah to the Farewell Hajj — the complete Seerah.", tag: "Seerah", to: "/prophet" },
  { icon: MapPin, title: "The Hijrah Journey", desc: "Animated route of the migration to Madinah with historical stops.", tag: "Interactive", to: "/hijrah" },
  { icon: Crown, title: "Khulafa Rashidun", desc: "Abu Bakr, Umar, Uthman, and Ali — administration, expansion, justice.", tag: "Caliphate", to: "/khulafa" },
  { icon: Scroll, title: "Islamic Empires", desc: "Umayyad, Abbasid, Al-Andalus, Ottoman, Mughal, Safavid.", tag: "Dynasties", to: "/ottoman" },
  { icon: Sword, title: "Heroes of Islam", desc: "Salahuddin, Khalid ibn al-Walid, Muhammad Al-Fatih, and more.", tag: "Legends", to: "/heroes" },
  { icon: FlaskConical, title: "Golden Age Science", desc: "House of Wisdom, medicine, astronomy, algebra, engineering.", tag: "Science", to: "/golden-age" },
  { icon: Globe2, title: "Islamic Countries", desc: "Interactive atlas of nations, mosques, dynasties, and scholars.", tag: "Atlas", to: "/countries" },
  { icon: Video, title: "Documentaries", desc: "Cinematic animated videos for every era and every age group.", tag: "Watch", to: "/videos" },
  { icon: Brain, title: "Interactive Quiz", desc: "MCQs, guess-the-person, timeline ordering, badges, leaderboard.", tag: "Play", to: "/quiz" },
  { icon: Users, title: "Companions & Scholars", desc: "Biographies of Sahaba, Imams, muhaddithin, and mujaddidin.", tag: "People", to: "/scholars" },
  { icon: Sparkles, title: "AI History Assistant", desc: "Ask anything — answered only from verified sources with citations.", tag: "New", to: "/assistant" },
];


export function Sections() {
  return (
    <section id="timeline" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            The Complete Library
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-foreground">
            Twelve doorways into <span className="text-gradient-gold">Islamic history</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every section is built on verified sources, distinguishing established
            facts from scholarly interpretations — with citations and bibliography.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <Link
                to={s.to}
                className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 transition-all group-hover:bg-primary/10 group-hover:scale-125" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-gradient text-primary-foreground shadow-elegant">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-gold transition-colors">
                    Explore
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

        </div>

        {/* Feature strip */}
        <div id="seerah" className="mt-32 grid gap-8 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl shadow-elegant"
          >
            <img src={manuscript} alt="Illuminated Islamic manuscript" width={1200} height={900} loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Seerah Library</span>
            <h3 className="mt-4 font-display text-4xl font-bold text-foreground">
              The complete life of the <br /> Prophet Muhammad ﷺ
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Chapters, illustrations, historical maps, animated battles, family
              trees of the noble companions — every event cross-referenced with
              Ibn Ishaq, Ibn Hisham, al-Tabari, and Ibn Kathir.
            </p>
            <ul className="mt-6 space-y-3">
              {["Birth to First Revelation", "Meccan & Madinan Periods", "Battles, Treaties & Conquests", "Farewell Sermon & Legacy"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-foreground/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div id="science" className="mt-24 grid gap-8 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Golden Age</span>
            <h3 className="mt-4 font-display text-4xl font-bold text-foreground">
              The House of Wisdom &<br /> the scholars of the ummah
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From al-Khwarizmi's algebra to Ibn Sina's Canon of Medicine, from
              Ibn al-Haytham's optics to al-Zahrawi's surgery — meet the minds
              that lit the world for centuries.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {["Medicine", "Astronomy", "Mathematics", "Engineering"].map((t) => (
                <div key={t} className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground">
                  {t}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl shadow-elegant order-1 lg:order-2"
          >
            <img src={science} alt="Islamic scientific instruments" width={1200} height={900} loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
        </div>

        {/* CTA banner */}
        <div id="start" className="relative mt-24 overflow-hidden rounded-3xl bg-hero p-10 sm:p-16 text-center shadow-elegant">
          <img src={pattern} alt="" aria-hidden width={1200} height={1200} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-10" />
          <img src={mosque} alt="" aria-hidden width={1200} height={900} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-luminosity" />
          <div className="relative">
            <h3 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Begin your journey through <span className="text-gradient-gold">Islamic history</span>
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Free, ad-free, and open. Built with verified sources and a passion
              for teaching the ummah's story with beauty and clarity.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-gold hover:-translate-y-0.5 transition-transform">
                Create Free Account
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Try the Quiz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
