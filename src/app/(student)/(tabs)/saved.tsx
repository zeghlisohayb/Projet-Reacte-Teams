import { useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useTranslation } from '@/lib/i18n';

export default function StudentSavedScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      title={t('screens.saved.title')}
      description={t('screens.saved.description')}
      actions={[
        {
          label: t('actions.openListing'),
          onPress: () => router.push({ pathname: '/listing/[id]', params: { id: '1' } }),
        },
      ]}
    />
  );
}
