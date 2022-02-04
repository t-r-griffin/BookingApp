import styled, { createGlobalStyle } from 'styled-components';
import { colors, breakPoints } from './variables';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px
}

body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: ${colors.greyDark2};
    min-height: 100vh;
}
`;

export const GridLayout = styled.div`
   {
    display: grid;
    height: 100vh;
    grid-template-rows: 7rem 1fr;
    grid-template-columns: [sidebar-start] minmax(18rem, 18vw) [sidebar-end full-start] 1fr [full-end];

    @media only screen and (max-width: ${breakPoints.bpMedium}) {
      grid-template-rows: 7rem 5rem 1fr;
      grid-template-columns: 1fr;
    }
  }
`;
