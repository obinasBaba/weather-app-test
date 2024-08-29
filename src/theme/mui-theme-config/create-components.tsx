/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { filledInputClasses } from '@mui/material/FilledInput';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { paperClasses } from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles';
import { type Components } from '@mui/material/styles/components';
import { type PaletteOptions } from '@mui/material/styles/createPalette';
import { type Theme } from '@mui/material/styles/createTheme';
import { tableCellClasses } from '@mui/material/TableCell';

import { useAppStore } from '@/config/app-store';

const UnChecked = (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" fontSize="medium">
    <rect height="16" rx="5" stroke="currentColor" strokeWidth="2" width="16" x="4" y="4.5"></rect>
  </svg>
);

const Checked = (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" fontSize="medium">
    <path
      clipRule="evenodd"
      d="M9 3.5C5.68629 3.5 3 6.18629 3 9.5V15.5C3 18.8137 5.68629 21.5 9 21.5H15C18.3137 21.5 21 18.8137 21 15.5V9.5C21 6.18629 18.3137 3.5 15 3.5H9ZM16.7179 10.1961C17.1024 9.79966 17.0926 9.16657 16.6961 8.7821C16.2997 8.39763 15.6666 8.40737 15.2821 8.80385L10.6667 13.5635L8.7179 11.5539C8.33343 11.1574 7.70034 11.1476 7.30385 11.5321C6.90737 11.9166 6.89763 12.5497 7.2821 12.9461L9.94877 15.6961C10.1371 15.8904 10.3961 16 10.6667 16C10.9372 16 11.1962 15.8904 11.3846 15.6961L16.7179 10.1961Z"
      fill="currentColor"
      fillRule="evenodd"
    ></path>
  </svg>
);

// Used only to create transitions
const muiTheme = createTheme();

export function createComponents(currentTheme: Theme) {
  const { palette } = currentTheme;

  const clrs =
    useAppStore.getState().theme === 'light'
      ? {}
      : {
          borderColor: 'var(--gray-500)',
          color: 'var(--gray-800)',
        };

  const components: Components<Omit<Theme, 'components'>> = {
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 0,
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        icon: UnChecked,
        checkedIcon: Checked,
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '2.5rem',
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '.34rem',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          ...clrs,

          // borderRadius: '50000px',
          textTransform: 'none',
        },
        sizeSmall: {
          padding: '6px 16px',
        },
        sizeMedium: {
          padding: '8px 20px',
        },
        sizeLarge: {
          padding: '11px 24px',
        },
        textSizeSmall: {
          padding: '7px 12px',
        },
        textSizeMedium: {
          padding: '9px 16px',
        },
        textSizeLarge: {
          padding: '12px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          [`&.${paperClasses.elevation1}`]: {
            boxShadow: '0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '32px 24px',
          '&:last-child': {
            paddingBottom: '32px',
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6',
        },
        subheaderTypographyProps: {
          variant: 'body2',
        },
      },
      styleOverrides: {
        root: {
          padding: '32px 24px 16px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
        },
        '#__next': {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        },
        '#nprogress': {
          pointerEvents: 'none',
        },
        '#nprogress .bar': {
          backgroundColor: palette.primary?.main,
          height: 3,
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 2000,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            opacity: 0.8,
          },
        },

        root: {
          '& .MuiChip-root': {
            borderRadius: '5000px',
          },
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          border: 'thin solid var(--gray-300)', // give it a box shadow
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.15)',
          zIndex: 9999,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: palette.action.hover,
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: useAppStore.getState().theme === 'light' ? 'var(--gray-400)' : 'var(--gray-300)',
            },
          },

          // when it is not-disabled apply background color of red;
          [`&.${outlinedInputClasses.disabled}`]: {
            backgroundColor: 'transparent',

            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: useAppStore.getState().theme === 'light' ? 'var(--gray-300)' : 'var(--gray-300)',
            },
          },

          [`&.${outlinedInputClasses.focused}`]: {
            backgroundColor: 'transparent',
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: palette.primary.main,
              borderWidth: '3.5px',

              // fix this
              // boxShadow: `${palette.primary.main} 0 0 0 2px`,
            },
          },

          [`&.${filledInputClasses.error}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: palette.error.main,
              borderWidth: '3px',
            },
          },
        },

        notchedOutline: {
          borderColor: 'var(--gray-300)',
          transition: muiTheme.transitions.create(['border-color', 'box-shadow']),
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          // fontSize: 16,
          fontWeight: 500,
          color: 'var(--gray-900)',

          [`&.${inputLabelClasses.filled}`]: {
            transform: 'translate(12px, 18px) scale(1)',
          },
          [`&.${inputLabelClasses.shrink}`]: {
            [`&.${inputLabelClasses.standard}`]: {
              transform: 'translate(0, -1.5px) scale(0.85)',
            },
            [`&.${inputLabelClasses.filled}`]: {
              transform: 'translate(12px, 6px) scale(0.85)',
            },
            [`&.${inputLabelClasses.outlined}`]: {
              transform: 'translate(14px, -9px) scale(0.85)',
              letterSpacing: '.3px',
            },
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.71,
          minWidth: 'auto',
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: 'none',
          '& + &': {
            marginLeft: 24,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: palette.divider,
          padding: '15px 16px',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
          [`& .${tableCellClasses.root}`]: {
            borderBottom: 'none',
            backgroundColor: palette.grey[50],
            color: palette.grey[700],
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
          },
          [`& .${tableCellClasses.paddingCheckbox}`]: {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },
  };

  return components;
}
