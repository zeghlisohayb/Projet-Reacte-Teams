import { ActivityIndicator, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { useTranslation } from '@/lib/i18n';
import { useTheme } from '@/theme';

export function FullScreenLoader() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <ThemedView style={[styles.container, { gap: theme.spacing.lg }]}>
      <ActivityIndicator size="large" color={theme.colors.brand} />
      <ThemedText variant="caption" color="textSecondary">
        {t('common.loading')}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
