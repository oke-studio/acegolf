'use client';
import * as React from 'react';
import { Box, styled } from '@mui/material';

export const DynamicPageBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Box sx={{ backgroundColor: '#171717', position: 'relative' }}>
      {children}
    </Box>
  );
};
