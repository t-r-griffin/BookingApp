import React from 'react';
import * as S from '../../styles/Header/SearchBar-styling';

function SearchBar() {
  return (
    <S.StyledForm action="#">
      <S.StyledInput type="text" placeholder="Search..." />
      <S.StyledButton>
        <S.StyledSVG icon="search" />
      </S.StyledButton>
    </S.StyledForm>
  );
}

export default SearchBar;
