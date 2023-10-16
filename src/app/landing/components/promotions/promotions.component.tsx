'use client';
import * as React from 'react';
import { useTheme, Box, styled } from '@mui/material';

const StyledPromotionCards = styled(Box)({});

const PromotionCards = () => {
  return <StyledPromotionCards></StyledPromotionCards>;
};

export const Promotions = () => {
  const { typography, palette } = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        alignItems: 'center',
      }}
    >
      <Box component="h1" sx={{ ...typography.hero_super }}>
        PROMOTIONS & EVENTS
      </Box>
      <Box>
        Be the first to know about the latest ACE Golf promos and events
      </Box>
      <Box></Box>
    </Box>
  );
};
