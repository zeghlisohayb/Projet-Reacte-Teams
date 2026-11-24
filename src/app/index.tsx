import { Redirect } from 'expo-router';

import { selectIsAuthenticated, useAuthStore } from '@/stores/auth-store';

/**
 * Entry point for `/` (app launch, web root, back-fallback after a deep link).
 * Renders nothing: it only forwards to the (auth) splash or the role's home tab.
 * Without a route for `/`, Expo Router would show its "Unmatched route" screen.
 */
export default function Index() {
  const role = useAuthStore((state) => state.role);
  const isAuthenticated = useAuthStore(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Redirect href="/splash" />;
  }

  return <Redirect href={role === 'landlord' ? '/dashboard' : '/home'} />;
}
