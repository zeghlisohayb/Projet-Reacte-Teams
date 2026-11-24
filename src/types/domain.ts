/** Core domain types shared across stores and screens. */

export type UserRole = 'student' | 'landlord';

export type AuthStatus = 'loading' | 'onboarding' | 'authenticated';

export type User = {
  id: string;
  name: string;
};
