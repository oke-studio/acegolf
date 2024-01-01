'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import { MusicPlayer } from './components/musicPlayer/musicPlayer.component';
import { Typography } from '@/components/Typography/typography.component';

export const WhatsTheVibe = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        backgroundColor: '#171717',
      }}
    >
      <Typography
        variant="largeH1"
        sx={{
          textTransform: 'uppercase',
        }}
      >
        What&apos;s the Vibe?
      </Typography>
      <MusicPlayer />
      {/* Picture collage */}
      <Box sx={{ display: 'flex', margin: '75px 0px', gap: '24px' }}>
        <Box
          // src="/images/whatsTheVibeAssets/wtv-04.jpg"

          sx={{
            backgroundImage: 'url(/images/ace-banner-chromatic-white.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
            width: '200px',
            height: '300px',

            transform: 'translateY(-25px)',
          }}
        />
        <Box
          // src="/images/whatsTheVibeAssets/wtv-04.jpg"

          sx={{
            backgroundImage: 'url(/images/ace-banner-chromatic-white.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
            width: '200px',
            height: '300px',

            transform: 'translateY(50px)',
          }}
        />
        <Box
          // src="/images/whatsTheVibeAssets/wtv-04.jpg"

          sx={{
            backgroundImage: 'url(/images/ace-banner-chromatic-white.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
            width: '200px',
            height: '300px',

            transform: 'translateY(-25px)',
            marginLeft: '24px',
          }}
        />
        <Box
          // src="/images/whatsTheVibeAssets/wtv-04.jpg"

          sx={{
            backgroundImage: 'url(/images/ace-banner-chromatic-white.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
            width: '200px',
            height: '300px',

            transform: 'translateY(50px)',
          }}
        />
      </Box>

      <Typography
        variant="largeH1"
        sx={{
          textTransform: 'uppercase',
        }}
      >
        What they&apos;re saying?
      </Typography>
    </Box>
  );
};
