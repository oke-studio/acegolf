'use client';
import * as React from 'react';

import { Box, Button } from '@mui/material';
import { NintendoSwitch } from '@/components/nintendoSwitch/nintendoSwitch.component';
import { Typography } from '@/components/Typography/typography.component';
import { HowItWorks } from '@/components/howItWorks/howItWorks.component';
import { SimRoomsComponent } from './components/simRooms/simRooms.component';
import { GolfGamesComponent } from './components/golfGames/golfGames.component';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          backgroundColor: theme => theme.palette.aceOrange,
        }}
      >
        <Typography
          variant="poster"
          weight="900"
          fontStyle="italic"
          sx={{ textWrap: 'wrap', textAlign: 'center' }}
        >
          HOW DOES
          <br />
          IT WORK
        </Typography>
        <Typography variant="large" weight="500">
          Something
        </Typography>
      </Box>
      {/* <Box
        sx={{
          backgroundImage: 'url(/images/milk-wave.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: '-200px',
          backgroundSize: 'contain',
          width: '100%',
          height: '100px',
        }}
      /> */}

      <HowItWorks />
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button variant="primary">Reserve a Bay &rarr;</Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: theme => theme.palette.aceGreen,
          flexDirection: 'column',
          gap: '32px',
          padding: '24px',
          justifyContent: 'center',
        }}
      >
        <SimRoomsComponent />
        <GolfGamesComponent />
      </Box>

      <NintendoSwitch />
    </Box>
  );
}
