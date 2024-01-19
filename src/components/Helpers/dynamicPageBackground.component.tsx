'use client';
import * as React from 'react';
import { Box } from '@mui/material';
import { useGetCurrentPathName } from '@/util/getCurrentPath.hook';

export const DynamicPageBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const style = useGetCurrentPathName();
  return <Box sx={{ position: 'relative', ...style }}>{children}</Box>;
};
