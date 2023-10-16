'use client';
import * as React from 'react';
import { useTheme, Box, styled, Typography } from '@mui/material';

const StyledPromotionCards = styled(Box)({
  borderRadius: '16px',
  height: '360px',
  width: '360px',
  display: 'flex',
  flexDirection: 'column',
  padding: '2px',
  backgroundColor: 'white',
  color: 'black',
});

const PromotionCards = ({
  label,
  background,
}: {
  label: string;
  background: string;
}) => {
  return (
    <StyledPromotionCards>
      <Box
        sx={{
          width: '100%',
          background: background,
          height: '80%',
          borderRadius: 'inherit',
        }}
      ></Box>
      <Typography
        fontStyle={({ typography }) => typography.hero_super_italic.fontStyle}
        fontSize="24px"
        padding={1}
        sx={{ textWrap: 'nowrap' }}
      >
        {label}
      </Typography>
    </StyledPromotionCards>
  );
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
        gap: '32px',
      }}
    >
      <Box component="h1" sx={{ ...typography.hero_super }}>
        PROMOTIONS & EVENTS
      </Box>
      <Box>
        Be the first to know about the latest ACE Golf promos and events
      </Box>
      <Box sx={{ display: 'flex', gap: '24px' }}>
        <PromotionCards label="34574 COUPON" background="red" />
        <PromotionCards label="EVENT 1" background="blue" />
        <PromotionCards label="EVENT 2" background="grey" />
      </Box>
    </Box>
  );
};
