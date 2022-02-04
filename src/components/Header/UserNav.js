import React from 'react';
import * as S from '../../styles/Header/UserNav-styling';

function renderIconBox(icon, notifications) {
  return (
    <S.StyledIconBox>
      <S.StyledIcon icon={icon} />
      <S.StyledNotification>{notifications}</S.StyledNotification>
    </S.StyledIconBox>
  );
}

function UserNav() {
  return (
    <S.StyledNav>
      <div>
        <S.StyledUserPhoto icon="account_circle" />
        <span>Sign In</span>
      </div>
    </S.StyledNav>
  );
}

export default UserNav;
