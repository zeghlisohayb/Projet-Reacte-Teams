import { useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useTranslation } from '@/lib/i18n';

export default function SplashScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      insetTop
      title={t('screens.splash.title')}
      description={t('app.tagline')}
      actions={[
        { label: t('common.continue'), onPress: () => router.push('/onboarding') },
        {
          label: t('actions.exploreAsGuest'),
          onPress: () => router.push({ pathname: '/listing/[id]', params: { id: '1' } }),
          variant: 'secondary',
        },
      ]}
    />
  );
}
