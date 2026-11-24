import { Pressable, StyleSheet, type PressableProps } from 'react-native';

import { useTheme, type ThemeColor } from '@/theme';

import { ThemedText } from './themed-text';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export type ButtonProps = Omit<PressableProps, 'children' | 'style'> & {
  label: string;
  variant?: ButtonVariant;
};

const variantColors: Record<
  ButtonVariant,
  { background: ThemeColor | null; pressed: ThemeColor; text: ThemeColor; border: ThemeColor | null }
> = {
  primary: { background: 'brand', pressed: 'brandPressed', text: 'onBrand', border: null },
  secondary: { background: 'surfaceElevated', pressed: 'surface', text: 'text', border: 'border' },
  ghost: { background: null, pressed: 'brandSoft', text: 'brand', border: null },
};

export function Button({ label, variant = 'primary', disabled, ...rest }: ButtonProps) {
  const theme = useTheme();
  const v = variantColors[variant];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        {
          paddingVertical: theme.spacing.md,
          paddingHorizontal: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundColor: pressed
            ? theme.colors[v.pressed]
            : v.background
              ? theme.colors[v.background]
              : 'transparent',
          borderColor: v.border ? theme.colors[v.border] : 'transparent',
          opacity: disabled ? 0.5 : 1,
        },
        variant === 'primary' && theme.shadows.sm,
      ]}
      {...rest}>
      <ThemedText variant="label" color={v.text} style={styles.label}>
        {label}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    minHeight: 48,
  },
  label: {
    textAlign: 'center',
  },
});
