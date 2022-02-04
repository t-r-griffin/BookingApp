import styled from 'styled-components';
import { colors, breakPoints } from '../variables';

export const StyledHeader = styled.header`
  grid-column: sidebar-start / full-end;
  grid-row: 1 / 2;
  font-size: 1.4rem;
  height: 100%;
  width: 100%;
  background-color: ${colors.purpleByzantium};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSVG = styled.svg.attrs(() => ({
  width: '20rem',
}))`
  @media only screen and (max-width: ${breakPoints.bpSmall}) {
    width: 15rem;
  }
`;

export const StyledText = styled.text.attrs(() => ({
  fill: 'white',
  fontSize: '2.5rem',
  fontFamily: 'Quicksand, sans-serif',
  x: '50%',
  y: '50%',
  dominantBaseline: 'middle',
  textAnchor: 'middle',
}))`
  tspan {
    fill: ${colors.primary};
  }

  @media only screen and (max-width: ${breakPoints.bpSmall}) {
    padding: 0 2rem;
  }
`;
