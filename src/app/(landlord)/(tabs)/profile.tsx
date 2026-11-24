import { useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useTranslation } from '@/lib/i18n';
import { useAuthStore } from '@/stores/auth-store';

export default function LandlordProfileScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const signOut = useAuthStore((state) => state.signOut);

  // signOut flips the root guards; the (landlord) guard then redirects to /splash.

  return (
    <ScreenPlaceholder
      title={t('screens.landlordProfile.title')}
      description={t('screens.landlordProfile.description')}
      actions={[
        { label: t('actions.verify'), onPress: () => router.push('/verification') },
        { label: t('actions.signOut'), onPress: signOut, variant: 'ghost' },
      ]}
    />
  );
}
