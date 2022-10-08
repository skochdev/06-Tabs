import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  borders: ['0', '2px solid', '4px solid', '100vw solid'],
  radii: {
    none: '0',
    normal: '0.25rem',
    round: '50%',
  },
  colors: {
    black: '#000',
    white: '#fff',
    text: '#2a2a2a',
    background: '#f5f3f3',
    primary: '#07c',
    secondary: '#05a',
    accent: '#fda031',
    muted: '#b2b2b2',
  },
  fontSizes: {
    xs: '1rem',
    s: '1.4rem',
    m: '1.6rem',
    l: '2.4rem',
    xl: '3.6rem',
  },
  fontWeights: [400, 500, 700, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  shadows: {
    boxShadow: {
      none: 'none',
      sm: 'box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;',
      md: 'box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
      lg: 'box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;',
    },
  },
};