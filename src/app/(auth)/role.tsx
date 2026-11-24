import { useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';

export default function RoleScreen() {
  const router = useRouter();
  const goBack = useGoBack();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      insetTop
      title={t('screens.role.title')}
      description={t('screens.role.description')}
      actions={[
        { label: t('actions.imStudent'), onPress: () => router.push('/setup/student') },
        { label: t('actions.imLandlord'), onPress: () => router.push('/setup/landlord') },
        { label: t('common.back'), onPress: goBack, variant: 'ghost' },
      ]}
    />
  );
}
