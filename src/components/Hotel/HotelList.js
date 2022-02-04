import React from 'react';
import * as S from '../../styles/Hotel/HotelList-styling';

function HotelList() {
  function renderStars(number) {
    const stars = [];

    for (let i = 0; i < number; i++) {
      stars.push(i);
    }

    return stars.map(() => <S.StyledIcon icon="star" />);
  }

  return (
    <S.HotelList>
      <S.HotelItem>
        <S.StyledPhoto
          src={require(`../../assets/hotel-1.jpg`).default}
          alt="Photo of hotel"
        />
        <S.HotelDetails>
          <S.HotelName>La Clef Tour Eiffel Paris</S.HotelName>
          <S.StyledOverview>
            <S.StyledStars>{renderStars(3)}</S.StyledStars>
            <div>Hotel</div>
          </S.StyledOverview>
          <S.StyledOverview>
            <S.StyledIcon icon="location_on" />
            <div>Paris</div>
          </S.StyledOverview>
          <S.StyledReview>
            <S.StyledRating>8.7</S.StyledRating>
            <div>Excellent</div>
          </S.StyledReview>
        </S.HotelDetails>
        <S.Button>View</S.Button>
      </S.HotelItem>
      <S.HotelItem>
        <S.StyledPhoto
          src={require(`../../assets/hotel-2.jpg`).default}
          alt="Photo of hotel"
        />
        <S.HotelDetails>
          <S.HotelName>Tranquility Bay Beach House Resort</S.HotelName>
          <S.StyledOverview>
            <S.StyledStars>{renderStars(5)}</S.StyledStars>
            <div>Hotel</div>
          </S.StyledOverview>
          <S.StyledOverview>
            <S.StyledIcon icon="location_on" />
            <div>Marathon</div>
          </S.StyledOverview>
          <S.StyledReview>
            <S.StyledRating>8.9</S.StyledRating>
            <div>Excellent</div>
          </S.StyledReview>
        </S.HotelDetails>
        <S.Button>View</S.Button>
      </S.HotelItem>
      <S.HotelItem>
        <S.StyledPhoto
          src={require(`../../assets/hotel-3.jpg`).default}
          alt="Photo of hotel"
        />
        <S.HotelDetails>
          <S.HotelName>Hilton Diagonal Mar Barcelona</S.HotelName>
          <S.StyledOverview>
            <S.StyledStars>{renderStars(4)}</S.StyledStars>
            <div>Hotel</div>
          </S.StyledOverview>
          <S.StyledOverview>
            <S.StyledIcon icon="location_on" />
            <div>Barcelona</div>
          </S.StyledOverview>
          <S.StyledReview>
            <S.StyledRating>8.2</S.StyledRating>
            <div>Very Good</div>
          </S.StyledReview>
        </S.HotelDetails>
        <S.Button>View</S.Button>
      </S.HotelItem>
      <S.HotelItem>
        <S.StyledPhoto
          src={require(`../../assets/hotel-4.jpg`).default}
          alt="Photo of hotel"
        />
        <S.HotelDetails>
          <S.HotelName>Hotel St Martins Lane London</S.HotelName>
          <S.StyledOverview>
            <S.StyledStars>{renderStars(4)}</S.StyledStars>
            <div>Hotel</div>
          </S.StyledOverview>
          <S.StyledOverview>
            <S.StyledIcon icon="location_on" />
            <div>London</div>
          </S.StyledOverview>
          <S.StyledReview>
            <S.StyledRating>9.1</S.StyledRating>
            <div>Excellent</div>
          </S.StyledReview>
        </S.HotelDetails>
        <S.Button>View</S.Button>
      </S.HotelItem>
    </S.HotelList>
  );
}

export default HotelList;
