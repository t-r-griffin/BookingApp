import React from 'react';
import * as S from '../../../styles/Hotel/HotelFilter-styling';
import { ratings, useStyles } from './utils/hotelRatings';

function GuestRating() {
  const classes = useStyles();
  const [rating, setRating] = React.useState({
    value: ratings[0],
  });

  const changeGuestRating = name => event => {
    setRating({ [name]: event.target.value });
  };

  return (
    <S.Item specificWidth lm={10} style={{ alignSelf: 'stretch' }}>
      <S.ItemGrid>
        <S.Title>Guest rating</S.Title>
        <S.Rating>
          <S.StyledFormControl>
            <S.StyledSelect
              defaultValue={3.5}
              value={rating.value}
              onChange={changeGuestRating('value')}
              renderValue={option => option.value}
              MenuProps={{
                classes: { root: classes.root },
              }}
            >
              {ratings.map(option => (
                <S.StyledMenuItem key={option.value} value={option}>
                  <div>{option.value}</div>
                  <div>{option.label}</div>
                </S.StyledMenuItem>
              ))}
            </S.StyledSelect>
          </S.StyledFormControl>
        </S.Rating>
      </S.ItemGrid>
    </S.Item>
  );
}

export default GuestRating;
