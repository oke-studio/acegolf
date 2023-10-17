'use client';

import * as React from 'react';
import { useTheme, Box, useMediaQuery, Button } from '@mui/material';

export const LandingHowItWorks = () => {
  const { typography, palette } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        gap: '52px',
        width: '50%',
        ...(isMobile && { width: '100%' }),
      }}
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
        <Box
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
        </Box>
      </Box>

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
          <Box component="span">
            Whether you&apos;re a planner or procrastinator, we&apos;ve got
            options for you. Make a reservation in advance with our super simple
            online booking tool or just walk in and set up your tee time.
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
          <Box component="span">
            Whether you&apos;re a planner or procrastinator, we&apos;ve got
            options for you. Make a reservation in advance with our super simple
            online booking tool or just walk in and set up your tee time.
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
            options for you. Make a reservation in advance with our super simple
            online booking tool or just walk in and set up your tee time.
          </Box>
        </Box>
      </Box>

      {/* Buttns */}
      <Box
        sx={{
          display: 'flex',
          ...(isMobile && { flexDirection: 'column' }),
          gap: '24px',
        }}
      >
        <Button variant="secondary" sx={{ ...(isMobile && { width: '100%' }) }}>
          Learn More &rarr;
        </Button>
        <Button variant="primary" sx={{ ...(isMobile && { width: '100%' }) }}>
          <a
            href="https://www.sevenrooms.com/reservations/acegolf?duration-picker=True"
            target="_blank"
          >
            {' '}
            Reserve a bay &rarr;
          </a>
        </Button>
      </Box>
    </Box>
  );
};
