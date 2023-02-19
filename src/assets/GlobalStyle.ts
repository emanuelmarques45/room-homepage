import { createGlobalStyle } from 'styled-components'

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '600px',
  tablet: '768px',
  laptop: '1330px',
  laptopL: '1440px',
  desktop: '2560px'
}

const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tabletS: `(min-width: ${sizes.tabletS})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`
}

const GlobalStyle = createGlobalStyle`
  :root {
    /* COLORS */
    --clr-gray: hsl(0, 0%, 63%);
    --clr-dark-gray: hsl(0, 0%, 27%);
    --clr-black: hsl(0, 0%, 0%);
    --clr-white: hsl(0, 0%, 100%);

    /* FONTS */
    font-size: 62.5%;
    --fs-300: 1.2rem;
    --fs-400: 1.8rem;
    --fs-500: 2.6rem;
    --fs-600: 3.8rem;
    --fs-700: 4.5rem;
    --fs-800: 5rem;

    --ff-primary: 'League Spartan', sans-serif;

    --fw-regular: 500;
    --fw-semi-bold: 600;
    --fw-bold: 700;
    
    /* TRANSITIONS */
    --td-fast: 400ms;
    --td-regular: 800ms;
    --ttf: cubic-bezier(0.694, 0.048, 0.335, 1)
    }

  /* @media (${devices.laptopL}){
    :root {
      font-size: 80%;
    }
  }

  @media (${devices.desktop}){
    :root {
      font-size: 112.5%;
    }
  } */

  *  {
    margin: 0;
    padding: 0;
    font: inherit;
    list-style: none;
    text-decoration: none;
    border: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    text-rendering: optimizeSpeed;
    font-family: var(--ff-primary);
    font-size: var(--fs-400);
    font-weight: var(--fw-regular);
    background-color: var(--clr-white);
  }

  img,
  picture {
    display: block;
    max-width: 100%;
    user-select: none;
  }

  h1 {
    font-size: var(--fs-700);
    font-weight: var(--fw-semi-bold);
  }

  h2 {
    font-size: var(--fs-600);
    font-weight: var(--fw-semi-bold);
  }

  h3 {
    font-weight: var(--fw-semi-bold);
  }

  p {
    line-height: 1.3;
  }
`

export { GlobalStyle, devices }
