import { Stack } from 'expo-router';

import { useTranslation } from '@/lib/i18n';

// SDK 58: `anchor` replaces the deprecated `initialRouteName`.
export const unstable_settings = {
  anchor: '(tabs)',
};

export default function LandlordLayout() {
  const { t } = useTranslation();

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* Title is set by the screen itself (new vs. edit). */}
      <Stack.Screen name="listing-editor/[id]" />
      <Stack.Screen name="verification" options={{ title: t('screens.verification.title') }} />
      <Stack.Screen name="analytics" options={{ title: t('screens.analytics.title') }} />
    </Stack>
  );
}
