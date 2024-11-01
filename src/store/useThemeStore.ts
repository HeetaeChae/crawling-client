import { create } from 'zustand';

type Theme = 'dark' | 'light';

interface ThemeState {
  theme: Theme;
  setTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: (window.localStorage.getItem('theme') as Theme) || 'light',
  setTheme: () => {
    const newTheme =
      window.localStorage.getItem('theme') === 'light' ? 'dark' : 'light';
    set({ theme: newTheme });
    window.localStorage.setItem('theme', newTheme);
  },
}));
