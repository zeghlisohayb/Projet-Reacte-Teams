import { useLocalSearchParams, useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';
import type { SharedStackParamList } from '@/types/navigation';

export default function ListingScreen() {
  const { id } = useLocalSearchParams<SharedStackParamList['listing/[id]']>();
  const router = useRouter();
  const goBack = useGoBack();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      title={t('screens.listing.title')}
      description={t('screens.listing.description')}
      meta={t('common.idLabel', { id })}
      actions={[
        {
          label: t('actions.chat'),
          onPress: () => router.push({ pathname: '/chat/[conversationId]', params: { conversationId: '1' } }),
        },
        {
          label: t('actions.viewPhotos'),
          onPress: () => router.push({ pathname: '/photo-gallery', params: { listingId: id } }),
          variant: 'secondary',
        },
        {
          label: t('actions.viewLandlord'),
          onPress: () => router.push({ pathname: '/landlord/[userId]', params: { userId: 'u1' } }),
          variant: 'secondary',
        },
        {
          label: t('actions.report'),
          onPress: () => router.push({ pathname: '/report', params: { listingId: id } }),
          variant: 'secondary',
        },
        { label: t('common.back'), onPress: goBack, variant: 'ghost' },
      ]}
    />
  );
}
