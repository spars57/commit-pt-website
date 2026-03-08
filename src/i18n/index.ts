import { en } from './en';
import { pt } from './pt';

export type Locale = 'en' | 'pt';

/** Shared shape for all locale translations (use this for component props). */
export interface Translations {
  tagline: string;
  overview: string;
  constructionStrong: string;
  constructionRest: string;
  joinDiscord: string;
  joinDiscordAria: string;
}

export const translations = { en, pt } as const;

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations.en;
}
