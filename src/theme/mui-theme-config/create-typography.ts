import { type TypographyOptions } from '@mui/material/styles/createTypography';

export const createTypography = () => {
  const HeadingFont = 'var(--sofia-pro)';
  const fontFamily = 'var(--sofia-pro)';

  const typo: TypographyOptions = {
    fontFamily,
    body1: {
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 300,
      lineHeight: 1.57,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase',
    },
    h1: {
      fontFamily: HeadingFont,
      fontWeight: 900,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: HeadingFont,

      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: HeadingFont,

      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: HeadingFont,

      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: HeadingFont,

      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: HeadingFont,

      fontWeight: 700,
      fontSize: '1.125rem',
      lineHeight: 1.2,
    },
  };

  return typo;
};
