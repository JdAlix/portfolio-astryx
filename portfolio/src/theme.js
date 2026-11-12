import {defineTheme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@astryxdesign/theme-neutral';

/**
 * Brand layer on top of the neutral Astryx theme.
 * Only tokens are overridden here so every component keeps the system defaults.
 */
export const portfolioTheme = defineTheme({
  name: 'portfolio',
  extends: neutralTheme,
  typography: {
    scale: {base: 16, ratio: 1.25},
    body: {
      family: 'Figtree',
      fallbacks:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    heading: {
      family: 'Figtree',
      fallbacks:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      weight: 'bold',
    },
    code: {
      family: 'JetBrains Mono',
      fallbacks: '"SF Mono", Menlo, monospace',
    },
  },
  radius: {base: 6, multiplier: 1},
  tokens: {
    '--color-accent': ['#4f46e5', '#a5b4fc'],
    '--color-accent-muted': ['#e0e7ff', '#312e81'],
    '--color-text-accent': ['#4338ca', '#c7d2fe'],
    '--color-icon-accent': ['#4338ca', '#c7d2fe'],
    '--color-background-card': ['#ffffff', '#212121'],
    '--color-background-muted': ['#f4f4f5', '#232323'],
  },
});
