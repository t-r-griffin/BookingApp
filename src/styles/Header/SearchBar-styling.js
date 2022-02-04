import styled from 'styled-components';
import { colors } from '../variables';
import { MaterialIcon } from '../../utils/materialIcon';

export const StyledForm = styled.form`
   {
    flex: 0 0 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledButton = styled.button`
   {
    border: none;
    background-color: ${colors.greyLight2};

    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }

    &:active {
      transform: translateY(2px);
    }
  }
`;

export const StyledSVG = styled(MaterialIcon)`
   {
    color: ${colors.greyDark3};
    background-color: ${colors.greyLight2};
  }
`;

export const StyledInput = styled.input`
   {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: ${colors.greyLight2};
    border: none;
    padding: 0.7rem 2rem;
    border-radius: 10rem;
    width: 90%;
    transition: all 0.2s;
    margin-right: -3.25rem;

    &:focus {
      outline: none;
      width: 100%;
      background-color: ${colors.greyLight3};
    }

    &:focus + ${StyledButton} {
      background-color: ${colors.greyLight3};
    }

    &:focus + ${StyledButton} > ${StyledSVG} {
      background-color: ${colors.greyLight3};
    }

    &::placeholder {
      font-weight: 400;
      color: ${colors.greyLight4};
    }
  }
`;
