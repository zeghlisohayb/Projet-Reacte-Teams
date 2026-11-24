import { useRouter } from 'expo-router';

/**
 * Back that also works after a deep link (empty history): falls back to `/`,
 * which redirects to the right home for the current auth state.
 */
export function useGoBack() {
  const router = useRouter();

  return () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/');
    }
  };
}
