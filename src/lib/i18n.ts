/**
 * Minimal i18n: typed dot-path keys, `{{param}}` interpolation, French fallback.
 *
 * RTL is intentionally NOT handled yet (no I18nManager calls) — that is a
 * follow-up. Components that need direction later can derive it from `locale`.
 */

import { useCallback } from 'react';

import { useLanguageStore } from '@/stores/language-store';

import { DEFAULT_LOCALE, dictionaries, type AppLocale, type Dictionary } from './locales';

type Leaves<T, Prefix extends string = ''> = {
  [K in keyof T & string]: T[K] extends string ? `${Prefix}${K}` : Leaves<T[K], `${Prefix}${K}.`>;
}[keyof T & string];

export type TranslationKey = Leaves<Dictionary>;
export type TranslationParams = Record<string, string | number>;

function lookup(locale: AppLocale, key: string): string | undefined {
  let node: unknown = dictionaries[locale];
  for (const part of key.split('.')) {
    if (node === null || typeof node !== 'object') return undefined;
    node = (node as Record<string, unknown>)[part];
  }
  return typeof node === 'string' ? node : undefined;
}

export function translate(locale: AppLocale, key: TranslationKey, params?: TranslationParams): string {
  const template = lookup(locale, key) ?? lookup(DEFAULT_LOCALE, key) ?? key;
  if (!params) return template;
  return template.replace(/\{\{(\w+)\}\}/g, (match, name: string) =>
    name in params ? String(params[name]) : match,
  );
}

export function useTranslation() {
  const locale = useLanguageStore((state) => state.locale);
  const setLocale = useLanguageStore((state) => state.setLocale);

  const t = useCallback(
    (key: TranslationKey, params?: TranslationParams) => translate(locale, key, params),
    [locale],
  );

  return { t, locale, setLocale };
}
