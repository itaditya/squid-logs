import { createTheme } from '@vanilla-extract/css';

const colors = {
  gray: {
    50: '210deg 40% 98%',
    100: '210deg 40% 96.1%',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
  green: {
    400: '188deg 27% 58%',
    500: '179deg 38% 46%',
  },
  pink: {
    300: '339deg 77% 90%',
    400: '351deg 98% 78%',
    500: '336deg 82% 55%',
    600: '330deg 84% 50%',
  },
  yellow: {
    500: '40deg 72% 64%',
    600: '36deg 54% 69%',
  },
  black: {
    700: '223deg 22% 13%',
  },
};

export const [themeClass, vars] = createTheme({
  color: {
    raw: colors,
    brand: {
      surface: {
        light: {
          500: colors.gray[100],
          600: colors.pink[300],
        },
        dark: {
          500: colors.black[700],
        },
      },
      highlight: {
        400: '235deg 50% 50%',
        500: '235deg 100% 50%',
        600: '235deg 70% 20%',
      },
    },
  },
  font: {
    body: 'arial',
  },
});
