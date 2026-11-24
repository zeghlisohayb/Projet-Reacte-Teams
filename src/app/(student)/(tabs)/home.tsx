import { useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useTranslation } from '@/lib/i18n';

export default function StudentHomeScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      title={t('screens.home.title')}
      description={t('screens.home.description')}
      actions={[
        {
          label: t('actions.openListing'),
          onPress: () => router.push({ pathname: '/listing/[id]', params: { id: '1' } }),
        },
        { label: t('actions.search'), onPress: () => router.push('/search'), variant: 'secondary' },
        {
          label: t('actions.notifications'),
          onPress: () => router.push('/notifications'),
          variant: 'ghost',
        },
      ]}
    />
  );
}
