import { useRouter } from 'expo-router';

import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';

export default function SearchScreen() {
  const router = useRouter();
  const goBack = useGoBack();
  const { t } = useTranslation();

  return (
    <ScreenPlaceholder
      title={t('screens.search.title')}
      description={t('screens.search.description')}
      actions={[
        {
          label: t('actions.openListing'),
          onPress: () => router.push({ pathname: '/listing/[id]', params: { id: '1' } }),
        },
        {
          label: t('actions.filters'),
          onPress: () => router.push({ pathname: '/filter', params: { cityId: 'rabat' } }),
          variant: 'secondary',
        },
        { label: t('common.back'), onPress: goBack, variant: 'ghost' },
      ]}
    />
  );
}
