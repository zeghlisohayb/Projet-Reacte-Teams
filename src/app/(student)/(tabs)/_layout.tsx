import { Tabs } from 'expo-router/js-tabs';

import { TabIcon } from '@/components/ui/tab-icon';
import { useTabScreenOptions } from '@/hooks/use-tab-screen-options';
import { useTranslation } from '@/lib/i18n';

// TODO: replace with the real unread count once messaging exists.
const PLACEHOLDER_UNREAD_COUNT = 2;

export default function StudentTabsLayout() {
  const { t } = useTranslation();
  const screenOptions = useTabScreenOptions();

  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen
        name="home"
        options={{
          title: t('tabs.home'),
          tabBarIcon: (p) => <TabIcon ios="house" iosFocused="house.fill" android="home" {...p} />,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: t('tabs.map'),
          tabBarIcon: (p) => <TabIcon ios="map" iosFocused="map.fill" android="map" {...p} />,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: t('tabs.saved'),
          tabBarIcon: (p) => <TabIcon ios="heart" iosFocused="heart.fill" android="favorite" {...p} />,
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: t('tabs.inbox'),
          tabBarBadge: PLACEHOLDER_UNREAD_COUNT,
          tabBarIcon: (p) => (
            <TabIcon
              ios="bubble.left.and.bubble.right"
              iosFocused="bubble.left.and.bubble.right.fill"
              android="chat"
              {...p}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t('tabs.profile'),
          tabBarIcon: (p) => <TabIcon ios="person" iosFocused="person.fill" android="person" {...p} />,
        }}
      />
    </Tabs>
  );
}
