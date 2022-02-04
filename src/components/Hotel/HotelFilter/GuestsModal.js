import React from 'react';
import * as S from '../../../styles/Hotel/HotelFilter-styling';

function GuestsModal({ children }) {
  return <S.Modal>{children}</S.Modal>;
}

export default GuestsModal;
