import { useSyncExternalStore } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

const subscribe = () => () => {};

/**
 * With static/server rendering the color scheme is unknown on the server, so we render
 * 'light' there and during hydration, then switch to the real value on the client.
 */
export function useColorScheme() {
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const colorScheme = useRNColorScheme();

  return isClient ? colorScheme : 'light';
}
