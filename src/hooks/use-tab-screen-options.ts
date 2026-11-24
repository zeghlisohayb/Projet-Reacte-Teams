import type { BottomTabNavigationOptions } from 'expo-router/js-tabs';

import { useTheme } from '@/theme';

/** Tab bar + header styling shared by the student and landlord tab navigators. */
export function useTabScreenOptions(): BottomTabNavigationOptions {
  const { colors, typography } = useTheme();

  return {
    tabBarActiveTintColor: colors.tabIconSelected,
    tabBarInactiveTintColor: colors.tabIconDefault,
    tabBarStyle: {
      backgroundColor: colors.tabBar,
      borderTopColor: colors.border,
    },
    tabBarLabelStyle: {
      fontFamily: typography.caption.fontFamily,
      fontWeight: typography.label.fontWeight,
    },
    tabBarBadgeStyle: {
      backgroundColor: colors.badge,
      color: colors.onBadge,
    },
    headerStyle: { backgroundColor: colors.surfaceElevated },
    headerTintColor: colors.text,
    headerShadowVisible: false,
  };
}
