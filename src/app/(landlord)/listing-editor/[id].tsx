import { Stack, useLocalSearchParams, useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';
import type { LandlordStackParamList } from '@/types/navigation';

export default function ListingEditorScreen() {
  const { id } = useLocalSearchParams<LandlordStackParamList['listing-editor/[id]']>();
  const router = useRouter();
  const goBack = useGoBack();
  const { t } = useTranslation();

  const isNew = id === 'new';
  const title = isNew ? t('screens.listingEditor.titleNew') : t('screens.listingEditor.titleEdit');

  return (
    <>
      <Stack.Screen options={{ title }} />
      <ScreenPlaceholder
        title={title}
        description={t('screens.listingEditor.description')}
        meta={isNew ? undefined : t('common.idLabel', { id })}
        actions={[
          { label: t('actions.startVerification'), onPress: () => router.push('/verification') },
          { label: t('common.back'), onPress: goBack, variant: 'ghost' },
        ]}
      />
    </>
  );
}
