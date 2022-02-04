import React from 'react';
import * as S from '../../styles/Header/Header-styling';
import SearchBar from './SearchBar';
import UserNav from './UserNav';

function Header() {
  return (
    <S.StyledHeader>
      <S.StyledSVG>
        <S.StyledText>
          <tspan>Travel</tspan>Wise
        </S.StyledText>
      </S.StyledSVG>
      <SearchBar />
      <UserNav />
    </S.StyledHeader>
  );
}

export default Header;
