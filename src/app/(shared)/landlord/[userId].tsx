import { useLocalSearchParams, useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';
import type { SharedStackParamList } from '@/types/navigation';

export default function LandlordPublicProfileScreen() {
  const { userId } = useLocalSearchParams<SharedStackParamList['landlord/[userId]']>();
  const router = useRouter();
  const goBack = useGoBack();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      title={t('screens.landlordPublic.title')}
      description={t('screens.landlordPublic.description')}
      meta={t('common.idLabel', { id: userId })}
      actions={[
        {
          label: t('actions.openListing'),
          onPress: () => router.push({ pathname: '/listing/[id]', params: { id: '1' } }),
        },
        {
          label: t('actions.report'),
          onPress: () => router.push({ pathname: '/report', params: { userId } }),
          variant: 'secondary',
        },
        { label: t('common.back'), onPress: goBack, variant: 'ghost' },
      ]}
    />
  );
}
