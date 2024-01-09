'use client';
import * as React from 'react';

import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { NintendoSwitch } from '@/components/nintendoSwitch/nintendoSwitch.component';
import { Typography } from '@/components/Typography/typography.component';
import { HowItWorks } from '@/components/howItWorks/howItWorks.component';
import { SimRoomsComponent } from './components/simRooms/simRooms.component';
import { GolfGamesComponent } from './components/golfGames/golfGames.component';
import Image from 'next/image';

export default function Home() {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: theme.palette.aceOrange,
          flexDirection: isMobileOrTablet ? 'column' : 'row',
          gap: '0.5rem',
          padding: '2rem',
        }}
      >
        <Typography
          variant="poster"
          weight="900"
          fontStyle="italic"
          sx={{ textWrap: 'wrap', textAlign: 'center', flex: 1 }}
        >
          HOW DOES
          <br />
          IT WORK
        </Typography>
        <Typography
          variant="large"
          weight="500"
          sx={{
            textWrap: 'wrap',
            textAlign: 'center',
            flex: 1,
            color: 'black',
          }}
        >
          This copy describes the overall experience of what ace golf encourages
          users to learn more below and see the FAQs section on this page
        </Typography>
      </Box>
      {/* <Box sx={{ position: 'relative' }}>
        <Image
          src="/images/milk-wave.svg"
          alt=""
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
      </Box> */}

      <HowItWorks />
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button variant="primary">Reserve a Bay &rarr;</Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: theme.palette.aceGreen,
          flexDirection: 'column',
          gap: '32px',
          padding: '24px',
          justifyContent: 'center',
        }}
      >
        <SimRoomsComponent />
        <GolfGamesComponent />
      </Box>

      {/* FAQ */}
      <Box sx={{ display: 'flex' }}></Box>

      <NintendoSwitch />
    </Box>
  );
}
