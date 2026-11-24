import { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';
import { useUiStore } from '@/stores/ui-store';
import type { ListingFilters } from '@/types/navigation';

export default function FilterScreen() {
  const { cityId } = useLocalSearchParams<ListingFilters>();
  const goBack = useGoBack();
  const { t } = useTranslation();
  const setFilterModalOpen = useUiStore((state) => state.setFilterModalOpen);

  // Lets other screens (e.g. the map) know the filter sheet is on top.
  useEffect(() => {
    setFilterModalOpen(true);
    return () => setFilterModalOpen(false);
  }, [setFilterModalOpen]);

  return (
    <ScreenPlaceholder
      title={t('screens.filter.title')}
      description={t('screens.filter.description')}
      meta={cityId ? t('common.idLabel', { id: cityId }) : undefined}
      actions={[
        { label: t('actions.apply'), onPress: goBack },
        { label: t('common.cancel'), onPress: goBack, variant: 'ghost' },
      ]}
    />
  );
}
