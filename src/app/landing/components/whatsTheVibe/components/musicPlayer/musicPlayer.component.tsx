'use client';

import { Box } from '@mui/material';
import * as React from 'react';
import Iframe from 'react-iframe';

export const MusicPlayer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#342972',
        width: '400px',
        height: '80px',
        display: 'flex',
        borderRadius: '8px',
      }}
    >
      <Iframe
        url=""
        styles={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/72hITZ4d6zKMgsczBtqREI?utm_source=generator"
        width="100%"
        height="152"
        frameBorder={0}
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        id="spotifyIframe"
      />
    </Box>
  );
};
