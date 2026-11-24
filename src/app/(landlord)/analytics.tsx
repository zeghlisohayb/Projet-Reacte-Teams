import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';

export default function AnalyticsScreen() {
  const goBack = useGoBack();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      title={t('screens.analytics.title')}
      description={t('screens.analytics.description')}
      actions={[
        { label: t('common.back'), onPress: goBack, variant: 'ghost' },
      ]}
    />
  );
}
