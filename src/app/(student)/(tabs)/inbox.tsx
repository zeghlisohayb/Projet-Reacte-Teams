import { useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useTranslation } from '@/lib/i18n';

export default function StudentInboxScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      title={t('screens.inbox.title')}
      description={t('screens.inbox.description')}
      actions={[
        {
          label: t('actions.openChat'),
          onPress: () => router.push({ pathname: '/chat/[conversationId]', params: { conversationId: '1' } }),
        },
      ]}
    />
  );
}
