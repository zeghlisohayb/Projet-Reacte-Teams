import { Stack, ThemeProvider } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { FullScreenLoader } from '@/components/full-screen-loader';
import { selectIsAuthenticated, useAuthStore } from '@/stores/auth-store';
import { toNavigationTheme, useTheme } from '@/theme';

export default function RootLayout() {
  const theme = useTheme();

  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <ThemeProvider value={toNavigationTheme(theme)}>
          <StatusBar style={theme.scheme === 'dark' ? 'light' : 'dark'} />
          <RootNavigator />
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

function RootNavigator() {
  const hydrated = useAuthStore((state) => state._hydrated);
  const role = useAuthStore((state) => state.role);
  const isAuthenticated = useAuthStore(selectIsAuthenticated);

  if (!hydrated) {
    return <FullScreenLoader />;
  }

  // Where a guard sends the user when it closes (e.g. right after signIn/signOut).
  const roleHome = role === 'landlord' ? '/dashboard' : '/home';
  const outsideRole = isAuthenticated ? roleHome : '/splash';

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* `/` only redirects to the right entry point for the current auth state. */}
      <Stack.Screen name="index" />

      <Stack.Protected guard={!isAuthenticated} redirectTo={roleHome}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>

      <Stack.Protected guard={isAuthenticated && role === 'student'} redirectTo={outsideRole}>
        <Stack.Screen name="(student)" />
      </Stack.Protected>

      <Stack.Protected guard={isAuthenticated && role === 'landlord'} redirectTo={outsideRole}>
        <Stack.Screen name="(landlord)" />
      </Stack.Protected>

      {/* Listings, chats and public profiles: open to both roles and to guests. */}
      <Stack.Protected guard>
        <Stack.Screen name="(shared)" />
      </Stack.Protected>
    </Stack>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
