import React from 'react';
import { Slider } from '@material-ui/core';
import { marks } from './utils/priceMarks';
import * as S from '../../../styles/Hotel/HotelFilter-styling';

function PriceSlider() {
  const [val, setVal] = React.useState(50);

  const handleChange = (e, newVal) => {
    setVal(newVal);
  };

  return (
    <S.Item w14>
      <S.ItemGrid>
        <S.Title>Price / night</S.Title>
        <S.Price>{val === 450 ? '£450+' : `£${val}`}</S.Price>
        <S.SliderContainer>
          <Slider
            value={val}
            marks={marks}
            onChange={handleChange}
            step={50}
            min={50}
            max={450}
            aria-labelledby="continuous-slider"
          />
        </S.SliderContainer>
      </S.ItemGrid>
    </S.Item>
  );
}

export default PriceSlider;
