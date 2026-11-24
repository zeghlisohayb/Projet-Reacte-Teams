import { useLocalSearchParams, useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';
import type { AuthScreens } from '@/types/navigation';

export default function OtpScreen() {
  const { phone } = useLocalSearchParams<AuthScreens['otp']>();
  const router = useRouter();
  const goBack = useGoBack();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      insetTop
      title={t('screens.otp.title')}
      description={t('screens.otp.description')}
      meta={phone}
      actions={[
        { label: t('actions.verify'), onPress: () => router.push('/role') },
        { label: t('common.back'), onPress: goBack, variant: 'ghost' },
      ]}
    />
  );
}
