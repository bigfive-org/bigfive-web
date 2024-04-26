export interface Language {
  code: LanguageCode
  name: string;
}

export type LanguageCode =
  | "en"
  | "zh-cn"
  | "zh-hk"
  | "hi"
  | "es"
  | "fr"
  | "ru"
  | "id"
  | "ur"
  | "de"
  | "ja"
  | "it"
  | "th"
  | "uk"
  | "da"
  | "no"
  | "is"
  | "fi"
  | "nl"
  | "ro"
  | "sq"
  | "sv"
  | "hr"
  | "et"
  | "pt-br"
  | "ar"
  | "he"
  | "pl"
  | "ko"
  | "hu"
  | "fa";

const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "zh-cn", name: "Chinese (PRC)" },
  { code: "zh-hk", name: "Chinese (Hong Kong)" },
  { code: "hi", name: "Hindi" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "ru", name: "Russian" },
  { code: "id", name: "Indonesian" },
  { code: "ur", name: "Urdu" },
  { code: "de", name: "Deutsch" },
  { code: "ja", name: "Japanese" },
  { code: "it", name: "Italian" },
  { code: "th", name: "Thai" },
  { code: "uk", name: "Ukrainian" },
  { code: "da", name: "Danish" },
  { code: "no", name: "Norwegian" },
  { code: "is", name: "Icelandic" },
  { code: "fi", name: "Finnish" },
  { code: "nl", name: "Dutch" },
  { code: "ro", name: "Romanian" },
  { code: "sq", name: "Albanian" },
  { code: "sv", name: "Swedish" },
  { code: "hr", name: "Croatian" },
  { code: "et", name: "Estonian" },
  { code: "pt-br", name: "Brazilian Portuguese" },
  { code: "ar", name: "Arabic" },
  { code: "he", name: "Hebrew" },
  { code: "pl", name: "Polish" },
  { code: "ko", name: "Korean" },
  { code: "hu", name: "Hungarian" },
  { code: "fa", name: "Persian" }
];

export default languages;
