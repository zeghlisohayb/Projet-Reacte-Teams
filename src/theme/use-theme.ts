/**
 * Returns the full theme (colors, spacing, radius, typography, shadows) for the
 * current system color scheme. Re-renders when the user switches light/dark.
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from '@/hooks/use-color-scheme';

import { Themes, type Theme } from './tokens';

export function useTheme(): Theme {
  const scheme = useColorScheme();
  return Themes[scheme === 'dark' ? 'dark' : 'light'];
}
