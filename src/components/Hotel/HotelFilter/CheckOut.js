import React from 'react';
import DatePicker from 'react-datepicker';
import { useDates } from './Contexts/DatesContext';
import * as S from '../../../styles/Hotel/HotelFilter-styling';

function CheckOut() {
  const checkOutRef = React.useRef();
  const [checkOutDatePicker, setCheckOutDatePicker] = React.useState(false);

  const {
    labelRef,
    startDate,
    endDate,
    setEndDate,
    yesterday,
    oneYearFromNow,
  } = useDates();

  const showCheckOutDatePicker = event => {
    if (labelRef.current && labelRef.current.contains(event.target)) {
      return;
    }

    if (checkOutRef.current && !checkOutRef.current.contains(event.target)) {
      setCheckOutDatePicker(!checkOutDatePicker);
    }
  };

  const minDateCheckOut = () => {
    const date1 = new Date(startDate).getDate();
    const month = new Date(startDate).getMonth();
    const year = new Date(startDate).getYear();
    const date2 = new Date(endDate).getDate();
    const month2 = new Date(endDate).getMonth();
    const year2 = new Date(endDate).getYear();
    return (
      (year === year2 && month === month2 && date2 - 1 === date1) ||
      (date2 === 1 && month2 - 1 === month) ||
      (date1 === 31 && date2 === 1 && month === 11 && month2 === 0)
    );
  };

  const maxDateCheckOut = () => {
    const dateNow = new Date();
    dateNow.setFullYear(dateNow.getFullYear() + 1);
    const currentEndDate = new Date(endDate);

    return (
      dateNow.getFullYear() === currentEndDate.getFullYear() &&
      dateNow.getMonth() === currentEndDate.getMonth() &&
      (dateNow.getDate() === currentEndDate.getDate() ||
        dateNow.getDate() === currentEndDate.getDate() - 1)
    );
  };

  return (
    <S.Item>
      <S.CheckIn onClick={e => showCheckOutDatePicker(e)}>
        <S.Grid>
          <S.DateIcon>
            <S.Icon icon="date_range" />
          </S.DateIcon>
          <S.SubGrid>
            <S.ButtonHead>Check Out</S.ButtonHead>
            <S.ButtonLabel>
              <div ref={checkOutDatePicker === true ? labelRef : null}>
                <DatePicker
                  customInput={<S.customDateRange />}
                  selected={endDate}
                  startDate={endDate}
                  minDate={yesterday()}
                  maxDate={oneYearFromNow()}
                  onChange={date2 => setEndDate(date2)}
                  onClickOutside={e => showCheckOutDatePicker(e)}
                  open={checkOutDatePicker}
                  dateFormat="eee, d/MM/yy"
                />
              </div>
            </S.ButtonLabel>
          </S.SubGrid>
          <S.DateNavigator ref={checkOutRef}>
            <S.DateButton
              disabled={minDateCheckOut()}
              onClick={() => {
                const newDate = new Date(endDate);
                setEndDate(newDate.setDate(newDate.getDate() - 1));
              }}
            >
              <S.Icon clickableIcon icon="chevron_left" />
            </S.DateButton>
            <S.DateButton
              disabled={maxDateCheckOut()}
              onClick={() => {
                const newDate = new Date(endDate);
                setEndDate(newDate.setDate(newDate.getDate() + 1));
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

export default CheckOut;
