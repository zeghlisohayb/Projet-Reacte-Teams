import { useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useTranslation } from '@/lib/i18n';

export default function LandlordInquiriesScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      title={t('screens.inquiries.title')}
      description={t('screens.inquiries.description')}
      actions={[
        {
          label: t('actions.openChat'),
          onPress: () => router.push({ pathname: '/chat/[conversationId]', params: { conversationId: '1' } }),
        },
        {
          label: t('actions.viewStudent'),
          onPress: () => router.push({ pathname: '/student/[userId]', params: { userId: 's1' } }),
          variant: 'secondary',
        },
      ]}
    />
  );
}
