import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';
import { useAuthStore } from '@/stores/auth-store';

export default function LandlordSetupScreen() {
  const goBack = useGoBack();
  const { t } = useTranslation();
  const signIn = useAuthStore((state) => state.signIn);

  // signIn flips the root guards; the (auth) guard then redirects to /dashboard.

  return (
    <ScreenPlaceholder
      insetTop
      title={t('screens.setupLandlord.title')}
      description={t('screens.setupLandlord.description')}
      actions={[
        {
          label: t('common.continue'),
          onPress: () => signIn('landlord', { id: 'dev-landlord-1', name: 'Dev Landlord' }),
        },
        { label: t('common.back'), onPress: goBack, variant: 'ghost' },
      ]}
    />
  );
}
