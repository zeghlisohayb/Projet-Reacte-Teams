import { Text, type TextProps } from 'react-native';

import { useTheme, type ThemeColor, type TypographyVariant } from '@/theme';

export type ThemedTextProps = TextProps & {
  variant?: TypographyVariant;
  color?: ThemeColor;
};

export function ThemedText({ style, variant = 'body', color = 'text', ...rest }: ThemedTextProps) {
  const theme = useTheme();

  return <Text style={[theme.typography[variant], { color: theme.colors[color] }, style]} {...rest} />;
}
