import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';

export default function TermsScreen() {
  const goBack = useGoBack();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      insetTop
      title={t('screens.terms.title')}
      description={t('screens.terms.description')}
      actions={[
        { label: t('common.back'), onPress: goBack, variant: 'ghost' },
      ]}
    />
  );
}
