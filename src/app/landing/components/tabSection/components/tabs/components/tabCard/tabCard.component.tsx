'use client';

import { Box, useTheme } from '@mui/material';
import * as React from 'react';

interface TabCardProps {
  children: React.ReactNode;
}

export const TabCard = ({ children }: TabCardProps) => {
  const { typography, palette } = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        border: '3px solid black',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px',
      }}
    >
      {children}
    </Box>
  );
};
