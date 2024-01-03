'use client';
import * as React from 'react';

import {
  Box,
  useMediaQuery,
  useTheme,
  Tabs,
  Select,
  Tab,
  styled,
  Button,
  FormControl,
  SelectChangeEvent,
  InputLabel,
  InputBase,
  SvgIcon,
} from '@mui/material';

import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { Typography } from '@/components/Typography/typography.component';
import { Card } from '@/components/Cards/cards.component';
import { Promotions } from '../landing/components/promotions/promotions.component';
import { MailingList } from '../landing/components/mailingList/mailingList.component';
import dayjs from 'dayjs';

const CustomInput = styled(InputBase)(({ theme }) => ({
  // 'label + &': {
  //   marginTop: theme.spacing(3),
  // },
  '& .MuiInputBase-input': {
    borderRadius: '12px',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,

    // fontSize: 16,
    padding: '12px 24px 12px 24px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),

    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export default function BookNow() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const currentDate = new Date();

  const currentDay = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(currentDate);

  const [value, setValue] = React.useState(currentDate.getDay());

  const [reserveABayObject, setReserveABayObject] = React.useState<{
    guests: string;
    duration: string;
    date: string;
    time: string;
  }>({
    guests: '1',
    duration: '1',
    date: dayjs(new Date()).format(),
    time: dayjs(new Date()).format(),
  });

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

  console.log(reserveABayObject, dayjs(new Date()));

  const handleReserveFormOnChange = (
    event: SelectChangeEvent,
    option: keyof typeof reserveABayObject,
  ) => {
    console.log(event.target.value);

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
  return (
    <Box sx={{ margin: 'auto' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          width: '100%',
          gap: '24px',
          padding: '24px',
        }}
      >
        <Card
          buttonOne={{
            children: (
              <Typography variant="base">
                <a href={handleBookNowButtonLink()} target="_blank">
                  Find a Bay&nbsp;
                </a>
              </Typography>
            ),
            variant: 'secondary',
            fullWidth: true,
          }}
          CardTitle="Book a bay now"
          ColorVariant="dark"
          BackgroundColor={theme.palette.aceOrange}
          sx={{
            flexBasis: '110%',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <FormControl fullWidth>
              <InputLabel
                id="reserve-a-bay-guest-label"
                sx={{ visibility: 'hidden' }}
              >
                Guests
              </InputLabel>
              <Select
                value={reserveABayObject.guests}
                native
                label="Guests"
                id="reserve-a-bay-guest"
                labelId="reserve-a-bay-guest-label"
                onChange={e => handleReserveFormOnChange(e, 'guests')}
                input={<CustomInput />}
                IconComponent={() => (
                  <SvgIcon
                    width="19"
                    height="12"
                    viewBox="0 0 19 12"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable
                    sx={{
                      right: '10px',
                      position: 'absolute',
                      top: 'calc(50% - 0.5em)',
                      fill: 'none',
                      pointerEvents: 'none',
                    }}
                  >
                    <path
                      d="M2 1.75L9.5 9.25L17 1.75"
                      stroke="black"
                      stroke-width="3"
                    />
                  </SvgIcon>
                )}
              >
                {[...Array(6)].map((_, index) => (
                  <option value={index} key={`option_${index}`}>
                    {[index, index !== 1 ? 'Guests' : 'Guest'].join(' ')}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel
                id="reserve-a-bay-duration-label"
                sx={{ visibility: 'hidden' }}
              >
                Hours
              </InputLabel>
              <Select
                value={reserveABayObject.duration}
                native
                label="Hours"
                id="reserve-a-bay-duration"
                labelId="reserve-a-bay-duration-label"
                onChange={e => handleReserveFormOnChange(e, 'duration')}
                input={<CustomInput />}
                IconComponent={() => (
                  <SvgIcon
                    width="19"
                    height="12"
                    viewBox="0 0 19 12"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable
                    sx={{
                      right: '10px',
                      position: 'absolute',
                      top: 'calc(50% - 0.5em)',
                      fill: 'none',
                      pointerEvents: 'none',
                    }}
                  >
                    <path
                      d="M2 1.75L9.5 9.25L17 1.75"
                      stroke="black"
                      stroke-width="3"
                    />
                  </SvgIcon>
                )}
              >
                {[...Array(5)].map((_, index) =>
                  index === 0 ? (
                    <></>
                  ) : (
                    <option value={index} key={`option_${index}`}>
                      {[index, index !== 1 ? 'Hours' : 'Hour'].join(' ')}
                    </option>
                  ),
                )}
              </Select>
            </FormControl>

            <DatePicker
              label="Date"
              // id="reserve-a-bay-date"
              // labelId="reserve-a-bay-date-label"
              slots={{
                openPickerIcon: () => (
                  <svg
                    width="19"
                    height="12"
                    viewBox="0 0 19 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 1.75L9.5 9.25L17 1.75"
                      stroke="black"
                      stroke-width="3"
                    />
                  </svg>
                ),
              }}
              slotProps={{
                textField: {
                  sx: {
                    color: 'black',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    '.MuiFormLabel-root': {
                      visibility: 'hidden',
                    },
                    '.MuiInputBase-root': {
                      padding: '12px 24px',

                      '.MuiInputBase-input': {
                        padding: '0px',
                      },
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                      visibility: 'hidden',
                    },
                  },
                },
                openPickerButton: {
                  sx: {
                    padding: '0px',
                  },
                },
                inputAdornment: {
                  sx: {
                    marginLeft: '0px',
                  },
                },
              }}
              value={dayjs(reserveABayObject.date)}
              onChange={newValue => {
                console.log(newValue);
                handleDateTimePickerChange(newValue?.toString()!, 'date');

                console.log(getDateQueryString());
              }}
            />

            <TimePicker
              label="Time"
              // id="reserve-a-bay-date"
              // labelId="reserve-a-bay-date-label"
              slots={{
                openPickerIcon: () => (
                  <svg
                    width="19"
                    height="12"
                    viewBox="0 0 19 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 1.75L9.5 9.25L17 1.75"
                      stroke="black"
                      stroke-width="3"
                    />
                  </svg>
                ),
              }}
              slotProps={{
                textField: {
                  sx: {
                    color: 'black',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    '.MuiFormLabel-root': {
                      visibility: 'hidden',
                    },
                    '.MuiInputBase-root': {
                      padding: '12px 24px',

                      '.MuiInputBase-input': {
                        padding: '0px',
                      },
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                      visibility: 'hidden',
                    },
                  },
                },
                openPickerButton: {
                  sx: {
                    padding: '0px',
                  },
                },
                inputAdornment: {
                  sx: {
                    marginLeft: '0px',
                  },
                },
              }}
              value={dayjs(reserveABayObject.time)}
              onChange={newValue => {
                console.log('this shit', newValue);
                handleDateTimePickerChange(newValue?.toString()!, 'date');

                console.log(getTimeQueryString());
              }}
            />
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
