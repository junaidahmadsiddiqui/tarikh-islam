export type TopicSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type Topic = {
  id: string;
  path: string;
  navLabel: string;
  breadcrumb: string;
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: TopicSection[];
};

export const TOPICS: Record<string, Topic> = {
  about: {
    id: "about",
    path: "/about",
    navLabel: "About Islam",
    breadcrumb: "About Islam",
    title: "About Islam — Tarikh-ul-Islam",
    description: "An introduction to Islam: its beliefs, pillars, sources, and its role in shaping world history.",
    eyebrow: "Introduction",
    heroTitle: "About Islam",
    heroSubtitle: "The faith, its foundations, and its place in the story of humanity.",
    sections: [
      { heading: "What is Islam?", body: "Islam is the monotheistic faith revealed to the Prophet Muhammad ﷺ in the 7th century CE, completing a chain of prophethood beginning with Adam and passing through Nuh, Ibrahim, Musa, and Isa (peace be upon them all)." },
      { heading: "Core Beliefs", body: "Muslims affirm the oneness of God (Tawhid), belief in angels, revealed books, the prophets, the Day of Judgement, and divine decree.", bullets: ["Tawhid — the absolute oneness of Allah", "Revelation through prophets", "Accountability in the hereafter"] },
      { heading: "Sources of Knowledge", body: "The primary sources are the Qur'an — preserved verbatim — and the authentic Sunnah, transmitted through the rigorous science of hadith." },
    ],
  },
  timeline: {
    id: "timeline",
    path: "/timeline",
    navLabel: "Timeline",
    breadcrumb: "Timeline",
    title: "Timeline of Islamic History — Tarikh-ul-Islam",
    description: "An interactive timeline of Islamic history from the birth of the Prophet ﷺ through the modern era.",
    eyebrow: "Through the Ages",
    heroTitle: "The Timeline of Islamic History",
    heroSubtitle: "From revelation in Makkah to the empires, scholars, and nations of today.",
    sections: [
      { heading: "570 – 632 CE · The Prophetic Era", body: "Birth of the Prophet ﷺ, revelation, Hijrah, and the foundation of the Muslim community in Madinah." },
      { heading: "632 – 661 · The Rightly-Guided Caliphs", body: "Abu Bakr, Umar, Uthman, and Ali lead the ummah through consolidation and expansion." },
      { heading: "661 – 750 · Umayyad Caliphate", body: "Damascus becomes the capital of an empire stretching from al-Andalus to the borders of India." },
      { heading: "750 – 1258 · Abbasid Caliphate", body: "Baghdad rises as the intellectual capital of the world; the Golden Age of Islamic civilization." },
      { heading: "1299 – 1924 · Ottoman Caliphate", body: "Six centuries of Ottoman rule shape the Balkans, Anatolia, the Levant, and North Africa." },
      { heading: "Modern Era", body: "Independence movements, nation-states, revival movements, and the global Muslim community today." },
    ],
  },
  "pre-islam": {
    id: "pre-islam",
    path: "/pre-islam",
    navLabel: "Arabia Before Islam",
    breadcrumb: "Arabia Before Islam",
    title: "Arabia Before Islam — Tarikh-ul-Islam",
    description: "The tribes, trade routes, religions, and culture of the Arabian Peninsula on the eve of revelation.",
    eyebrow: "Jahiliyyah",
    heroTitle: "Arabia Before Islam",
    heroSubtitle: "The world into which the Prophet ﷺ was born.",
    sections: [
      { heading: "Geography & Tribes", body: "The Arabian Peninsula was home to Quraysh, Aws, Khazraj, Kinda, and dozens of Bedouin and settled tribes bound by lineage and honour." },
      { heading: "The Kaaba & Religion", body: "The Kaaba, built by Ibrahim and Ismail, had become surrounded by 360 idols. Alongside idolatry existed Christians, Jews, Zoroastrians, and hanifs following the pure monotheism of Ibrahim." },
      { heading: "Society & Trade", body: "Makkah stood at the crossroads of trade between Yemen and the Levant. Poetry, oratory, and tribal loyalty were the highest cultural currencies." },
    ],
  },
  prophet: {
    id: "prophet",
    path: "/prophet",
    navLabel: "Prophet Muhammad ﷺ",
    breadcrumb: "Prophet Muhammad ﷺ",
    title: "The Life of Prophet Muhammad ﷺ — Tarikh-ul-Islam",
    description: "The complete Seerah of the Prophet Muhammad ﷺ, cross-referenced with Ibn Ishaq, Ibn Hisham, al-Tabari, and Ibn Kathir.",
    eyebrow: "Seerah",
    heroTitle: "The Life of Prophet Muhammad ﷺ",
    heroSubtitle: "From his birth in Makkah to the Farewell Pilgrimage.",
    sections: [
      { heading: "Birth & Early Life (570 – 610 CE)", body: "Born in the Year of the Elephant, orphaned young, raised by his grandfather Abd al-Muttalib and his uncle Abu Talib. Known throughout Makkah as al-Amin — the Trustworthy." },
      { heading: "Prophethood in Makkah (610 – 622)", body: "First revelation in the Cave of Hira, thirteen years of da'wah, patience through persecution, the boycott, the Year of Sorrow, and the Israa & Mi'raj." },
      { heading: "Madinah & the Ummah (622 – 632)", body: "The Hijrah, the Constitution of Madinah, the great battles, the treaty of Hudaybiyyah, the opening of Makkah, and the Farewell Sermon." },
    ],
  },
  "first-wahi": {
    id: "first-wahi",
    path: "/first-wahi",
    navLabel: "First Revelation",
    breadcrumb: "First Revelation",
    title: "The First Revelation — Tarikh-ul-Islam",
    description: "The night in the Cave of Hira when Jibril brought the first verses of the Qur'an.",
    eyebrow: "610 CE",
    heroTitle: "The First Revelation",
    heroSubtitle: "Iqra — Read, in the name of your Lord who created.",
    sections: [
      { heading: "The Cave of Hira", body: "The Prophet ﷺ would retreat for weeks to a cave on Jabal an-Nur to worship and reflect. In the month of Ramadan, in his fortieth year, the angel Jibril appeared to him." },
      { heading: "Iqra", body: "The first five verses of Surah al-'Alaq were revealed: 'Read, in the name of your Lord who created — created man from a clinging clot.' Recorded by al-Bukhari from Aisha (RA)." },
      { heading: "Khadijah & Waraqah", body: "The Prophet ﷺ returned trembling to Khadijah (RA), who reassured him and took him to her cousin Waraqah ibn Nawfal, who confirmed that this was the same angel who had come to Musa." },
    ],
  },
  hijrah: {
    id: "hijrah",
    path: "/hijrah",
    navLabel: "The Hijrah",
    breadcrumb: "The Hijrah",
    title: "The Hijrah — Migration to Madinah — Tarikh-ul-Islam",
    description: "The migration of the Prophet ﷺ and Abu Bakr from Makkah to Madinah in 622 CE — the beginning of the Islamic calendar.",
    eyebrow: "622 CE",
    heroTitle: "The Hijrah to Madinah",
    heroSubtitle: "The migration that began the Islamic calendar.",
    sections: [
      { heading: "Plot Against the Prophet ﷺ", body: "Quraysh gathered at Dar an-Nadwah and resolved that a young man from each clan would strike together, dividing the responsibility so the Banu Hashim could not seek retaliation." },
      { heading: "The Cave of Thawr", body: "The Prophet ﷺ left with Abu Bakr (RA), taking refuge in the Cave of Thawr for three nights while search parties passed just outside — 'Do not grieve; indeed Allah is with us.' (Qur'an 9:40)" },
      { heading: "Arrival in Madinah", body: "After a journey of roughly 400 km, they entered Quba, where the first mosque was built, then continued to Madinah — welcomed by the Ansar with songs of joy." },
    ],
  },
  battles: {
    id: "battles",
    path: "/battles",
    navLabel: "Battles",
    breadcrumb: "Battles",
    title: "Battles of Early Islam — Tarikh-ul-Islam",
    description: "Badr, Uhud, the Trench, Khaybar, Mu'tah, Hunayn — the defensive battles of the Prophetic era.",
    eyebrow: "Ghazwat",
    heroTitle: "The Battles of Early Islam",
    heroSubtitle: "The defensive struggles that shaped the young ummah.",
    sections: [
      { heading: "Badr (2 AH / 624 CE)", body: "313 Muslims faced roughly 1,000 Quraysh. A decisive victory that the Qur'an calls Yawm al-Furqan — the Day of Distinction." },
      { heading: "Uhud (3 AH / 625 CE)", body: "A test of obedience and patience; the Prophet ﷺ was injured, and seventy companions were martyred, including Hamza (RA)." },
      { heading: "Al-Khandaq — The Trench (5 AH / 627 CE)", body: "On Salman al-Farisi's advice, a trench was dug around Madinah, repelling a coalition of 10,000 without a major engagement." },
      { heading: "Khaybar, Mu'tah, Hunayn", body: "The consolidation of Muslim authority in the Arabian peninsula, and the first encounters with Byzantine forces at Mu'tah." },
    ],
  },
  khulafa: {
    id: "khulafa",
    path: "/khulafa",
    navLabel: "Khulafa Rashidin",
    breadcrumb: "Khulafa Rashidin",
    title: "The Rightly-Guided Caliphs — Tarikh-ul-Islam",
    description: "Abu Bakr, Umar, Uthman, and Ali — the four Rightly-Guided Caliphs (632 – 661 CE).",
    eyebrow: "632 – 661 CE",
    heroTitle: "The Khulafa Rashidin",
    heroSubtitle: "Successors of the Prophet ﷺ, guardians of the ummah.",
    sections: [
      { heading: "Abu Bakr as-Siddiq (RA)", body: "The first caliph, closest companion of the Prophet ﷺ. Unified Arabia through the Ridda wars and initiated the compilation of the Qur'an." },
      { heading: "Umar ibn al-Khattab (RA)", body: "The second caliph — established the Islamic calendar, the diwan system, and expanded the state into Persia, the Levant, and Egypt." },
      { heading: "Uthman ibn Affan (RA)", body: "The third caliph — standardised the Qur'anic mushaf, expanded the navy, and stewarded a period of great prosperity." },
      { heading: "Ali ibn Abi Talib (RA)", body: "The fourth caliph — a man of knowledge, courage, and justice, whose caliphate was tested by civil strife (fitnah)." },
    ],
  },
  umayyad: {
    id: "umayyad",
    path: "/umayyad",
    navLabel: "Umayyad Empire",
    breadcrumb: "Umayyad Empire",
    title: "The Umayyad Caliphate — Tarikh-ul-Islam",
    description: "The Umayyad Caliphate (661 – 750 CE) — from Damascus to al-Andalus.",
    eyebrow: "661 – 750 CE",
    heroTitle: "The Umayyad Caliphate",
    heroSubtitle: "The first great Islamic empire, from Damascus to Córdoba.",
    sections: [
      { heading: "Foundation", body: "Mu'awiya ibn Abi Sufyan (RA) established the caliphate in Damascus, ushering in a new administrative era." },
      { heading: "Expansion", body: "Under caliphs like Abd al-Malik and al-Walid, Islam spread from al-Andalus in the west to Sindh and Transoxiana in the east." },
      { heading: "Legacy", body: "Arabic became the language of administration, coinage was reformed, and monuments like the Dome of the Rock and the Great Mosque of Damascus were built." },
    ],
  },
  abbasid: {
    id: "abbasid",
    path: "/abbasid",
    navLabel: "Abbasid Empire",
    breadcrumb: "Abbasid Empire",
    title: "The Abbasid Caliphate — Tarikh-ul-Islam",
    description: "The Abbasid Caliphate (750 – 1258 CE) — Baghdad, the House of Wisdom, and the Golden Age.",
    eyebrow: "750 – 1258 CE",
    heroTitle: "The Abbasid Caliphate",
    heroSubtitle: "Baghdad, the House of Wisdom, and five centuries of scholarship.",
    sections: [
      { heading: "The Founding of Baghdad", body: "Al-Mansur founded the Round City of Baghdad in 762 CE — designed as the intellectual and administrative heart of the caliphate." },
      { heading: "Bayt al-Hikmah", body: "Under Harun al-Rashid and al-Ma'mun, the House of Wisdom translated Greek, Persian, and Indian works and produced original scholarship in mathematics, medicine, and astronomy." },
      { heading: "Decline", body: "The Buyid and Seljuq periods saw fragmentation, and the Mongol sack of Baghdad in 1258 ended the Abbasid political era." },
    ],
  },
  ottoman: {
    id: "ottoman",
    path: "/ottoman",
    navLabel: "Ottoman Empire",
    breadcrumb: "Ottoman Empire",
    title: "The Ottoman Caliphate — Tarikh-ul-Islam",
    description: "The Ottoman Empire (1299 – 1924 CE) — from Osman I to the fall of the caliphate.",
    eyebrow: "1299 – 1924 CE",
    heroTitle: "The Ottoman Caliphate",
    heroSubtitle: "Six centuries of Muslim statecraft across three continents.",
    sections: [
      { heading: "Rise", body: "Founded by Osman I in Anatolia, the Ottomans grew from a frontier principality into a global empire." },
      { heading: "The Conquest of Constantinople (1453)", body: "Sultan Muhammad al-Fatih, at 21, fulfilled the Prophetic prediction of the opening of Constantinople." },
      { heading: "The Classical Age", body: "Under Sulayman al-Qanuni, the empire reached its zenith in law, architecture (Sinan), and territorial reach." },
      { heading: "Reform & End", body: "The Tanzimat reforms, WWI, and the abolition of the caliphate in 1924 closed a millennium of continuous caliphal rule." },
    ],
  },
  "golden-age": {
    id: "golden-age",
    path: "/golden-age",
    navLabel: "Golden Age",
    breadcrumb: "Golden Age",
    title: "The Islamic Golden Age — Tarikh-ul-Islam",
    description: "The Golden Age of Islamic civilization — science, medicine, philosophy, and art from the 8th to 14th centuries.",
    eyebrow: "8th – 14th Century",
    heroTitle: "The Islamic Golden Age",
    heroSubtitle: "When Baghdad, Córdoba, Cairo, and Samarkand lit the world.",
    sections: [
      { heading: "Bayt al-Hikmah", body: "The House of Wisdom in Baghdad became the crossroads of Greek, Persian, Indian, and Arabic learning." },
      { heading: "Sciences", body: "Advances in algebra, algorithms, optics, astronomy, medicine, chemistry, and geography — many of which laid the foundation for the modern sciences." },
      { heading: "Art & Architecture", body: "The Alhambra, Great Mosque of Córdoba, Süleymaniye, and Registan reveal the aesthetic peak of the civilization." },
    ],
  },
  "al-andalus": {
    id: "al-andalus",
    path: "/al-andalus",
    navLabel: "Al-Andalus",
    breadcrumb: "Al-Andalus",
    title: "Al-Andalus — Tarikh-ul-Islam",
    description: "The history of Muslim Spain from the Umayyad conquest to the fall of Granada in 1492.",
    eyebrow: "711 – 1492 CE",
    heroTitle: "Al-Andalus (Muslim Spain)",
    heroSubtitle: "Eight centuries of Islamic civilization in the Iberian Peninsula.",

    sections: [
      {
        heading: "The Conquest of Iberia (711 CE)",
        body: "Tariq ibn Ziyad crossed the Strait of Gibraltar with a Muslim army and defeated King Roderic at the Battle of Guadalete, beginning Islamic rule in much of the Iberian Peninsula."
      },
      {
        heading: "The Umayyad Emirate & Caliphate",
        body: "Abd al-Rahman I escaped the Abbasid Revolution and established the Umayyad Emirate in Córdoba in 756 CE. Later, Abd al-Rahman III proclaimed the Caliphate of Córdoba, making it one of the greatest cities in the world."
      },
      {
        heading: "The Golden Age",
        body: "Muslims, Christians, and Jews contributed to remarkable advances in science, medicine, mathematics, architecture, philosophy, and literature. Córdoba, Seville, and Toledo became renowned centers of learning."
      },
      {
        heading: "Architecture",
        body: "Masterpieces such as the Great Mosque of Córdoba, Madinat al-Zahra, and the Alhambra Palace demonstrate the artistic and architectural brilliance of Al-Andalus."
      },
      {
        heading: "The Reconquista",
        body: "Over several centuries, Christian kingdoms gradually reconquered Muslim territories. The final Muslim kingdom, Granada, fell in 1492, ending nearly 800 years of Islamic rule in Iberia."
      },
      {
        heading: "Legacy",
        body: "Al-Andalus left a lasting influence on European science, agriculture, language, architecture, and culture, helping preserve and expand knowledge that later contributed to the Renaissance."
      }
    ]
  },
  scholars: {
    id: "scholars",
    path: "/scholars",
    navLabel: "Scholars",
    breadcrumb: "Scholars",
    title: "Islamic Scholars — Tarikh-ul-Islam",
    description: "The imams, muhaddithin, mufassirin, and mujaddidin who preserved and transmitted the Islamic tradition.",
    eyebrow: "The Inheritors",
    heroTitle: "Scholars of the Ummah",
    heroSubtitle: "The scholars are the inheritors of the prophets.",
    sections: [
      { heading: "The Four Imams", body: "Abu Hanifa, Malik ibn Anas, al-Shafi'i, and Ahmad ibn Hanbal — the founders of the four surviving Sunni schools of jurisprudence." },
      { heading: "Muhaddithin", body: "Al-Bukhari, Muslim, Abu Dawud, al-Tirmidhi, al-Nasa'i, and Ibn Majah — compilers of the six canonical books of hadith." },
      { heading: "Mufassirin & Later Scholars", body: "Al-Tabari, Ibn Kathir, al-Ghazali, Ibn Taymiyyah, al-Nawawi, and countless others who taught, wrote, and revived." },
    ],
  },
  library: {
    id: "library",
    path: "/library",
    navLabel: "Library",
    breadcrumb: "Library",
    title: "Library — Tarikh-ul-Islam",
    description: "A curated library of primary and secondary sources on Islamic history, freely accessible.",
    eyebrow: "Sources",
    heroTitle: "The Library",
    heroSubtitle: "Primary sources, classical works, and modern scholarship.",
    sections: [
      { heading: "Primary Sources", body: "Ibn Ishaq's Sirah, Ibn Hisham's edition, al-Waqidi's Maghazi, al-Tabari's Tarikh al-Rusul wa'l-Muluk, Ibn Sa'd's Tabaqat." },
      { heading: "Classical Historians", body: "Ibn Kathir's al-Bidayah wa'l-Nihayah, Ibn al-Athir's al-Kamil, Ibn Khaldun's Muqaddimah." },
      { heading: "Modern Scholarship", body: "Works by Martin Lings, Muhammad al-Ghazali, Adil Salahi, Jonathan Brown, and others — with editorial notes distinguishing established facts from interpretations." },
    ],
  },
  palestine: {
    id: "palestine",
    path: "/palestine",
    navLabel: "Palestine",
    breadcrumb: "Palestine",
    title: "History of Palestine — Tarikh-ul-Islam",
    description:
      "Explore the Islamic history of Palestine (Filastin), Al-Quds (Jerusalem), Masjid Al-Aqsa, and the major events from the time of the Prophets to the modern era.",
    eyebrow: "Sacred Land",
    heroTitle: "History of Palestine",
    heroSubtitle:
      "The land of the Prophets, Masjid Al-Aqsa, and centuries of Islamic civilization.",
    sections: [
      {
        heading: "The Blessed Land",
        body:
          "Palestine is one of the most blessed regions in Islamic history. It is home to Masjid Al-Aqsa, the first Qiblah of the Muslims and the place from which Prophet Muhammad ﷺ ascended during Al-Isra' wal-Mi'raj.",
      },
      {
        heading: "Prophets in Palestine",
        body:
          "Many Prophets of Allah (peace be upon them) lived, preached, or were connected to this land, including Ibrahim (AS), Lut (AS), Dawud (AS), Sulayman (AS), Zakariyya (AS), Yahya (AS), and Isa (AS).",
      },
      {
        heading: "Islamic Conquest",
        body:
          "In 638 CE (17 AH), Jerusalem peacefully came under Muslim rule during the Caliphate of Umar ibn al-Khattab (RA). The city was handed over peacefully, and the Pact of Umar guaranteed protection for its inhabitants and religious sites.",
      },
      {
        heading: "The Crusades & Salahuddin",
        body:
          "Jerusalem was captured during the First Crusade in 1099 CE. Nearly ninety years later, Sultan Salahuddin al-Ayyubi liberated the city after the Battle of Hattin in 1187 CE, restoring Muslim rule while showing remarkable mercy to its people.",
      },
      {
        heading: "Ottoman Era",
        body:
          "Palestine remained under Ottoman administration for nearly four centuries (1516–1917). During this period, Jerusalem, Al-Aqsa, and many Islamic institutions were preserved and developed.",
      },
      {
        heading: "Modern History",
        body:
          "The twentieth century brought significant political changes, including the British Mandate, the 1948 Arab-Israeli War, and the continuing Israeli-Palestinian conflict. Understanding these events requires careful study of multiple historical sources and perspectives.",
      },
      {
        heading: "Authentic Sources",
        body:
          "This section draws upon the Qur'an, authentic Hadith, classical Muslim historians, and modern academic research, clearly distinguishing established historical facts from differing scholarly interpretations.",
      },
    ],
  },
  videos: {
    id: "videos",
    path: "/videos",
    navLabel: "Videos",
    breadcrumb: "Videos",
    title: "Video Documentaries — Tarikh-ul-Islam",
    description: "Cinematic animated documentaries on the Seerah, the caliphates, empires, and scholars.",
    eyebrow: "Watch",
    heroTitle: "Documentaries",
    heroSubtitle: "Cinematic history for every age group.",
    sections: [
      { heading: "Seerah Series", body: "A 40-episode animated series covering the life of the Prophet ﷺ from birth to the Farewell Sermon." },
      { heading: "Empires", body: "Documentary series on the Umayyads, Abbasids, Ottomans, Mughals, Safavids, and al-Andalus." },
      { heading: "For Younger Learners", body: "Short, illustrated stories designed for children — same references, gentler pace." },
    ],
  },
  quiz: {
    id: "quiz",
    path: "/quiz",
    navLabel: "Quiz",
    breadcrumb: "Quiz",
    title: "Interactive Quiz — Tarikh-ul-Islam",
    description: "MCQs, guess-the-person, and timeline-ordering quizzes with badges and a leaderboard.",
    eyebrow: "Play & Learn",
    heroTitle: "Interactive Quiz",
    heroSubtitle: "Test your knowledge across every era.",
    sections: [
      { heading: "Formats", body: "Multiple choice, guess-the-companion, timeline ordering, map identification, and daily challenges." },
      { heading: "Progress", body: "Track your journey through each era, earn badges, and climb the leaderboard alongside learners worldwide." },
    ],
  },
  assistant: {
    id: "assistant",
    path: "/assistant",
    navLabel: "AI Assistant",
    breadcrumb: "AI Assistant",
    title: "AI History Assistant — Tarikh-ul-Islam",
    description: "Ask any question about Islamic history — answered only from verified sources, with citations.",
    eyebrow: "Ask Anything",
    heroTitle: "AI History Assistant",
    heroSubtitle: "Sourced answers, transparent citations, honest about uncertainty.",
    sections: [
      { heading: "Grounded in Sources", body: "Responses are generated only from a curated corpus of classical and modern historical works, with direct citations." },
      { heading: "Honest About Uncertainty", body: "When a report is weak or scholars disagree, the assistant says so — presenting the range of views rather than picking one." },
    ],
  },
  search: {
    id: "search",
    path: "/search",
    navLabel: "Search",
    breadcrumb: "Search",
    title: "Search — Tarikh-ul-Islam",
    description: "Search across articles, biographies, timelines, and library sources.",
    eyebrow: "Find",
    heroTitle: "Search the Library",
    heroSubtitle: "Search Badr, Hijrah, Al-Andalus, Ibn Sina, and more.",
    sections: [
      { heading: "Powerful Filters", body: "Filter by era, region, person, or source type. Full-text search across all articles and biographies." },
    ],
  },
  contact: {
    id: "contact",
    path: "/contact",
    navLabel: "Contact",
    breadcrumb: "Contact",
    title: "Contact — Tarikh-ul-Islam",
    description: "Get in touch with the Tarikh-ul-Islam editorial team.",
    eyebrow: "Say Salaam",
    heroTitle: "Contact Us",
    heroSubtitle: "Corrections, contributions, partnerships — we'd love to hear from you.",
    sections: [
      { heading: "Editorial", body: "For corrections and source suggestions, please reach out with citations so our editors can review promptly." },
      { heading: "Partnerships", body: "Educators, translators, and institutions are welcome to collaborate." },
    ],
  },
  privacy: {
    id: "privacy",
    path: "/privacy",
    navLabel: "Privacy",
    breadcrumb: "Privacy",
    title: "Privacy Policy — Tarikh-ul-Islam",
    description: "How we handle your data on Tarikh-ul-Islam.",
    eyebrow: "Legal",
    heroTitle: "Privacy Policy",
    heroSubtitle: "We collect the minimum necessary and never sell your data.",
    sections: [
      { heading: "What we collect", body: "Anonymous analytics to understand which content is most helpful, and — if you create an account — your email and learning progress." },
      { heading: "Your rights", body: "You may request export or deletion of your account at any time." },
    ],
  },
  terms: {
    id: "terms",
    path: "/terms",
    navLabel: "Terms",
    breadcrumb: "Terms",
    title: "Terms of Use — Tarikh-ul-Islam",
    description: "Terms of use for the Tarikh-ul-Islam platform.",
    eyebrow: "Legal",
    heroTitle: "Terms of Use",
    heroSubtitle: "The ground rules for using this platform.",
    sections: [
      { heading: "Acceptable Use", body: "Content is provided for educational, non-commercial use. Please cite Tarikh-ul-Islam when quoting substantial passages." },
      { heading: "Content", body: "We aim for accuracy and transparency. If you find an error, please write to us — corrections are welcome and credited." },
    ],
  },
};
