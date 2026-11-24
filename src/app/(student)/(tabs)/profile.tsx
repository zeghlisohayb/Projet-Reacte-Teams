import { useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useTranslation } from '@/lib/i18n';
import { useAuthStore } from '@/stores/auth-store';

export default function StudentProfileScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const signOut = useAuthStore((state) => state.signOut);

  // signOut flips the root guards; the (student) guard then redirects to /splash.

  return (
    <ScreenPlaceholder
      title={t('screens.studentProfile.title')}
      description={t('screens.studentProfile.description')}
      actions={[
        {
          label: t('actions.notifications'),
          onPress: () => router.push('/notifications'),
          variant: 'secondary',
        },
        { label: t('actions.signOut'), onPress: signOut, variant: 'ghost' },
      ]}
    />
  );
}
