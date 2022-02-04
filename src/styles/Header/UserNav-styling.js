import styled from 'styled-components';
import { colors, breakPoints } from '../variables';
import { MaterialIcon } from '../../utils/materialIcon';

export const StyledIconBox = styled.div`
   {
    position: relative;
  }
`;

export const StyledIcon = styled(MaterialIcon)`
   {
    height: 2.25rem;
    width: 2.25rem;
    fill: ${colors.greyDark2};
  }
`;

export const StyledNotification = styled.span`
   {
    font-size: 0.8rem;
    height: 1.75rem;
    width: 1.75rem;
    border-radius: 50%;
    background-color: ${colors.primary};
    color: #fff;
    position: absolute;
    top: 1.5rem;
    right: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledNav = styled.nav`
 {
    align-self: stretch;
    color: white;
    display: flex;
    align-items: center;
    padding-right: 2rem;
   
    @media only screen and (max-width: ${breakPoints.bpSmall}) {
      padding-right: 0rem;
     }

    & > * {
        padding: 0 2rem;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
    }

    & > *:hover {
        background-color: ${colors.primary};
    }`;

export const StyledUserPhoto = styled(MaterialIcon)`
   {
    color: ${colors.purpleByzantium};
    background-color: white;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;
