import { SymbolView, type AndroidSymbol, type SFSymbol } from 'expo-symbols';
import type { ColorValue } from 'react-native';

type TabIconProps = {
  /** SF Symbol (iOS). */
  ios: SFSymbol;
  /** SF Symbol used when the tab is focused (usually the `.fill` variant). */
  iosFocused?: SFSymbol;
  /** Material Symbol (Android + web). */
  android: AndroidSymbol;
  focused: boolean;
  color: ColorValue;
  size: number;
};

/** SF Symbols on iOS, Material Symbols on Android/web — both via expo-symbols. */
export function TabIcon({ ios, iosFocused, android, focused, color, size }: TabIconProps) {
  return (
    <SymbolView
      name={{ ios: focused && iosFocused ? iosFocused : ios, android, web: android }}
      tintColor={color}
      size={size}
    />
  );
}
