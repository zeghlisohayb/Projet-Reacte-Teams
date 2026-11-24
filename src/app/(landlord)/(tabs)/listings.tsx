import { useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useTranslation } from '@/lib/i18n';

export default function LandlordListingsScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      title={t('screens.listings.title')}
      description={t('screens.listings.description')}
      actions={[
        {
          label: t('actions.newListing'),
          onPress: () => router.push({ pathname: '/listing-editor/[id]', params: { id: 'new' } }),
        },
        {
          label: t('actions.editListing'),
          onPress: () => router.push({ pathname: '/listing-editor/[id]', params: { id: '1' } }),
          variant: 'secondary',
        },
        {
          label: t('actions.openListing'),
          onPress: () => router.push({ pathname: '/listing/[id]', params: { id: '1' } }),
          variant: 'secondary',
        },
      ]}
    />
  );
}
