import { create } from 'zustand';

interface DeviceWidthState {
  deviceWidth: number;
  isMobile: boolean;
  setDeviceWidth: (newDevideWidth: number) => void;
}

export const useDeviceWidthStore = create<DeviceWidthState>((set) => ({
  deviceWidth: window.screen.width,
  isMobile: window.screen.width <= 600,
  setDeviceWidth: (newDeviceWidth: number) => {
    set({ deviceWidth: newDeviceWidth, isMobile: newDeviceWidth <= 600 });
  },
}));
