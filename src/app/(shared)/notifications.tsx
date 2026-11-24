import { useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';

export default function NotificationsScreen() {
  const router = useRouter();
  const goBack = useGoBack();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      title={t('screens.notifications.title')}
      description={t('screens.notifications.description')}
      actions={[
        {
          label: t('actions.openChat'),
          onPress: () => router.push({ pathname: '/chat/[conversationId]', params: { conversationId: '1' } }),
          variant: 'secondary',
        },
        { label: t('common.back'), onPress: goBack, variant: 'ghost' },
      ]}
    />
  );
}
