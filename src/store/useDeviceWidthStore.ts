/*
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
*/

import { create } from 'zustand';

interface DeviceWidthState {
  deviceWidth: number;
  setDeviceWidth: (newDevideWidth: number) => void;
}

export const useDeviceWidthStore = create<DeviceWidthState>((set) => ({
  deviceWidth: window.screen.width,
  setDeviceWidth: (newDeviceWidth: number) => {
    set({ deviceWidth: newDeviceWidth });
  },
}));
