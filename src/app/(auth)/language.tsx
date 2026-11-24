import { useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';

export default function LanguageScreen() {
  const router = useRouter();
  const goBack = useGoBack();
  const { t, locale, setLocale } = useTranslation();

  return (
    <ScreenPlaceholder
      insetTop
      title={t('screens.language.title')}
      description={t('screens.language.description')}
      meta={t('language.current', { language: locale === 'ar' ? t('language.arabic') : t('language.french') })}
      actions={[
        {
          label: t('language.french'),
          onPress: () => setLocale('fr'),
          variant: locale === 'fr' ? 'primary' : 'secondary',
        },
        {
          label: t('language.arabic'),
          onPress: () => setLocale('ar'),
          variant: locale === 'ar' ? 'primary' : 'secondary',
        },
        { label: t('common.continue'), onPress: () => router.push('/phone') },
        { label: t('common.back'), onPress: goBack, variant: 'ghost' },
      ]}
    />
  );
}
