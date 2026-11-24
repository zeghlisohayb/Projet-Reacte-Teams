import { Stack } from 'expo-router';

import { useTranslation } from '@/lib/i18n';

/** Screens reachable by students, landlords and guests (see root guards). */
export default function SharedLayout() {
  const { t } = useTranslation();

  return (
    <Stack>
      <Stack.Screen name="listing/[id]" options={{ title: t('screens.listing.title') }} />
      <Stack.Screen name="chat/[conversationId]" options={{ title: t('screens.chat.title') }} />
      <Stack.Screen name="landlord/[userId]" options={{ title: t('screens.landlordPublic.title') }} />
      <Stack.Screen name="student/[userId]" options={{ title: t('screens.studentPublic.title') }} />
      <Stack.Screen name="photo-gallery" options={{ title: t('screens.photoGallery.title') }} />
      <Stack.Screen name="notifications" options={{ title: t('screens.notifications.title') }} />
      <Stack.Screen
        name="filter"
        options={{ title: t('screens.filter.title'), presentation: 'modal' }}
      />
      <Stack.Screen
        name="report"
        options={{ title: t('screens.report.title'), presentation: 'modal' }}
      />
    </Stack>
  );
}
