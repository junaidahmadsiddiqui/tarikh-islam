import { useEffect, useRef, useState } from "react";
import { Languages, Check } from "lucide-react";

const languages = [
    { name: "English", available: true },
    { name: "العربية", available: false },
    { name: "اردو", available: false },
    { name: "فارسی", available: false },
    { name: "Türkçe", available: false },
    { name: "हिन्दी", available: false },
    { name: "বাংলা", available: false },
    { name: "Bahasa Indonesia", available: false },
    { name: "Français", available: false },
    { name: "Español", available: false },
    { name: "中文", available: false },
    { name: "Русский", available: false },
    { name: "Português", available: false },
    { name: "Deutsch", available: false },
];

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative">
            {/* Language Button */}
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Change language"
                aria-expanded={isOpen}
                className="flex h-10 w-10 items-center justify-center rounded-full
                   text-[#1E2530] transition-all duration-200
                   hover:bg-[#F5F0E8] hover:text-[#0E4237]
                   focus:outline-none focus:ring-2 focus:ring-[#C4983E]"
            >
                <Languages size={19} strokeWidth={1.8} />
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div
                    className="absolute right-0 top-[calc(100%+12px)] z-50
                     w-64 overflow-hidden rounded-2xl
                     border border-[#D9CCB4]
                     bg-[#FAF7F2]
                     shadow-[0_12px_35px_rgba(30,37,48,0.14)]"
                >
                    {/* Header */}
                    <div className="border-b border-[#E5DED2] px-5 py-4">
                        <div className="flex items-center gap-2">
                            <Languages
                                size={17}
                                className="text-[#0E4237]"
                            />

                            <span className="font-serif text-base font-semibold text-[#1E2530]">
                                Language
                            </span>
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="max-h-[300px] overflow-y-auto p-2">
                        {languages.map((language) => (
                            <button
                                key={language.name}
                                disabled={!language.available}
                                className={`flex w-full items-center justify-between
                           rounded-xl px-3 py-2.5 text-left
                           transition-colors duration-150
                  ${language.available
                                        ? "cursor-pointer text-[#1E2530] hover:bg-[#EFE9DD]"
                                        : "cursor-not-allowed text-[#8B8D91]"
                                    }`}
                            >
                                <span
                                    className={
                                        ["العربية", "اردو", "فارسی"].includes(language.name)
                                            ? "font-serif text-[15px]"
                                            : ""
                                    }
                                >
                                    {language.name}
                                </span>

                                {language.available && (
                                    <Check
                                        size={17}
                                        className="text-[#0E4237]"
                                    />
                                )}

                            </button>
                        ))}

                        {/* Other Languages */}
                        <div className="mt-1 border-t border-[#E5DED2] pt-1">
                            <button
                                type="button"
                                className="flex w-full items-center justify-between rounded-xl
                            px-3 py-2.5 text-left
                            text-[#0E4237] transition-colors duration-150
                            hover:bg-[#EFE9DD]"
                            >
                                <span className="text-sm font-semibold">
                                    Other languages
                                </span>

                                <span className="text-lg leading-none">
                                    →
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Notice */}
                    <div className="border-t border-[#E5DED2] bg-[#F5F0E8] px-5 py-4">
                        <p className="text-xs leading-relaxed text-[#6B7280]">
                            Translation support for additional languages is currently
                            in development and will be available soon.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}