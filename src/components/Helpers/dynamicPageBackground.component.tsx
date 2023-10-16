'use client';
import * as React from 'react';
import { Box, styled } from '@mui/material';
import { useGetCurrentPathName } from '@/util/getCurrentPath.hook';

export const DynamicPageBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { backgroundColor } = useGetCurrentPathName();
  return (
    <Box
      sx={{ backgroundColor: backgroundColor, position: 'relative' }}
    >
      {children}
    </Box>
  );
};
