import { type Theme } from '@mui/material';
import { createTheme as createMuiTheme } from '@mui/material/styles';

import { createComponents } from './create-components';
import { createPalette } from './create-palette';
import { createShadows } from './create-shadows';
import { createTypography } from './create-typography';

export function createTheme(currentTheme: Theme, mode: 'light' | 'dark' = 'light', fontInter = false) {
  const shadows = createShadows();
  const typography = createTypography(fontInter);
  const palette = createPalette(currentTheme);
  const components = createComponents(currentTheme);

  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1600,
        xxxl: 1900,
      } as any,
    },
    components,
    palette: {
      ...palette,
      mode,
    },
    shadows,
    typography,
    shape: {
      borderRadius: 8,
    },
  });
}

export default createTheme;
