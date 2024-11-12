import {
  getLocalStorageItem,
  setLocalStorageItem,
} from 'utils/handleLocalStorage';
import { create } from 'zustand';

type Theme = 'dark' | 'light';

interface ThemeState {
  theme: Theme;
  setTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: (getLocalStorageItem('theme') as Theme) || 'light',
  setTheme: () => {
    const newTheme =
      getLocalStorageItem('theme') === 'light' ? 'dark' : 'light';
    // store 업데이트
    set({ theme: newTheme });
    // localStorage 업데이트
    setLocalStorageItem('theme', newTheme);
  },
}));
