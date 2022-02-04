import React from 'react';
import CheckIn from './CheckIn';
import CheckOut from './CheckOut';
import Guests from './Guests';
import SearchButton from './SearchButton';
import PriceSlider from './PriceSlider';
import PropertyType from './PropertyType';
import GuestRating from './GuestRating';
import * as S from '../../../styles/Hotel/HotelFilter-styling';
import 'react-datepicker/dist/react-datepicker.css';

function HotelFilter() {
  return (
    <div>
      <S.HotelFilter>
        <CheckIn />
        <CheckOut />
        <Guests />
        <SearchButton />
      </S.HotelFilter>
      <S.HotelFilter2>
        <PriceSlider />
        <PropertyType />
        <GuestRating />
      </S.HotelFilter2>
    </div>
  );
}

export default HotelFilter;
