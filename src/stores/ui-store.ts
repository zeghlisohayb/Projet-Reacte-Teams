import { create } from 'zustand';

/** Transient, non-persisted UI state. Keep it small; prefer local state when possible. */
type UiState = {
  filterModalOpen: boolean;
  setFilterModalOpen: (open: boolean) => void;
};

export const useUiStore = create<UiState>()((set) => ({
  filterModalOpen: false,
  setFilterModalOpen: (filterModalOpen) => set({ filterModalOpen }),
}));
