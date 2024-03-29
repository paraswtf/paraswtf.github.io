import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #021a27;
    --gray-navy: #0230476f;
    --navy: #021a27;
    --card-navy: #023047;
    --light-navy: #023047;
    --lightest-navy: #04374f;
    --navy-shadow: rgba(1, 24, 36, 0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #26d4ff;
    --green-tint: rgba(100, 255, 218, 0.1);
    --cursor-tint: rgba(100, 255, 218, 0.1);
    --blue: #57cbff;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }

  [data-theme='light'] {
    --dark-navy: #f1faee;
    --gray-navy: #eeeeee;
    --navy: #f1faee;
    --card-navy: #ebf7eb;
    --light-navy: #eeeeee;
    --lightest-navy: #b5c2bc;
    --navy-shadow: rgba(1, 24, 36, 0.7);
    --dark-slate: #495670;
    --slate: #011824;
    --light-slate: #021a27;
    --lightest-slate: #021a27;
    --white: #021a27;
    --green: #147793;
    --green-tint: rgba(100, 255, 218, 0.1);
    --cursor-tint: rgba(162, 214, 249, 0);
    --blue: #1da1f2;
  }
`;

//0466c8

export default variables;
