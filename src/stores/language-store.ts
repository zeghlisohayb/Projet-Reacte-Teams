import { getLocales } from 'expo-localization';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { DEFAULT_LOCALE, type AppLocale } from '@/lib/locales';
import { createPersistStorage } from '@/lib/storage';

/** Arabic if the device's preferred language is Arabic, French otherwise. */
export function getDeviceLocale(): AppLocale {
  try {
    return getLocales()[0]?.languageCode === 'ar' ? 'ar' : DEFAULT_LOCALE;
  } catch {
    return DEFAULT_LOCALE;
  }
}

type LanguageState = {
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
};

/**
 * The device locale is only the initial value: once persisted, the user's own
 * choice (from the language screen) wins on every later launch.
 */
export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      locale: getDeviceLocale(),
      setLocale: (locale) => set({ locale }),
    }),
    {
      name: 'inobilier.language',
      storage: createPersistStorage(),
      partialize: ({ locale }) => ({ locale }),
    },
  ),
);
