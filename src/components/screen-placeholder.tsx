import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, type ButtonVariant } from '@/components/ui/button';
import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { useTranslation } from '@/lib/i18n';
import { MaxContentWidth, useTheme } from '@/theme';

export type PlaceholderAction = {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
};

type ScreenPlaceholderProps = {
  title: string;
  description: string;
  /** Extra line under the description, e.g. the route param received. */
  meta?: string;
  actions?: PlaceholderAction[];
  /** Pad for the status bar. Set on screens rendered without a navigation header. */
  insetTop?: boolean;
};

/**
 * Temporary screen body used by every route until real content is built.
 * Shows the screen name, what it will do, and buttons to walk the flow.
 */
export function ScreenPlaceholder({ title, description, meta, actions = [], insetTop = false }: ScreenPlaceholderProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <ThemedView style={styles.flex}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          {
            padding: theme.spacing.xl,
            paddingTop: theme.spacing.xl + (insetTop ? insets.top : 0),
            paddingBottom: theme.spacing.xl + insets.bottom,
          },
        ]}>
        <View style={[styles.inner, { gap: theme.spacing.sm }]}>
          <ThemedText variant="overline" color="brand">
            {t('common.placeholder')}
          </ThemedText>
          <ThemedText variant="title" accessibilityRole="header">
            {title}
          </ThemedText>
          <ThemedText color="textSecondary">{description}</ThemedText>
          {meta ? (
            <ThemedView
              surface="surface"
              style={{
                alignSelf: 'flex-start',
                marginTop: theme.spacing.xs,
                paddingVertical: theme.spacing.xs,
                paddingHorizontal: theme.spacing.sm,
                borderRadius: theme.radius.sm,
              }}>
              <ThemedText variant="caption" color="textSecondary">
                {meta}
              </ThemedText>
            </ThemedView>
          ) : null}

          {actions.length > 0 ? (
            <View style={{ gap: theme.spacing.md, marginTop: theme.spacing.xl }}>
              {actions.map((action) => (
                <Button key={action.label} {...action} />
              ))}
            </View>
          ) : null}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
  },
  inner: {
    width: '100%',
    maxWidth: MaxContentWidth,
  },
});
