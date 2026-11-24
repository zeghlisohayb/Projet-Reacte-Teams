import { Tabs } from 'expo-router/js-tabs';

import { TabIcon } from '@/components/ui/tab-icon';
import { useTabScreenOptions } from '@/hooks/use-tab-screen-options';
import { useTranslation } from '@/lib/i18n';

export default function LandlordTabsLayout() {
  const { t } = useTranslation();
  const screenOptions = useTabScreenOptions();

  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: t('tabs.dashboard'),
          tabBarIcon: (p) => (
            <TabIcon ios="square.grid.2x2" iosFocused="square.grid.2x2.fill" android="dashboard" {...p} />
          ),
        }}
      />
      <Tabs.Screen
        name="listings"
        options={{
          title: t('tabs.listings'),
          tabBarIcon: (p) => (
            <TabIcon ios="building.2" iosFocused="building.2.fill" android="apartment" {...p} />
          ),
        }}
      />
      <Tabs.Screen
        name="inquiries"
        options={{
          title: t('tabs.inquiries'),
          tabBarIcon: (p) => <TabIcon ios="tray" iosFocused="tray.fill" android="inbox" {...p} />,
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
