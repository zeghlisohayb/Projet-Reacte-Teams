import { useLocalSearchParams, useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';
import type { SharedStackParamList } from '@/types/navigation';

export default function StudentPublicProfileScreen() {
  const { userId } = useLocalSearchParams<SharedStackParamList['student/[userId]']>();
  const router = useRouter();
  const goBack = useGoBack();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      title={t('screens.studentPublic.title')}
      description={t('screens.studentPublic.description')}
      meta={t('common.idLabel', { id: userId })}
      actions={[
        {
          label: t('actions.report'),
          onPress: () => router.push({ pathname: '/report', params: { userId } }),
          variant: 'secondary',
        },
        { label: t('common.back'), onPress: goBack, variant: 'ghost' },
      ]}
    />
  );
}
