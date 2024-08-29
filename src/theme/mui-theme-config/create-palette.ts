import { type Theme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { type PaletteOptions } from '@mui/material/styles/createPalette';

import { useAppStore } from '@/config/app-store';
import { accent, error, success, yellow } from './colors';

export function createPalette(currentTheme: Theme) {
  const palette: PaletteOptions & Record<string, any> = {
    // divider: '#F2F4F7',

    // ...currentTheme.palette,

    primary: accent,
    secondary: grey,
    success,
    error,
    text: {
      primary: useAppStore.getState().theme === 'light' ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255,255,255,0.70)',
      secondary: useAppStore.getState().theme === 'light' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.7)',
      disabled: useAppStore.getState().theme === 'light' ? 'rgba(0, 0, 0, 0.38)' : 'rgba(255, 255, 255, 0.5)',
    },
  };

  return palette;
}
