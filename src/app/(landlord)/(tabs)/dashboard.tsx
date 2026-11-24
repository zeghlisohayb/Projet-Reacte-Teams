import { useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useTranslation } from '@/lib/i18n';

export default function LandlordDashboardScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      title={t('screens.dashboard.title')}
      description={t('screens.dashboard.description')}
      actions={[
        { label: t('actions.analytics'), onPress: () => router.push('/analytics') },
        {
          label: t('actions.notifications'),
          onPress: () => router.push('/notifications'),
          variant: 'secondary',
        },
      ]}
    />
  );
}
