import { Stack } from 'expo-router';

import { useTranslation } from '@/lib/i18n';

// SDK 58: `anchor` replaces the deprecated `initialRouteName`.
export const unstable_settings = {
  anchor: '(tabs)',
};

export default function StudentLayout() {
  const { t } = useTranslation();

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="search" options={{ title: t('screens.search.title') }} />
    </Stack>
  );
}
