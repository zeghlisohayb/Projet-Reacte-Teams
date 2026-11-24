/**
 * Search-param lists for every navigator.
 *
 * Expo Router already generates href/pathname types from the file system
 * (`experiments.typedRoutes`), so these types do NOT re-declare routes. They only
 * describe the params each screen reads/accepts, for:
 *
 *   const { id } = useLocalSearchParams<SharedStackParamList['listing/[id]']>();
 *   router.push({ pathname: '/filter', params: filters satisfies ListingFilters });
 *
 * Keys are route names relative to their navigator (what you pass to
 * `<Stack.Screen name>` / `<Tabs.Screen name>`). `undefined` = no params.
 * URL params are always strings, so numeric values are stringified.
 */

/** Filters for listing search. Shared by search, filter modal and map. */
export type ListingFilters = {
  /** Saved-search / preset id. */
  id?: string;
  /** Monthly rent lower bound, in MAD. */
  minPrice?: string;
  /** Monthly rent upper bound, in MAD. */
  maxPrice?: string;
  universityId?: string;
  cityId?: string;
  /** Amenity ids, e.g. `['wifi', 'furnished']` (or a single id). */
  amenities?: string | string[];
};

/** (auth) group stack. */
export type AuthScreens = {
  splash: undefined;
  onboarding: undefined;
  language: undefined;
  phone: undefined;
  otp: { phone?: string };
  role: undefined;
  'setup/student': undefined;
  'setup/landlord': undefined;
  terms: undefined;
};

/** (student)/(tabs) bottom tabs. */
export type StudentTabsParamList = {
  home: undefined;
  map: ListingFilters | undefined;
  saved: undefined;
  inbox: undefined;
  profile: undefined;
};

/** (student) stack wrapping the tabs. */
export type StudentStackParamList = {
  '(tabs)': undefined;
  search: ListingFilters | undefined;
};

/** (landlord)/(tabs) bottom tabs. */
export type LandlordTabsParamList = {
  dashboard: undefined;
  listings: undefined;
  inquiries: undefined;
  profile: undefined;
};

/** (landlord) stack wrapping the tabs. */
export type LandlordStackParamList = {
  '(tabs)': undefined;
  /** `id` is a listing id, or the literal `'new'` to create one. */
  'listing-editor/[id]': { id: 'new' | (string & {}) };
  verification: undefined;
  analytics: undefined;
};

/** (shared) stack — reachable by students, landlords and guests. */
export type SharedStackParamList = {
  'listing/[id]': { id: string };
  'chat/[conversationId]': { conversationId: string };
  'landlord/[userId]': { userId: string };
  'student/[userId]': { userId: string };
  'photo-gallery': { listingId?: string; index?: string };
  notifications: undefined;
  filter: ListingFilters | undefined;
  report: { listingId?: string; userId?: string };
};
