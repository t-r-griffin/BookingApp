import styled, { css } from 'styled-components';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { colors, breakPoints } from '../variables';
import { MaterialIcon, CustomInput } from '../../utils/materialIcon';

export const HotelFilter = styled.main`
   {
    background-color: rgb(249, 249, 250);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5%;

    @media only screen and (max-width: ${breakPoints.bpMedium}) {
      grid-row: 3 / -1;
      min-width: 100vw;
    }

    @media only screen and (max-width: ${breakPoints.bpSmall}) {
      grid-row: 3 / -1;
      justify-content: start;
      padding-left: 2rem;
      min-width: 100vw;
    }
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  && {
    width: 20rem;
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledFormControl = styled(FormControl)`
  width: 10rem;

  @media only screen and (max-width: ${breakPoints.bpSmall}) {
    width: 7rem;
  }
`;

export const StyledSelect = styled(Select)`
  height: 2.84rem;
  font-size: 1.2rem;

  & > svg {
    color: ${colors.primaryLight};
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: grey;
    border-radius: 5px;
  }

  &.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline  {
    border-color: ${colors.primaryLight};
  }

  &.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline  {
    border-color: ${colors.primaryLight};
  }  
  }
`;

export const SubGrid = styled.div`
  grid-row: 1 / -1;
  grid-column: 2 / 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: ${breakPoints.bpSmall}) {
    grid-row: 1 / 1;
  }
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 500;
  top: 4rem;
  left: -20rem;
  width: 32rem;
  height: 23.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgb(41 51 57 / 75%);
  filter: blur(0);
  cursor: default;

  &::before {
   position: relative;
   top: -4.4rem;
   left: 7rem;
   font-size: 5rem;
   font-family: 'Material Icons';
   content: font-family: "Material Icons";
   content: "arrow_drop_up";
   color: white;
  }
`;

export const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 40% 50%;
  grid-template-rows: repeat(3, 20%);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  align-items: center;
  margin-top: -5.5rem;
`;

export const PositionModal = styled.div`
  position: relative;
`;

export const customDateRange = styled(CustomInput)`
  border: none;
  outline: none;
  background-color: #fff;
  font-size: 0.95rem;
  color: black;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

export const HotelFilter2 = styled.main`
   {
    background-color: rgb(249, 249, 250);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2%;

    @media only screen and (max-width: ${breakPoints.bpMedium}) {
      grid-row: 3 / -1;
      width: 100%;
    }

    @media only screen and (max-width: ${breakPoints.bpSmall}) {
      grid-row: 3 / -1;
      justify-content: start;
      padding-left: 2rem;
      gap: 5%;
      width: 100%;
    }
  }
`;

export const Item = styled.div`
  border-left: ${props =>
    props.borderLeft ? `1px solid ${colors.greyLight4}` : 'none'};
  border-right: ${props =>
    props.borderRight ? `1px solid ${colors.greyLight4}` : 'none'};
  padding-left: ${props => props.padLeft}rem;
  padding-right: ${props => props.padRight}rem;
  padding-bottom: ${props => props.padBottom}rem;
  padding-top: ${props => props.padTop}rem;
  margin-left: ${props => props.leftSpace}rem;
  margin-right: ${props => props.rightSpace}rem;
  ${props =>
    props.w14 &&
    css`
      width: 14%;
    `}

  @media only screen and (max-width: ${breakPoints.bpLarge}) {
    ${props =>
      props.w14 &&
      css`
        margin-right: 2rem;
      `}
  }

  @media only screen and (max-width: ${breakPoints.bpSmall}) {
    width: 21%;
    ${props =>
      props.w14 &&
      css`
        margin-right: -1.5rem;
      `}
    ${props =>
      props.specificWidth &&
      css`
        padding: 0 0.2rem;
      `}

    margin-left: ${props => props.lm}rem;
  }
`;

export const CheckIn = styled.div`
   {
    font-family: inherit;
    height: 4rem;
    font-size: 1rem;
    color: inherit;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const Icon = styled(MaterialIcon)`
	 {
		height: auto;
		padding-left: 1rem;
		color: ${colors.primary};
		pointer-events: none;

		${props =>
      props.clickableIcon &&
      css`
        padding-left: 0rem;
      `}

		${props =>
      props.date &&
      css`
        background-color: ${colors.greyLight2};
        padding-left: 0rem;
        width: auto;
        height: auto;
      `}
`;

export const Grid = styled.span`
   {
    display: grid;
    height: 100%;
    border-radius: 10px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 3rem 6.5rem max-content;
    grid-column-gap: 1.5rem;
    align-items: center;
    justify-content: start;
    background-color: white;

    @media only screen and (max-width: ${breakPoints.bpSmall}) {
      grid-template-rows: 1fr 1fr 1fr;
      grif-template-columns: 3rem 6.5rem;
    }
  }
`;

export const DateIcon = styled.div`
   {
    grid-row: 1 / -1;
    grid-column: 1 / 1;
    /*&::after {
			content: '';
			background-color: black;
			bottom: 5px;
			width: 2px;
			height: 10rem;
			right: -10px;
			z-index: 1000;
		}*/
    @media only screen and (max-width: ${breakPoints.bpSmall}) {
      grid-row: 1 / 1;
    }
  }
`;

export const ButtonHead = styled.span`
   {
    grid-row: 1 / 1;
    grid-column: 2 / 2;
  }
`;

export const ButtonLabel = styled.label`
   {
    color: black;
    font-weight: bold;
    grid-row: 2 / 2;
    grid-column: 2 / 2;
    margin-top: -0.2rem;
    cursor: pointer;
  }
`;

export const DateNavigator = styled.div`
   {
    align-self: stretch;
    grid-row: 1 / -1;
    grid-column: 3 / 3;
    display: flex;
    align-items: center;

    @media only screen and (max-width: ${breakPoints.bpSmall}) {
      grid-row: 2 / 2;
      grid-column: 1 / 1;
      position: relative;
      left: 0.7rem;
    }
  }
`;

export const Button = styled.button`
   {
    font-size: 1.7rem;
    height: 4rem;
    font-weight: 300;
    border-radius: 100px;
    padding: 0.7rem 4rem;
    border: none;
    background-image: linear-gradient(
      to right,
      ${colors.primaryLight},
      ${colors.primaryDark}
    );
    color: #fff;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      background-image: linear-gradient(
        to left,
        ${colors.primaryLight},
        ${colors.primaryDark}
      );
    }

    &:focus {
      outline: none;
      animation: pulsate 1s infinite;
    }

    @media only screen and (max-width: ${breakPoints.bpMedium}) {
      padding: 0.7rem 2.5rem;
      font-size: 1.4rem;
      text-align: center;

    @media only screen and (max-width: ${breakPoints.bpSmall}) {
      padding: 0.7rem 3rem;
      font-size: 1.2rem;
      text-align: center;
    }
  }
`;

export const ItemGrid = styled.div`
   {
    display: grid;
    grid-template-columns: max-content 50%;
    grid-template-rows: min-content min-content;
    font-size: 1.3rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Title = styled.div`
   {
    grid-column: 1 / 1;
    color: black;
    font-weight: bold;
  }
`;

export const Price = styled.div`
   {
    grid-column: 2 / 2;
    justify-self: end;
  }
`;

export const SliderContainer = styled.div`
   {
    grid-column: 1 / span 2;
    grid-row: 2 / 2;
  }
`;

export const PropertyType = styled.div`
   {
    grid-column: 1 / span 2;
    grid-row: 2 / 2;
    display: flex;
    justify-content: space-between;
    border: 1px solid grey;
    border-radius: 5px;
  }
`;

export const PropertyItem = styled.span`
   {
    border-right: 1px solid ${colors.greyLight4};
    padding: 0.3rem 2rem;
    color: ${props => (props.selected === true ? 'white' : colors.greyDark2)};
    background-color: ${props =>
      props.selected === true ? colors.primaryLight : 'none'};

    &:last-of-type {
      border: none;
    }

    &:hover {
      color: white;
      background-color: ${colors.primaryLight};
      cursor: pointer;
    }

    @media only screen and (max-width: ${breakPoints.bpSmall}) {
      padding: 0.3rem 1rem;
    }
  }
`;

export const Rating = styled.span`
   {
    grid-column: 1/2;
    grid-row: 2/2;
  }
`;

export const DropDown = styled.span`
   {
    grid-column: 2/2;
    grid-row: 2/2;
    display: flex;
    justify-content: flex-start;
  }
`;

export const DateButton = styled.button`
   {
    display: flex;
    background-color: white;
    justify-content: center;
    max-width: 1.5rem;
    border: none;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }

    &:disabled > ${Icon} {
      color: #999;
    }

    @media only screen and (max-width: ${breakPoints.bpSmall}) {
      margin-top: -1rem;
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;

export const GuestButtons = styled.button`
  border-radius: 3.6rem;
  height: 3.6rem;
  width: 3.6rem;
  border: 1px solid #697379;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  &:hover:enabled {
    cursor: pointer;
    background-color: #d0d0d0;
  }

  &:disabled {
    cursor: not-allowed;
    border: 1px solid #cdd0d2;
  }

  &:disabled > ${Icon} {
    color: #cdd0d2;
  }
`;

export const Adults = styled.div`
  font-size: 1.4rem;
  color: black;
  margin-left: 1rem;
  font-weight: 700;
  justify-self: start;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
`;

export const Children = styled.div`
  font-size: 1.4rem;
  color: black;
  margin-left: 1rem;
  font-weight: 700;
  justify-self: start;
  grid-row: 2 / 2;
  grid-column: 1 / 1;
`;

export const Rooms = styled.div`
  font-size: 1.4rem;
  color: black;
  margin-left: 1rem;
  font-weight: 700;
  justify-self: start;
  grid-row: 3 / 3;
  grid-column: 1 / 1;
`;

export const AdultsQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
  grid-row: 1/1;
  grid-column: 2/2;
`;
export const ChildrenQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
  grid-row: 2/2;
  grid-column: 2/2;
`;

export const RoomsQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
  grid-row: 3/3;
  grid-column: 2/2;
`;

export const GuestsInput = styled.input`
  width: 4rem;
  border-radius: 0.4rem;
  border: 1px solid #697379;
  font-size: 1.6rem;
  text-align: center;
`;

export const ModalButtons = styled.div`
  border-top: 1px solid #ccc;
  margin: auto;
  margin-top: 0.5rem;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ResetButton = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  color: black;
  border: 1px solid #697379;
  padding: 1.2rem;
  line-height: 0.5rem;
  border-radius: 10px;
  background-color: white;

  &:hover:enabled {
    cursor: pointer;
    background-color: #606060;
    color: white;
  }

  &:disabled {
    cursor: not-allowed;
    color: #cdd0d2;
    border: 1px solid #cdd0d2;
  }
`;

export const ApplyButton = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  border: 1px solid #697379;
  padding: 1.2rem;
  line-height: 0.5rem;
  border-radius: 10px;
  background-color: white;
  background-color: #007fad;
  border: 1px solid #007fad;

  &:hover {
    cursor: pointer;
    background-color: #1e90ff;
  }
`;
