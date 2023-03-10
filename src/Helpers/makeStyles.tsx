import { createMakeStyles } from 'tss-react';
import { makeStyles as makeStylesMUI } from 'tss-react/mui';

const stringToPx = (string: string) => {
  if (string === 'xs') {
    return 0;
  }
  if (string === 'sm') {
    return 875;
  }
  if (string === 'md') {
    return 1100;
  }
  if (string === 'lg') {
    return 1440;
  }
  if (string === 'xl') {
    return 1920;
  }
  return 0;
};

const useTheme = () => ({
  spacing: (number = 1) => `${number * 8}px`,
  breakpoints: {
    down: (size: string) => `@media (max-width: ${stringToPx(size)}px)`,
    up: (size: string) => `@media (min-width: ${stringToPx(size)}px)`,
    values: {
      xs: '0px',
      sm: '875px',
      md: '1100px',
      lg: '1440px',
      xl: '1920px',
    },
  },
});

export interface BreakPoints {
  down: (size: string) => string;
  up: (size: string) => string;
  values: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
export interface ThemeType {
  spacing: (value?: number) => any;
  breakpoints: BreakPoints;
  [x: string | number | symbol]: unknown;
}

const { makeStyles: makeStylesAsAFunction } = createMakeStyles({ useTheme });

// eslint-disable-next-line @typescript-eslint/ban-types
export const makeStyles = function (arg?: {} | ((theme: ThemeType) => any), extend = { name: '' }) {
  const { name } = extend;
  // eslint-disable-next-line prefer-rest-params
  return makeStylesAsAFunction({ name })(arguments[0] || arg) as any;
};

export const makeStylesWithTypes = makeStylesMUI;
