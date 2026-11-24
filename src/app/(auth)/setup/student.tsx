import { ScreenPlaceholder } from '@/components/screen-placeholder';
import { useGoBack } from '@/hooks/use-go-back';
import { useTranslation } from '@/lib/i18n';
import { useAuthStore } from '@/stores/auth-store';

export default function StudentSetupScreen() {
  const goBack = useGoBack();
  const { t } = useTranslation();
  const signIn = useAuthStore((state) => state.signIn);

  // signIn flips the root guards; the (auth) guard then redirects to /home.

  return (
    <ScreenPlaceholder
      insetTop
      title={t('screens.setupStudent.title')}
      description={t('screens.setupStudent.description')}
      actions={[
        {
          label: t('common.continue'),
          onPress: () => signIn('student', { id: 'dev-student-1', name: 'Dev Student' }),
        },
        { label: t('common.back'), onPress: goBack, variant: 'ghost' },
      ]}
    />
  );
}
