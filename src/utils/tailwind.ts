import resolveConfig from 'tailwindcss/resolveConfig';
import { KeyValuePair } from 'tailwindcss/types/config';
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export const getBreakpointValue = (value: string): number => {
  const screens = fullConfig.theme?.screens as KeyValuePair;

  if (screens) {
    return Number(screens[value].slice(0, screens[value].indexOf('px')));
  }

  return 0;
};

export const getCurrentBreakpoint = (): string => {
  let currentBreakpoint = 'xs';
  let biggestBreakpointValue = 0;
  for (const breakpoint of Object.keys(
    fullConfig.theme?.screens as KeyValuePair
  )) {
    const breakpointValue = getBreakpointValue(breakpoint);
    if (
      breakpointValue > biggestBreakpointValue &&
      window &&
      window.innerWidth >= breakpointValue
    ) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint;
    }
  }
  return currentBreakpoint;
};
