import { createTheme } from '@vanilla-extract/css';

const colors = {
  gray: {
    50: '210deg 40% 98%',
    100: '210deg 40% 96.1%',
    200: '40deg 33% 27%',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
  green: {
    100: '203deg 26% 82%',
    400: '180deg 78% 30%',
    500: '195deg 80% 33%',
  },
  pink: {
    300: '339deg 77% 90%',
    400: '351deg 98% 78%',
    500: '336deg 82% 55%',
    600: '330deg 84% 50%',
  },
  yellow: {
    200: '40deg 69% 84%',
    400: '40deg 92% 62%',
    500: '36deg 54% 69%',
    600: '24deg 52% 44%',
    700: '27deg 39% 26%',
  },
  black: {
    700: '223deg 22% 13%',
    900: '0deg 0% 0%',
  },
};

export const [themeClass, vars] = createTheme({
  color: {
    raw: colors,
    brand: {
      white: '0deg 0% 100%',
      surface: {
        light: {
          500: colors.gray[100],
          600: colors.yellow[400],
          700: colors.yellow[500],
        },
        dark: {
          500: colors.black[700],
        },
      },
      highlight: {
        400: colors.pink[400],
        500: colors.pink[500],
        600: colors.pink[600],
      },
    },
  },
  font: {
    body: 'arial',
  },
});
