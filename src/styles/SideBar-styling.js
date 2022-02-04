import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, breakPoints } from './variables';
import { MaterialIcon } from '../utils/materialIcon';

export const StyledSideBar = styled.nav`
   {
    grid-column: sidebar-start / sidebar-end;
    grid-row: 2 / -1;
    background-color: ${colors.greyDark1};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: ${breakPoints.bpMedium}) {
      grid-row: 2 / 3;
      width: 100%;
    }
  }
`;

export const StyledSideNav = styled.ul`
   {
    font-size: 1.4rem;
    list-style: none;
    margin-top: 3.5rem;
  }

  @media only screen and (max-width: ${breakPoints.bpMedium}) {
    margin-top: 0rem;
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media only screen and (max-width: ${breakPoints.bpSmall}) {
    justify-content: space-between;
  }
`;

export const StyledNavItem = styled.li`
   {
    position: relative;
    background-color: ${props => (props.active ? colors.primary : null)};
    margin-bottom: 0.5rem;

    @media only screen and (max-width: ${breakPoints.bpMedium}) {
      margin-right: 0.5rem;
      height: 5rem;
    }

    @media only screen and (max-width: ${breakPoints.bpSmall}) {
      margin-right: 0rem;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: ${colors.primary};
    transform: scaleY(0);
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
  }

  &:hover::before,
  &:active::before {
    transform: scaleY(1);
    width: 100%;
  }

  &:active::before {
    background-color: ${colors.primaryLight};
  }
`;

export const StyledNavLink = styled(Link)`
  &:link,
  &:visited {
    color: ${colors.greyLight1};
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    padding: 1.5rem 3rem;
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;

    @media only screen and (max-width: ${breakPoints.bpMedium}) {
      align-items: flex-start;
      padding: 0.5rem 1.5rem;
    }
  }
`;

export const StyledIcon = styled(MaterialIcon)`
   {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 2rem;
    fill: white;
  }
`;
