import { useEffect } from 'react';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';

export function useDeviceWidth() {
  const { setDeviceWidth } = useDeviceWidthStore();

  useEffect(() => {
    const deviceWidthHandler = () => {
      const newDeviceWidth = window.screen.width;
      setDeviceWidth(newDeviceWidth);
    };
    window.addEventListener('resize', deviceWidthHandler);

    return () => {
      window.removeEventListener('resize', deviceWidthHandler);
    };
  }, []);
}
