import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    color: white;
    font-family: sans-serif;
    background-color: #3f3f3f;
    height: 100vh;
    max-height: 100vh;
    overflow-y: scroll;
  }
`;

export default GlobalStyle;
