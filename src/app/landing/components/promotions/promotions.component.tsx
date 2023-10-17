'use client';
import * as React from 'react';
import {
  useTheme,
  Box,
  styled,
  Typography,
  useMediaQuery,
} from '@mui/material';

const StyledPromotionCards = styled(Box)({
  borderRadius: '16px',
  minHeight: '250px',
  minWidth: '250px',

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
  const isMobile = useMediaQuery('(max-width:640px)');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        alignItems: 'center',
        gap: '32px',
        margin: '32px 0',
      }}
    >
      <Box
        component="h1"
        sx={{ ...typography.hero_super, textAlign: 'center' }}
      >
        PROMOTIONS & EVENTS
      </Box>
      <Box>
        Be the first to know about the latest ACE Golf promos and events
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '24px',
          ...(isMobile && { flexDirection: 'column' }),
        }}
      >
        <PromotionCards label="34574 COUPON" background="red" />
        <PromotionCards label="EVENT 1" background="blue" />
        <PromotionCards label="EVENT 2" background="grey" />
      </Box>
    </Box>
  );
};
