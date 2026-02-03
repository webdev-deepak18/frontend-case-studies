/** @format */

import styled from "styled-components";
/* colors */
const primary100 = "#fce3d0";
const primary200 = "#f8c7a0";
const primary300 = "#f5aa71";
const primary400 = "#f18e41";
const primary500 = "#ee7212";
const primary600 = "#be5b0e";
const primary700 = "#8f440b";
const primary800 = "#5f2e07";
const primary900 = "#301704";

/* grey */
const grey50 = "#ebebeb";
const grey100 = "#d6d6d6";
const grey200 = "#858585";
const grey300 = "#5c5c5c";
const grey400 = "#333333";
const grey500 = "#292929";
const grey600 = "#1f1f1f";
const grey700 = "#141414";
const grey800 = "#0a0a0a";
const grey900 = "#0f172a";

/* rest of the colors */
const black = "#222";
const white = "#fff";

const transparentBgWhite = "rgba(255,255,255,.8)";
const transparentBgBlack = "rgba(34, 34, 34,.8)";

export const BaseTheme = {
  //base colors black and white
  clrWhite: white,
  clrBlack: black,

  // base background colors black and white
  bgClrWhite: white,
  bgClrBlack: black,

  // Base colors primary
  clrPrimary100: primary100,
  clrPrimary200: primary200,
  clrPrimary300: primary300,
  clrPrimary400: primary400,
  clrPrimary500: primary500,
  clrPrimary600: primary600,
  clrPrimary700: primary700,
  clrPrimary800: primary800,
  clrPrimary900: primary900,

  // Base colors grey
  clrGrey50: grey50,
  clrGrey100: grey100,
  clrGrey200: grey200,
  clrGrey300: grey300,
  clrGrey400: grey400,
  clrGrey500: grey500,
  clrGrey600: grey600,
  clrGrey700: grey700,
  clrGrey800: grey800,
  clrGrey900: grey900,

  // Base background colors primary
  bgClrPrimary100: primary100,
  bgClrPrimary200: primary200,
  bgClrPrimary300: primary300,
  bgClrPrimary400: primary400,
  bgClrPrimary500: primary500,
  bgClrPrimary600: primary600,
  bgClrPrimary700: primary700,
  bgClrPrimary800: primary800,
  bgClrPrimary900: primary900,

  // Base background colors grey
  bgClrGrey50: grey50,
  bgClrGrey100: grey100,
  bgClrGrey200: grey200,
  bgClrGrey300: grey300,
  bgClrGrey400: grey400,
  bgClrGrey500: grey500,
  bgClrGrey600: grey600,
  bgClrGrey700: grey700,
  bgClrGrey800: grey800,
  bgClrGrey900: grey900,
  bgClrTransparent: transparentBgWhite,
};

export const DarkTheme = {
  //base colors black and white
  clrWhite: black,
  clrBlack: white,

  // base background colors black and white
  bgClrWhite: black,
  bgClrBlack: white,

  // DarkTheme colors primary

  clrPrimary100: primary900,
  clrPrimary200: primary800,
  clrPrimary300: primary700,
  clrPrimary400: primary600,
  clrPrimary500: primary100,
  clrPrimary600: primary100,
  clrPrimary700: primary100,
  clrPrimary800: primary100,
  clrPrimary900: primary100,

  // Dark Theme colors grey
  clrGrey50: grey900,
  clrGrey100: grey900,
  clrGrey200: grey800,
  clrGrey300: grey700,
  clrGrey400: grey600,
  clrGrey500: white,
  clrGrey600: grey100,
  clrGrey700: grey100,
  clrGrey800: grey100,
  clrGrey900: grey100,

  // Dark Theme background colors primary
  bgClrPrimary100: primary900,
  bgClrPrimary200: primary800,
  bgClrPrimary300: primary700,
  bgClrPrimary400: primary600,
  bgClrPrimary500: primary100,
  bgClrPrimary600: primary100,
  bgClrPrimary700: primary100,
  bgClrPrimary800: primary100,
  bgClrPrimary900: primary100,

  // DarkTheme background colors grey
  bgClrGrey50: grey900,
  bgClrGrey100: black,
  bgClrGrey200: grey800,
  bgClrGrey300: grey700,
  bgClrGrey400: grey600,
  bgClrGrey500: grey100,
  bgClrGrey600: grey100,
  bgClrGrey700: grey100,
  bgClrGrey800: grey100,
  bgClrGrey900: grey100,
  bgClrTransparent: transparentBgBlack,
};

export const Container = styled.div`
  color: ${(props) => props.theme.clrGrey500};
  background: ${(props) => props.theme.bgClrWhite};

  a,
  button {
    color: ${(props) => props.theme.clrGrey500};
  }

  /* menu */
  .nav-center .sidebar,
  .submenu .content,
  .navbar-container {
    color: ${(props) => props.theme.clrGrey500};
    background: ${(props) => props.theme.bgClrWhite};
  }

  /* footer */
  footer {
    color: ${(props) => props.theme.clrGrey500};
    background: ${(props) => props.theme.bgClrGrey100};
  }

  /* testimonials */
  .testimonials-container .section-title {
    background: ${(props) => props.theme.bgClrTransparent};
  }
  .testimonials-container .section-title h2 {
    color: ${(props) => props.theme.clrGrey500};
  }

  /* tools slider */

`;
