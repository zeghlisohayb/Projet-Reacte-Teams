import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage, type StateStorage } from 'zustand/middleware';

/** Used during web server rendering (`web.output: "server"`), where `window` does not exist. */
const noopStorage: StateStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

/**
 * JSON storage for zustand `persist`: AsyncStorage on device and in the browser,
 * a no-op on the server (AsyncStorage's web build touches `window` and would crash SSR).
 */
export function createPersistStorage<S>() {
  return createJSONStorage<S>(() => (typeof window === 'undefined' ? noopStorage : AsyncStorage));
}
