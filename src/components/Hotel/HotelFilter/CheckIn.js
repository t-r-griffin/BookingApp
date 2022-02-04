import React from 'react';
import DatePicker from 'react-datepicker';
import { useDates } from './Contexts/DatesContext';
import * as S from '../../../styles/Hotel/HotelFilter-styling';

function CheckIn() {
  const checkInRef = React.useRef();
  const {
    labelRef,
    startDate,
    setStartDate,
    count,
    setCount,
    count1,
    setCount1,
    oneYearFromNow,
  } = useDates();
  const [checkInDatePicker, setCheckInDatePicker] = React.useState(false);

  const showCheckInDatePicker = event => {
    if (labelRef.current && labelRef.current.contains(event.target)) {
      return;
    }

    if (checkInRef.current && !checkInRef.current.contains(event.target)) {
      setCheckInDatePicker(!checkInDatePicker);
    }
  };

  const minDateCheckIn = () => {
    const minDate = new Date(startDate).toString().substring(0, 15);
    const minDate2 = new Date().toString().substring(0, 15);
    return minDate === minDate2;
  };

  const maxDateCheckIn = () => {
    const dateNow = new Date();
    dateNow.setYear(dateNow.getFullYear() + 1);
    const currentStartDate = new Date(startDate);

    return (
      dateNow.getFullYear() === currentStartDate.getFullYear() &&
      dateNow.getMonth() === currentStartDate.getMonth() &&
      dateNow.getDate() === currentStartDate.getDate()
    );
  };

  return (
    <S.Item>
      <S.CheckIn onClick={e => showCheckInDatePicker(e)}>
        <S.Grid>
          <S.DateIcon>
            <S.Icon icon="date_range" />
          </S.DateIcon>
          <S.SubGrid>
            <S.ButtonHead>Check In</S.ButtonHead>
            <S.ButtonLabel>
              <div ref={checkInDatePicker === true ? labelRef : null}>
                <DatePicker
                  customInput={<S.customDateRange />}
                  selected={startDate}
                  startDate={startDate}
                  minDate={new Date()}
                  maxDate={oneYearFromNow()}
                  onChange={date2 => {
                    setStartDate(date2);
                    setCount(count + 1);
                  }}
                  open={checkInDatePicker}
                  onClickOutside={e => showCheckInDatePicker(e)}
                  dateFormat="eee, d/MM/yy"
                />
              </div>
            </S.ButtonLabel>
          </S.SubGrid>

          <S.DateNavigator ref={checkInRef}>
            <S.DateButton
              disabled={minDateCheckIn()}
              onClick={() => {
                const newDate = new Date(startDate);
                setStartDate(newDate.setDate(newDate.getDate() - 1));
              }}
            >
              <S.Icon clickableIcon icon="chevron_left" />
            </S.DateButton>
            <S.DateButton
              disabled={maxDateCheckIn()}
              onClick={() => {
                const newDate = new Date(startDate);
                setStartDate(newDate.setDate(newDate.getDate() + 1));
                setCount1(count1 + 1);
              }}
            >
              <S.Icon clickableIcon icon="chevron_right" />
            </S.DateButton>
          </S.DateNavigator>
        </S.Grid>
      </S.CheckIn>
    </S.Item>
  );
}

export default CheckIn;
