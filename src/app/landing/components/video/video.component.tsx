'use client';

import * as React from 'react';
import { Box, useMediaQuery, SxProps } from '@mui/material';
import ReactPlayer from 'react-player';

interface LandingVideoProps {
  width: string;
  height: string;
  sx?: SxProps;
}

export const LandingVideo = ({ sx }: LandingVideoProps) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  // const isSmallDesktop = useMediaQuery('(max-width:950px)');
  // const isLargeDesktop = useMediaQuery('(min-width:1440px)');
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
        url={
          isMobile
            ? 'images/mobile-SPIN-Sizzle-Reel_1.mp4'
            : 'images/SPIN-Sizzle-Reel.mp4'
        }
        width="100%"
        height="100%"
        style={{ borderRadius: '25px', overflow: 'hidden' }}
        muted
        playing
        loop
        controls={false}
        playsinline={true}
      />
    </Box>
  );
};
