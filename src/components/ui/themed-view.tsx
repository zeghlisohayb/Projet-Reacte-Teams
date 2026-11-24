import { View, type ViewProps } from 'react-native';

import { useTheme, type ThemeColor } from '@/theme';

export type ThemedViewProps = ViewProps & {
  /** Background token. Defaults to `background`. */
  surface?: ThemeColor;
};

export function ThemedView({ style, surface = 'background', ...rest }: ThemedViewProps) {
  const theme = useTheme();

  return <View style={[{ backgroundColor: theme.colors[surface] }, style]} {...rest} />;
}
