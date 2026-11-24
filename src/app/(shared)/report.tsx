import { useLocalSearchParams } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';
import type { SharedStackParamList } from '@/types/navigation';

export default function ReportScreen() {
  const { listingId, userId } = useLocalSearchParams<SharedStackParamList['report']>();
  const goBack = useGoBack();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      title={t('screens.report.title')}
      description={t('screens.report.description')}
      meta={listingId || userId ? t('common.idLabel', { id: listingId ?? userId ?? '' }) : undefined}
      actions={[
        { label: t('actions.submit'), onPress: goBack },
        { label: t('common.cancel'), onPress: goBack, variant: 'ghost' },
      ]}
    />
  );
}
