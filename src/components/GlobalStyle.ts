import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    color: white;
    font-family: sans-serif;
    background-color: #3f3f3f;
    height: 100vh;
    max-height: 100vh;
    overflow-y: scroll;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export default GlobalStyle;
