import React from 'react';
import HotelFilter from './HotelFilter/HotelFilter';
import HotelList from './HotelList';
import * as S from '../../styles/Hotel/HotelGrid-styling';
import { DatesProvider } from './HotelFilter/Contexts/DatesContext';

function Hotel() {
  return (
    <S.StyledHotelGrid>
      <DatesProvider>
        <HotelFilter />
        <HotelList />
      </DatesProvider>
    </S.StyledHotelGrid>
  );
}

export default Hotel;
