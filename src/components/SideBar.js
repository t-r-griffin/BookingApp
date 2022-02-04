import React from 'react';
import * as S from '../styles/SideBar-styling';

let path;
let pathElement;
let activeElement;

if (window.location.pathname === '/') {
  pathElement = 'hotel';
} else {
  path = window.location.pathname.split('/');
  pathElement = path[1];
}
if (
  pathElement === 'flight' ||
  pathElement === 'car_rental' ||
  pathElement === 'tours'
) {
  activeElement = pathElement;
} else {
  activeElement = 'hotel';
}

function SideBar() {
  const [active, setActive] = React.useState(activeElement);

  const toggle = buttonName => {
    if (buttonName === 'hotel') {
      setActive('hotel');
    }
    if (buttonName === 'flight') {
      setActive('flight');
    }
    if (buttonName === 'car_rental') {
      setActive('car_rental');
    }

    if (buttonName === 'tours') {
      setActive('tours');
    }
  };

  function renderItems(name, url) {
    const nameCheck =
      name.split(' ').length > 1 ? name.split(' ').join('_') : name;

    return (
      <S.StyledNavItem
        active={nameCheck === active}
        onClick={() => toggle(nameCheck)}
      >
        <S.StyledNavLink to={url}>
          <S.StyledIcon icon={nameCheck.toLowerCase()} />
          <span>{name}</span>
        </S.StyledNavLink>
      </S.StyledNavItem>
    );
  }

  return (
    <S.StyledSideBar>
      <S.StyledSideNav>
        {renderItems('hotel', '/hotel')}
        {renderItems('flight', '/flight')}
        {renderItems('car rental', '/car_rental')}
        {renderItems('tours', '/tours')}
      </S.StyledSideNav>
    </S.StyledSideBar>
  );
}

export default SideBar;
