import * as React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@/components/Typography/typography.component';

export const SimRoomsComponent = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="large" weight="900">
        SIM ROOMS
      </Typography>
      <Typography variant="base" weight="400">
        6 performance simulation rooms powered by Trackman award wining tech.
        Each sim has performance modes and fun modes for more goofiness. Learn
        more about our facilities below.
      </Typography>
    </Box>
  );
};
