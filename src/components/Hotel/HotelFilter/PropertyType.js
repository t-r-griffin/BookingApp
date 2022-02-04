import React from 'react';
import * as S from '../../../styles/Hotel/HotelFilter-styling';

function PropertyType() {
  const [all, setAll] = React.useState(true);
  const [hotels, setHotels] = React.useState(false);
  const [appartments, setAppartments] = React.useState(false);

  const togglePropertyType = buttonName => {
    if (buttonName === 'All') {
      setAll(true);
      setHotels(false);
      setAppartments(false);
    }
    if (buttonName === 'Hotels') {
      setAll(false);
      setHotels(true);
      setAppartments(false);
    }
    if (buttonName === 'Appartments') {
      setAll(false);
      setHotels(false);
      setAppartments(true);
    }
  };

  return (
    <S.Item
      lm="2"
      padLeft="2.5"
      padRight="2"
      style={{
        alignSelf: 'stretch',
        marginBottom: '1.5rem',
      }}
    >
      <S.ItemGrid>
        <S.Title>Property type</S.Title>
        <S.PropertyType>
          <S.PropertyItem
            selected={all}
            onClick={() => togglePropertyType('All')}
          >
            All
          </S.PropertyItem>
          <S.PropertyItem
            selected={hotels}
            onClick={() => togglePropertyType('Hotels')}
          >
            Hotels
          </S.PropertyItem>
          <S.PropertyItem
            selected={appartments}
            onClick={() => togglePropertyType('Appartments')}
          >
            Appartments
          </S.PropertyItem>
        </S.PropertyType>
      </S.ItemGrid>
    </S.Item>
  );
}

export default PropertyType;
