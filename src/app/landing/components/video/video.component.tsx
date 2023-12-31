'use client';

import * as React from 'react';
import { useTheme, Box, useMediaQuery, Button, SxProps } from '@mui/material';
import ReactPlayer from 'react-player';

interface landingVideoProps {
  width: string;
  height: string;
  sx?: SxProps;
}

export const LandingVideo = ({ width, height, sx }) => {
  const { typography, palette } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');
  const isSmallDesktop = useMediaQuery('(max-width:950px)');
  const isLargeDesktop = useMediaQuery('(min-width:1440px)');
  return (
    <Box
      sx={{
        width: '100%',
        height: 'max-content',
        //borderRadius: '25px',
        //backgroundColor: 'grey',
        //marginBottom: '80px',
        ...sx,
      }}
    >
      <ReactPlayer
        url="images/SPIN-Sizzle-Reel.mp4"
        width="100%"
        height="100%"
        style={{ borderRadius: '25px', overflow: 'hidden' }}
        muted
        playing
        loop
        controls={false}
      />
    </Box>
  );
};
