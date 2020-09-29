import { createGlobalStyle } from "styled-components";

import { COLORS, FONT_FAMILY, FONT_WEIGHT } from "../utilities/const";

const Reset = createGlobalStyle`
  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  input, button {
    outline: 0;
    border: none;
  }

  ol, ul {
    list-style: none;
  }

  img {
    height: auto;
    display: block;
    max-width: 100%;
  }

  body {
    color: ${COLORS.darkGray};
    background: ${COLORS.gray};
    font-family: ${FONT_FAMILY.base};
    font-weight: ${FONT_WEIGHT.regular};
  }
`;

export default Reset;
