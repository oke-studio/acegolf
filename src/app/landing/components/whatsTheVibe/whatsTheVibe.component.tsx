'use client';

import * as React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { MusicPlayer } from './components/musicPlayer/musicPlayer.component';
import Image from 'next/image';

export const WhatsTheVibe = () => {
  const { typography } = useTheme();
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
        sx={{
          textTransform: 'uppercase',
          ...typography.hero_super_italic,
          fontSize: '64px',
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
        sx={{
          textTransform: 'uppercase',
          ...typography.hero_super_italic,
          fontSize: '64px',
        }}
      >
        What they&apos;re saying?
      </Typography>
    </Box>
  );
};
