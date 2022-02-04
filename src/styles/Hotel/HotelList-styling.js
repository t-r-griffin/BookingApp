import styled from 'styled-components';
import { MaterialIcon } from '../../utils/materialIcon';
import { colors, breakPoints } from '../variables';

export const HotelList = styled.main`
   {
    grid-row: 2 / 2;
    background-color: rgb(243, 244, 245);

    display: grid;
    width: 100%;
    margin: 0 auto;
    margin-top: -1rem;
    padding-top: 2rem;
    padding-bottom: 5rem;
    justify-items: center;
    grid-template-rows: repeat(auto-fill, 1fr);
    grid-template-columns: 1fr;
    grid-gap: 2%;
  }
`;

export const HotelItem = styled.div`
  width: 70%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 5px 10px 10px rgb(41 51 57 / 75%);

  display: grid;
  grid-template-columns: 21rem 2fr 1fr;
  grid-template-rows: 12.6rem;

  @media only screen and (max-width: ${breakPoints.bpLarge}) {
    width: 90%;
    grid-template-columns: 21rem 2fr 1fr;
  }

  @media only screen and (max-width: ${breakPoints.bpMedium}) {
    width: 90%;
    grid-template-columns: 21rem 2fr 1fr;
  }

  @media only screen and (max-width: ${breakPoints.bpSmall}) {
    width: 80%;
    grid-template-columns: 21rem 1fr;
    padding-bottom: 1rem;
  }
`;

export const StyledPhoto = styled.img`
   {
    grid-column: 1 / 1;
    width: 21rem;
    height: 100%;
    display: block;
    border-radius: 10px;
    padding: 0.2rem;

    @media only screen and (max-width: ${breakPoints.bpSmall}) {
      height: 16.6rem;
    }
  }
`;

export const HotelDetails = styled.div`
  {
    grid column: 2 / 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 1rem;
    
  }
`;

export const HotelName = styled.div`
   {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    font-weight: bold;
    color: black;
  }
`;

export const StyledIcon = styled(MaterialIcon)`
   {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 1rem;
    color: ${colors.primary};
  }
`;

export const StyledStars = styled.div`
   {
    margin-right: 1rem;
    display: flex;
  }
`;

export const StyledOverview = styled.div`
    display: flex;
    padding-bottom: .5rem;
    align-items: stretch;
    border-bottom: ${colors.line};
    font-size: 1.3rem;

    @media only screen and (max-width: ${breakPoints.bpSmall}) {
    }
}
`;

export const StyledReview = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
  font-size: 1.3rem;
`;

export const StyledRating = styled.span`
  color: white;
  font-size: 1rem;
  align-self: center;
  border-radius: 10px;
  padding: 0 1rem;
  margin-right: 1rem;
  background-color: ${colors.primaryDark};
`;

export const Button = styled.button`
   {
    align-self: center;
    justify-self: center;
    font-size: 1.5rem;

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

    @media only screen and (max-width: ${breakPoints.bpLarge}) {
      font-size: 1.3rem;
    }

    @media only screen and (max-width: ${breakPoints.bpMedium}) {
      padding: 0.7rem 4rem;
      font-size: 1.3rem;
      text-align: center;
    }

    @media only screen and (max-width: ${breakPoints.bpSmall}) {
      grid-column: 2/2;
      padding: 0.7rem 3rem;
      height: 3rem;
      font-size: 1.2rem;
      text-align: center;
    }
  }
`;
