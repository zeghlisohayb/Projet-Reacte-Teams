import { useLocalSearchParams, useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';
import type { SharedStackParamList } from '@/types/navigation';

export default function ChatScreen() {
  const { conversationId } = useLocalSearchParams<SharedStackParamList['chat/[conversationId]']>();
  const router = useRouter();
  const goBack = useGoBack();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      title={t('screens.chat.title')}
      description={t('screens.chat.description')}
      meta={t('common.idLabel', { id: conversationId })}
      actions={[
        {
          label: t('actions.openListing'),
          onPress: () => router.push({ pathname: '/listing/[id]', params: { id: '1' } }),
          variant: 'secondary',
        },
        { label: t('common.back'), onPress: goBack, variant: 'ghost' },
      ]}
    />
  );
}
