/**
 * Design tokens for Inobilier-Etudiant.
 *
 * Palette: warm Moroccan terracotta (brand) paired with a deep "zellige" teal
 * (accent) on sand-toned neutrals — warm and trustworthy rather than tech-blue.
 *
 * Rule: screens never hardcode colors. Read them from `useTheme().colors`.
 * Ported from the Expo template (example/src/constants/theme.ts) and expanded.
 */

import { Platform, type TextStyle, type ViewStyle } from 'react-native';

const palette = {
  terracotta50: '#FBF1EB',
  terracotta100: '#F8E6DC',
  terracotta300: '#E58A63',
  terracotta400: '#D4754D',
  terracotta600: '#B4532A',
  terracotta700: '#96431F',
  terracotta900: '#3A2419',

  teal300: '#5FB3AA',
  teal700: '#1E5E5A',
  teal950: '#0E2523',

  sand0: '#FFFFFF',
  sand50: '#FBF8F4',
  sand100: '#F3EDE6',
  sand200: '#E4DBD1',
  sand500: '#8F8178',
  sand600: '#6B5D54',
  sand900: '#2A211C',

  night950: '#17120F',
  night900: '#221B17',
  night800: '#2C241F',
  night700: '#3A302A',
  night400: '#9C8E85',
  night200: '#C9BBB1',
  night50: '#F5EEE8',

  green600: '#2E7D4F',
  green300: '#6CC48F',
  amber600: '#B7791F',
  amber300: '#E3B456',
  red600: '#B3261E',
  red300: '#F2867E',
} as const;

const light = {
  // Surfaces
  background: palette.sand50,
  surface: palette.sand100,
  surfaceElevated: palette.sand0,
  border: palette.sand200,
  overlay: 'rgba(42, 33, 28, 0.45)',

  // Text
  text: palette.sand900,
  textSecondary: palette.sand600,
  textMuted: palette.sand500,

  // Brand
  brand: palette.terracotta600,
  brandPressed: palette.terracotta700,
  brandSoft: palette.terracotta100,
  onBrand: palette.sand0,

  accent: palette.teal700,
  onAccent: palette.sand0,

  // Feedback
  success: palette.green600,
  warning: palette.amber600,
  danger: palette.red600,

  // Navigation chrome
  tabBar: palette.sand0,
  tabIconDefault: palette.sand500,
  tabIconSelected: palette.terracotta600,
  badge: palette.red600,
  onBadge: palette.sand0,

  shadow: 'rgba(42, 33, 28, 0.12)',
} as const;

export type ThemeColors = { readonly [K in keyof typeof light]: string };
export type ThemeColor = keyof ThemeColors;

const dark: ThemeColors = {
  background: palette.night950,
  surface: palette.night900,
  surfaceElevated: palette.night800,
  border: palette.night700,
  overlay: 'rgba(0, 0, 0, 0.6)',

  text: palette.night50,
  textSecondary: palette.night200,
  textMuted: palette.night400,

  brand: palette.terracotta300,
  brandPressed: palette.terracotta400,
  brandSoft: palette.terracotta900,
  onBrand: '#2A140A',

  accent: palette.teal300,
  onAccent: palette.teal950,

  success: palette.green300,
  warning: palette.amber300,
  danger: palette.red300,

  tabBar: palette.night900,
  tabIconDefault: palette.night400,
  tabIconSelected: palette.terracotta300,
  badge: palette.red300,
  onBadge: palette.night950,

  shadow: 'rgba(0, 0, 0, 0.5)',
};

export const Colors: Record<ColorSchemeName, ThemeColors> = { light, dark };

export type ColorSchemeName = 'light' | 'dark';

/** 4pt-based spacing scale. */
export const Spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const Radius = {
  none: 0,
  sm: 6,
  md: 10,
  lg: 16,
  xl: 24,
  pill: 999,
} as const;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  web: {
    sans: 'system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans Arabic", sans-serif',
    rounded: 'ui-rounded, system-ui, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  },
  default: {
    sans: 'normal',
    rounded: 'normal',
    mono: 'monospace',
  },
});

/** Typography scale. Colors are applied by <ThemedText>, never here. */
export const Typography = {
  display: { fontFamily: Fonts.sans, fontSize: 34, lineHeight: 40, fontWeight: '700' },
  title: { fontFamily: Fonts.sans, fontSize: 28, lineHeight: 34, fontWeight: '700' },
  heading: { fontFamily: Fonts.sans, fontSize: 22, lineHeight: 28, fontWeight: '600' },
  subheading: { fontFamily: Fonts.sans, fontSize: 18, lineHeight: 24, fontWeight: '600' },
  body: { fontFamily: Fonts.sans, fontSize: 16, lineHeight: 24, fontWeight: '400' },
  bodyStrong: { fontFamily: Fonts.sans, fontSize: 16, lineHeight: 24, fontWeight: '600' },
  label: { fontFamily: Fonts.sans, fontSize: 14, lineHeight: 20, fontWeight: '600' },
  caption: { fontFamily: Fonts.sans, fontSize: 13, lineHeight: 18, fontWeight: '400' },
  overline: {
    fontFamily: Fonts.sans,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
} as const satisfies Record<string, TextStyle>;

export type TypographyVariant = keyof typeof Typography;

/** Elevation, expressed with the cross-platform `boxShadow` style (New Architecture). */
function makeShadows(colors: ThemeColors) {
  return {
    none: {},
    sm: { boxShadow: `0px 1px 2px ${colors.shadow}` },
    md: { boxShadow: `0px 4px 12px ${colors.shadow}` },
    lg: { boxShadow: `0px 12px 28px ${colors.shadow}` },
  } as const satisfies Record<string, ViewStyle>;
}

export type Shadows = ReturnType<typeof makeShadows>;

export type Theme = {
  scheme: ColorSchemeName;
  colors: ThemeColors;
  spacing: typeof Spacing;
  radius: typeof Radius;
  typography: typeof Typography;
  shadows: Shadows;
};

export const Themes: Record<ColorSchemeName, Theme> = {
  light: {
    scheme: 'light',
    colors: light,
    spacing: Spacing,
    radius: Radius,
    typography: Typography,
    shadows: makeShadows(light),
  },
  dark: {
    scheme: 'dark',
    colors: dark,
    spacing: Spacing,
    radius: Radius,
    typography: Typography,
    shadows: makeShadows(dark),
  },
};

export const MaxContentWidth = 640;
