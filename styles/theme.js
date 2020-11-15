const theme = {
  colorPrimary: "#e85d04",
  colorPrimaryDark: "#370617",
  colorPrimaryLite: "#ffba08",
  colorSecondary: "#3d405b",
  colorTertiary: "#eae2b7",
  colorWhite: "#fff",
  colorBlack: "#000",
  colorGray: "#6c757d",
  colorBg: "#f8edeb",
  fontPrimary: "'SF UI Text', sans-serif",
  fontSecondary: "'SF UI Display', sans-serif",
  boxShadowNormal: "0 4px 8px 4px rgba(0, 0, 0, 0.1)",
  boxShadowHover: "0 8px 16px 4px rgba(0, 0, 0, 0.1)",
  gridTemplateColumns:
    "[full-start] minmax(5rem, 1fr) [content-start] 170rem [content-end] minmax(5rem, 1fr) [full-end] ",
  navBarHeight: "10rem",

  // responsive design breakpoints
  responsiveHighest: "@media only screen and (max-width: 75em)", // 1200px
  responsiveHigher: "@media only screen and (max-width:  68.75em)", // 1100px
  responsiveHigh: "@media only screen and (max-width: 62.5em)", // 1000px
  responsiveMediumHigh: "@media only screen and (max-width: 56.25em)", // 900px
  responsiveMedium: "@media only screen and (max-width: 50em)", // 800px
  responsiveMediumLow: "@media only screen and (max-width: 43.75em)", // 700px
  responsiveLow: "@media only screen and (max-width: 40.625em)", // 650px
  responsiveLower: "@media only screen and (max-width: 37.5em)", // 600px
  responsiveLowest: "@media only screen and (max-width: 31.25em)", // 500px
  responsivePhone: "@media only screen and (max-width: 25em)", // 400px;
};

export default theme;
