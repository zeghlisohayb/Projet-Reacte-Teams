import { Stack } from 'expo-router';

// SDK 58: `anchor` replaces the deprecated `initialRouteName`.
export const unstable_settings = {
  anchor: 'splash',
};

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" options={{ animation: 'fade' }} />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="language" />
      <Stack.Screen name="phone" />
      <Stack.Screen name="otp" />
      <Stack.Screen name="role" />
      <Stack.Screen name="setup/student" />
      <Stack.Screen name="setup/landlord" />
      <Stack.Screen name="terms" options={{ presentation: 'modal' }} />
    </Stack>
  );
}
