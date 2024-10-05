import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::after, *::before {
margin: 0;
padding: 0;
box-sizing: border-box;
}

html {
font-size: 62.5%;
}

body {
padding: 0 2rem;
font-family: "Josefin Sans", system-ui;
}
`;
export default GlobalStyles;
