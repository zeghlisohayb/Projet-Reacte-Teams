import { useLocalSearchParams } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';
import type { SharedStackParamList } from '@/types/navigation';

export default function PhotoGalleryScreen() {
  const { listingId } = useLocalSearchParams<SharedStackParamList['photo-gallery']>();
  const goBack = useGoBack();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      title={t('screens.photoGallery.title')}
      description={t('screens.photoGallery.description')}
      meta={listingId ? t('common.idLabel', { id: listingId }) : undefined}
      actions={[
        { label: t('common.back'), onPress: goBack, variant: 'ghost' },
      ]}
    />
  );
}
