'use client';

import * as React from 'react';
import {
  useTheme,
  Box,
  useMediaQuery,
  Button,
  FormControl,
  Select,
  InputLabel,
  SelectChangeEvent,
  InputBase,
  styled,
  Hidden,
  MenuItem,
} from '@mui/material';
import { LandingCards } from '../landingCards/landingCards.component';
import { Card } from '@/components/Cards/cards.component';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  // 'label + &': {
  //   marginTop: theme.spacing(3),
  // },
  '& .MuiInputBase-input': {
    borderRadius: '12px',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: `4px solid ${theme.palette.aceOrange}`,
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

export const LandingHowItWorks = () => {
  const { typography, palette } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');
  const isSmallDesktop = useMediaQuery('(max-width:950px)');
  const isLargeDesktop = useMediaQuery('(min-width:1440px)');

  const [reserveABayObject, setReserveABayObject] = React.useState<{
    guests: string;
    time: string;
  }>({ guests: '1', time: '1' });

  console.log(reserveABayObject);

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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        color: 'white',
        gap: '52px',
        width: '100%',

        ...(isMobile && { width: '100%' }),
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {/* How it works heading */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',

            gap: '32px',
          }}
        >
          <Box
            component="h1"
            sx={{
              ...typography.hero_super_italic,
              fontSize: '48px',
              ...(isMobile && { textAlign: 'center', lineHeight: '65%' }),
            }}
          >
            HOW IT WORKS
          </Box>
          {/* <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              ...typography.hero_medium,
              fontSize: '18px',
              gap: '24px',
            }}
          >
            <Box component="span">
              We&apos;ve revolutionized the game by bringing the excitement of
              indoor golf to the heart of the city.
            </Box>
            <Box component="span">
              Rain or shine, day or night, our state-of-the-art simulators
              transport you to world-class courses, allowing you to swing your
              clubs without any weather limitations.
            </Box>
            <Box component="span">
              Say goodbye to soggy fairways and hello to an immersive golfing
              experience that will keep you entertained for hours.
            </Box>
          </Box> */}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          {/* #1 */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="span"
                sx={{ ...typography.hero_super_italic, fontSize: '96px' }}
              >
                1.
              </Box>
              <Box
                component="h1"
                sx={{
                  ...typography.hero_super_italic,
                  fontSize: '48px',
                  lineHeight: '65%',
                }}
              >
                Reserve A <br />
                Bay
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                ...typography.hero_medium,
                fontSize: '18px',
              }}
            >
              <Box component="span" sx={{ padding: '0px 32px' }}>
                Whether you&apos;re a planner or procrastinator, we&apos;ve got
                options for you. Make a reservation in advance with our super
                simple online booking tool or just walk in and set up your tee
                time.
              </Box>
            </Box>
          </Box>

          {/* #2 */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="span"
                sx={{ ...typography.hero_super_italic, fontSize: '96px' }}
              >
                2.
              </Box>
              <Box
                component="h1"
                sx={{
                  ...typography.hero_super_italic,
                  fontSize: '48px',
                  lineHeight: '65%',
                }}
              >
                Set Up And
                <br /> Tee Up
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                ...typography.hero_medium,
                fontSize: '18px',
              }}
            >
              <Box component="span" sx={{ padding: '0px 32px' }}>
                Whether you&apos;re a planner or procrastinator, we&apos;ve got
                options for you. Make a reservation in advance with our super
                simple online booking tool or just walk in and set up your tee
                time.
              </Box>
            </Box>
          </Box>

          {/* #3 */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="span"
                sx={{ ...typography.hero_super_italic, fontSize: '96px' }}
              >
                3.
              </Box>
              <Box
                component="h1"
                sx={{
                  ...typography.hero_super_italic,
                  fontSize: '48px',
                  lineHeight: '65%',
                }}
              >
                Start <br />
                Swingin&apos;
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                ...typography.hero_medium,
                fontSize: '18px',
              }}
            >
              <Box component="span">
                Whether you&apos;re a planner or procrastinator, we&apos;ve got
                options for you. Make a reservation in advance with our super
                simple online booking tool or just walk in and set up your tee
                time.
              </Box>
            </Box>
          </Box>
        </Box>
        <Card
          CardTitle="Book a bay with friends"
          ColorVariant="dark"
          buttonOne={{ children: 'Reserve a bay', variant: 'primary' }}
          BackgroundColor="transparent"
          // fullWidth
          sx={{
            borderColor: '#36DAD5',
            borderWidth: '6px',
            borderStyle: 'solid',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
            <FormControl fullWidth>
              <InputLabel id="reserve-a-bay-guest-label">Guests</InputLabel>
              <Select
                value={reserveABayObject.guests}
                native
                label="Guests"
                id="reserve-a-bay-guest"
                labelId="reserve-a-bay-guest-label"
                onChange={(e) => handleReserveFormOnChange(e, 'guests')}
                input={<BootstrapInput />}
              >
                {[...Array(6)].map((_, index) => (
                  <option value={index} key={`option_${index}`}>
                    {[index, index !== 1 ? 'Guests' : 'Guest'].join(' ')}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="reserve-a-bay-time-label">Guests</InputLabel>
              <Select
                value={reserveABayObject.time}
                native
                label="Hours"
                id="reserve-a-bay-time"
                labelId="reserve-a-bay-time-label"
                onChange={(e) => handleReserveFormOnChange(e, 'time')}
                input={<BootstrapInput />}
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
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
