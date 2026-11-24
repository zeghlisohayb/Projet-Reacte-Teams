import ar from './ar.json';
import fr from './fr.json';

/** French is the source of truth: every other dictionary must have the same keys. */
export type Dictionary = typeof fr;

export const SUPPORTED_LOCALES = ['fr', 'ar'] as const;
export type AppLocale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: AppLocale = 'fr';

// `ar` is type-checked against the French shape: a missing key fails `tsc`.
export const dictionaries: Record<AppLocale, Dictionary> = { fr, ar };
