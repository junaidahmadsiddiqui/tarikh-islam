export type Entry = {
  slug: string;
  name: string;
  subtitle: string;
  era: string;
  summary: string;
  sections: { heading: string; body: string }[];
};

export type Category = {
  id: "scientists" | "heroes" | "countries";
  path: string;
  navLabel: string;
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  entries: Entry[];
};

const scientists: Entry[] = [
  {
    slug: "ibn-sina",
    name: "Ibn Sina (Avicenna)",
    subtitle: "Physician & Philosopher",
    era: "980 – 1037 CE",
    summary: "Author of al-Qanun fi al-Tibb — the standard medical reference in Europe for over 600 years.",
    sections: [
      { heading: "Life", body: "Born near Bukhara, Ibn Sina memorised the Qur'an by ten and mastered medicine by sixteen. He served several Persian courts as physician and vizier." },
      { heading: "Works", body: "The Canon of Medicine (al-Qanun) and the Book of Healing (Kitab al-Shifa') became foundational texts in medicine and philosophy for centuries." },
    ],
  },
  {
    slug: "al-khwarizmi",
    name: "Al-Khwarizmi",
    subtitle: "Father of Algebra",
    era: "c. 780 – 850 CE",
    summary: "His Kitab al-Jabr gave the world algebra; his name gave us the word algorithm.",
    sections: [
      { heading: "House of Wisdom", body: "Al-Khwarizmi worked in Baghdad's Bayt al-Hikmah under al-Ma'mun, systematising the mathematics inherited from India and Greece." },
      { heading: "Legacy", body: "His treatise on al-jabr wa'l-muqabala introduced algebra as an independent discipline; his tables shaped medieval astronomy and navigation." },
    ],
  },
  {
    slug: "ibn-al-haytham",
    name: "Ibn al-Haytham (Alhazen)",
    subtitle: "Father of Optics",
    era: "965 – 1040 CE",
    summary: "Pioneer of the scientific method; his Kitab al-Manazir reformed the science of optics.",
    sections: [
      { heading: "Optics", body: "Ibn al-Haytham proved that vision occurs when light enters the eye, overturning the ancient theories of Euclid and Ptolemy." },
      { heading: "Method", body: "He insisted on controlled experiment and mathematical demonstration — a genuine precursor to the modern scientific method." },
    ],
  },
];

const heroes: Entry[] = [
  {
    slug: "salahuddin",
    name: "Salahuddin al-Ayyubi",
    subtitle: "Liberator of Jerusalem",
    era: "1137 – 1193 CE",
    summary: "Founder of the Ayyubid dynasty; recovered Jerusalem in 1187 after the Battle of Hittin.",
    sections: [
      { heading: "Rise", body: "Born in Tikrit to a Kurdish family, Salahuddin served under Nur ad-Din Zengi and unified Egypt and Syria under Sunni rule." },
      { heading: "Hittin & Jerusalem", body: "After the decisive victory at Hittin in 1187, Salahuddin entered Jerusalem peacefully — his justice toward its inhabitants is recorded even by his opponents." },
    ],
  },
  {
    slug: "khalid-ibn-al-walid",
    name: "Khalid ibn al-Walid (RA)",
    subtitle: "Sayf-Allah al-Maslul",
    era: "d. 642 CE",
    summary: "The 'Drawn Sword of Allah' — undefeated commander of the early Muslim conquests.",
    sections: [
      { heading: "Companion", body: "Khalid embraced Islam after Hudaybiyyah and quickly became the most trusted military commander of the Prophet ﷺ." },
      { heading: "Ridda & Beyond", body: "He led decisive campaigns in the Ridda wars, then the conquests of Iraq and Syria, culminating in the Battle of Yarmouk (636)." },
    ],
  },
  {
    slug: "muhammad-al-fatih",
    name: "Sultan Muhammad al-Fatih",
    subtitle: "Conqueror of Constantinople",
    era: "1432 – 1481 CE",
    summary: "Fulfilled the Prophetic prediction of the opening of Constantinople in 1453, aged 21.",
    sections: [
      { heading: "Preparation", body: "Muhammad II combined scholarship in languages and science with rigorous military training under his father Murad II." },
      { heading: "1453", body: "He besieged Constantinople with a fleet transported overland into the Golden Horn — a legendary feat that broke the city's defences." },
    ],
  },
];

const countries: Entry[] = [
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    subtitle: "Cradle of Revelation",
    era: "Present",
    summary: "Home of the two holy sanctuaries — Makkah and Madinah — and the birthplace of Islam.",
    sections: [
      { heading: "Sacred Geography", body: "Makkah, home of the Kaaba, and Madinah, city of the Prophet ﷺ, receive millions of pilgrims each year for Hajj and Umrah." },
      { heading: "History", body: "Ruled successively by Quraysh, the Rashidun, Umayyads, Abbasids, Sharifs of Makkah, and the Saudi state established in the 18th century." },
    ],
  },
  {
    slug: "turkiye",
    name: "Türkiye",
    subtitle: "Heart of the Ottoman Caliphate",
    era: "Present",
    summary: "Successor to the Ottoman Empire; capital of Muslim political power for over six centuries.",
    sections: [
      { heading: "Ottoman Legacy", body: "Istanbul, the former Constantinople, remains adorned by Aya Sofya, the Süleymaniye, and hundreds of Ottoman-era mosques and madrasas." },
      { heading: "Modern Era", body: "Founded as a republic in 1923; today home to over 85 million Muslims and a vibrant scholarly tradition." },
    ],
  },
  {
    slug: "india",
    name: "India",
    subtitle: "Land of the Mughals",
    era: "Present",
    summary: "Home to one of the world's largest Muslim populations, shaped by centuries of Muslim rule and scholarship.",
    sections: [
      { heading: "Delhi Sultanate & Mughals", body: "From the Delhi Sultanate through the Mughal Empire, Muslim rule shaped South Asian culture, architecture (Taj Mahal, Red Fort), and scholarship." },
      { heading: "Scholarship", body: "Deoband, Nadwatul Ulama, and other centres continue a rich tradition of hadith, fiqh, and Qur'anic sciences." },
    ],
  },
  {
    slug: "egypt",
    name: "Egypt",
    subtitle: "Land of al-Azhar",
    era: "Present",
    summary: "Home of al-Azhar — one of the oldest continuously operating universities in the world.",
    sections: [
      { heading: "Al-Azhar", body: "Founded in 970 CE, al-Azhar has been a beacon of Islamic learning for over a millennium, training scholars from every corner of the ummah." },
      { heading: "History", body: "Ruled by the Rashidun, Umayyads, Abbasids, Fatimids, Ayyubids, Mamluks, and Ottomans before its modern republican era." },
    ],
  },
];

export const CATEGORIES: Record<Category["id"], Category> = {
  scientists: {
    id: "scientists",
    path: "/scientists",
    navLabel: "Scientists",
    title: "Islamic Scientists — Tarikh-ul-Islam",
    description: "The scientists of the Islamic Golden Age — al-Khwarizmi, Ibn Sina, Ibn al-Haytham, and more.",
    eyebrow: "Golden Age",
    heroTitle: "Islamic Scientists",
    heroSubtitle: "The minds that lit the world for centuries.",
    intro: "Meet the scholars whose work in mathematics, medicine, optics, astronomy, and chemistry laid the foundations of modern science.",
    entries: scientists,
  },
  heroes: {
    id: "heroes",
    path: "/heroes",
    navLabel: "Heroes",
    title: "Heroes of Islam — Tarikh-ul-Islam",
    description: "The commanders, defenders, and leaders whose lives shaped Islamic history.",
    eyebrow: "Legends",
    heroTitle: "Heroes of Islam",
    heroSubtitle: "Courage, sacrifice, and justice across the centuries.",
    intro: "From the companions of the Prophet ﷺ to the sultans and generals of later eras — the heroes whose stories inspire the ummah.",
    entries: heroes,
  },
  countries: {
    id: "countries",
    path: "/countries",
    navLabel: "Countries",
    title: "Muslim Countries — Tarikh-ul-Islam",
    description: "An interactive atlas of Muslim-majority countries — their history, scholars, and heritage.",
    eyebrow: "Atlas",
    heroTitle: "Countries of the Ummah",
    heroSubtitle: "A journey across the lands of Islam.",
    intro: "Explore Muslim-majority countries — their history, sacred sites, dynasties, and contributions to Islamic civilization.",
    entries: countries,
  },
};
