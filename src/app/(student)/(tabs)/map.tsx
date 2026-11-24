import { useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useTranslation } from '@/lib/i18n';

export default function StudentMapScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      title={t('screens.map.title')}
      description={t('screens.map.description')}
      actions={[
        {
          label: t('actions.openListing'),
          onPress: () => router.push({ pathname: '/listing/[id]', params: { id: '1' } }),
        },
        {
          label: t('actions.filters'),
          onPress: () => router.push('/filter'),
          variant: 'secondary',
        },
      ]}
    />
  );
}
