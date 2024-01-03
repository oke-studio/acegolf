import * as React from 'react';
import { SelectChangeEvent } from '@mui/material';
import { ReserveABayObject } from '../bookNowForm.component';
import dayjs from 'dayjs';

export const useBookNowForm = (reserveObject: ReserveABayObject) => {
  const currentDate = new Date();

  const [value, setValue] = React.useState(currentDate.getDay());

  const [reserveABayObject, setReserveABayObject] = React.useState<{
    guests: string;
    duration: string;
    date: string;
    time: string;
  }>(reserveObject);

  const getDateQueryString = () => {
    const dayJSDate = dayjs(reserveABayObject.date);

    const YEAR = dayJSDate.year();
    const MONTH = dayJSDate.month() + 1;
    const DAY = dayJSDate.date();

    return [YEAR, MONTH, DAY].join('/');
  };

  const getTimeQueryString = () => {
    const dayJSDate = dayjs(reserveABayObject.date);

    const HOUR = dayJSDate.hour();
    const MINUTE = dayJSDate.minute();

    const MOD_MINUTE = MINUTE < 10 ? '0' + MINUTE : MINUTE;

    if (HOUR > 12) {
      return [HOUR - 12, MOD_MINUTE].join(':') + 'PM';
    }

    return [HOUR, MOD_MINUTE].join(':') + 'AM';
  };

  // console.log(reserveABayObject, dayjs(new Date()));

  const handleReserveFormOnChange = (
    event: SelectChangeEvent,
    option: keyof typeof reserveABayObject,
  ) => {
    // console.log(event.target.value);

    reserveABayObject[option] = event.target.value;

    setReserveABayObject({
      ...reserveABayObject,
    });
  };

  const handleDateTimePickerChange = (
    newValue: string,
    option: keyof typeof reserveABayObject,
  ) => {
    reserveABayObject[option] = newValue;

    setReserveABayObject({ ...reserveABayObject });
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleBookNowButtonLink = () => {
    return `https://www.sevenrooms.com/reservations/acegolf?duration-picker=True&default_party_size=${
      reserveABayObject.guests
    }&default_time=${getTimeQueryString()}&default_date=${getDateQueryString()}`;
  };

  return {
    handleBookNowButtonLink,
    handleDateTimePickerChange,
    handleReserveFormOnChange,
    reserveABayObject,
    setReserveABayObject,
  };
};
