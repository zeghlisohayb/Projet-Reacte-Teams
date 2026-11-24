import { DarkTheme, DefaultTheme, type Theme as NavigationTheme } from 'expo-router';

import type { Theme } from './tokens';

/** Maps our tokens onto React Navigation's theme so headers, cards and tab bars follow it. */
export function toNavigationTheme(theme: Theme): NavigationTheme {
  const base = theme.scheme === 'dark' ? DarkTheme : DefaultTheme;
  const { colors } = theme;

  return {
    ...base,
    colors: {
      ...base.colors,
      primary: colors.brand,
      background: colors.background,
      card: colors.surfaceElevated,
      text: colors.text,
      border: colors.border,
      notification: colors.badge,
    },
  };
}
