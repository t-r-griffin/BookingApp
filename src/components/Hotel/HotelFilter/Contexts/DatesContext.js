import React, { useContext, useState, useEffect } from 'react';

const DatesContext = React.createContext();

export function useDates() {
  return useContext(DatesContext);
}

export function DatesProvider({ children }) {
  const date = new Date();
  const labelRef = React.useRef();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = React.useState(
    date.setDate(date.getDate() + 1)
  );
  const [count, setCount] = React.useState(0);
  const [count1, setCount1] = React.useState(0);

  function isNextDay(a, b) {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  function isNextDayOfMonth(a, b) {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.setDate(a.getDate() + 1) === b.getDate()
    );
  }

  const oneYearFromNow = () => {
    const nextYear = new Date();
    return nextYear.setFullYear(nextYear.getFullYear() + 1);
  };

  const validateDates = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (
      // End date is same month and one day after start date e.g. 11/02/2022 -> 12/02/2022
      isNextDay(start, end) ||
      // End date is first day of next month e.g. 31/08/2022 -> 1/09/2022
      isNextDayOfMonth(start, end)
      // End date is first day of new year e.g. 31/12/2022 -> 1/01/2023
    ) {
      setEndDate(end.setDate(end.getDate() + 1));
    }
  };

  const validateDates2 = () => {
    const start = new Date(startDate);
    const newDate = new Date(startDate);
    const nextDay = new Date(newDate.setDate(newDate.getDate() + 1));
    const end = new Date(endDate);
    const startDay = new Date(startDate).getDate();
    const endDay = new Date(endDate).getDate();
    const startMonth = new Date(startDate).getMonth();
    const endMonth = new Date(endDate).getMonth();
    const startYear = new Date(startDate).getFullYear();
    const endYear = new Date(endDate).getFullYear();

    if (startDay === 31 && startMonth === 11 && startYear === endYear) {
      setEndDate(end.setDate(start.getDate() + 1));
      setEndDate(end.setMonth(0));
      setEndDate(end.setYear(start.getFullYear() + 1));
      return;
    }
    if (
      nextDay.getDate() === 1 &&
      startMonth === endMonth &&
      startYear === endYear
    ) {
      setEndDate(end.setDate(start.getDate() + 1));
      setEndDate(end.setMonth(start.getMonth() + 1));
      setEndDate(end.setYear(start.getFullYear()));
      return;
    }

    if (
      nextDay.getDate() === 1 &&
      startMonth >= endMonth &&
      startYear === endYear
    ) {
      setEndDate(end.setDate(1));
      setEndDate(end.setMonth(start.getMonth() + 1));
      setEndDate(end.setYear(start.getFullYear()));
      return;
    }

    if (nextDay.getDate() === 1 && startYear > endYear) {
      setEndDate(end.setDate(1));
      setEndDate(end.setMonth(start.getMonth() + 1));
      setEndDate(end.setYear(start.getFullYear()));
      return;
    }

    if (
      startDay >= endDay &&
      startMonth === endMonth &&
      startYear === endYear
    ) {
      setEndDate(end.setDate(start.getDate() + 1));
      return;
    }

    if (startMonth > endMonth && startYear === endYear) {
      setEndDate(end.setDate(start.getDate() + 1));
      setEndDate(end.setMonth(start.getMonth()));
      return;
    }

    if (startYear > endYear) {
      setEndDate(end.setDate(start.getDate() + 1));
      setEndDate(end.setMonth(start.getMonth()));
      setEndDate(end.setYear(start.getFullYear()));
    }
  };

  function yesterday() {
    const date1 = new Date(startDate);
    return date1.setDate(date1.getDate() + 1);
  }

  useEffect(() => {
    if (count) {
      validateDates2();
    }
  }, [count]);

  useEffect(() => {
    if (count1) {
      validateDates();
    }
  }, [count1]);

  const value = {
    labelRef,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    yesterday,
    isNextDay,
    isNextDayOfMonth,
    oneYearFromNow,
    count,
    setCount,
    count1,
    setCount1,
  };
  return (
    <DatesContext.Provider value={value}>{children}</DatesContext.Provider>
  );
}
