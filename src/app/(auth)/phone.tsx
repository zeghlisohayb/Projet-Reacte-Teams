import { useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';

export default function PhoneScreen() {
  const router = useRouter();
  const goBack = useGoBack();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      insetTop
      title={t('screens.phone.title')}
      description={t('screens.phone.description')}
      actions={[
        {
          label: t('actions.sendCode'),
          onPress: () => router.push({ pathname: '/otp', params: { phone: '+212600000000' } }),
        },
        {
          label: t('actions.viewTerms'),
          onPress: () => router.push('/terms'),
          variant: 'secondary',
        },
        { label: t('common.back'), onPress: goBack, variant: 'ghost' },
      ]}
    />
  );
}
