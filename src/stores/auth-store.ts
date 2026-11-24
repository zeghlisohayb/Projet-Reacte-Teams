import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { createPersistStorage } from '@/lib/storage';
import type { AuthStatus, User, UserRole } from '@/types/domain';

type AuthState = {
  status: AuthStatus;
  role: UserRole | null;
  user: User | null;
  /** True once persisted state has been read from storage. Not persisted. */
  _hydrated: boolean;
  signIn: (role: UserRole, user: User) => void;
  signOut: () => void;
  setHydrated: () => void;
};

/**
 * Dev starts in 'onboarding' so the auth flow is walkable straight away.
 * Prod starts in 'loading' until storage is read; `setHydrated` resolves it.
 */
const initialStatus: AuthStatus = __DEV__ ? 'onboarding' : 'loading';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      status: initialStatus,
      role: null,
      user: null,
      _hydrated: false,
      signIn: (role, user) => set({ status: 'authenticated', role, user }),
      signOut: () => set({ status: 'onboarding', role: null, user: null }),
      setHydrated: () =>
        set((state) => ({
          _hydrated: true,
          // Nothing persisted (first launch) → leave 'loading' for the auth flow.
          status: state.status === 'loading' ? 'onboarding' : state.status,
        })),
    }),
    {
      name: 'inobilier.auth',
      storage: createPersistStorage(),
      partialize: ({ status, role, user }) => ({ status, role, user }),
      // Runs even when reading storage fails, so the app never hangs on the loader.
      onRehydrateStorage: () => (state) => {
        (state ?? useAuthStore.getState()).setHydrated();
      },
    },
  ),
);

/** Authenticated with a known role. Used by the root layout's route guards. */
export function selectIsAuthenticated(state: Pick<AuthState, 'status' | 'role'>): boolean {
  return state.status === 'authenticated' && state.role !== null;
}
