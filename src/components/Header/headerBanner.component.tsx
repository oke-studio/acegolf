'use client';
import * as React from 'react';
import {
  Box,
  styled,
  List,
  Link,
  ListItem,
  ListItemButton,
  ListItemText,
  createTheme,
  useMediaQuery,
  useTheme,
  Button,
} from '@mui/material';
import { Typography } from '../Typography/typography.component';

export const HeaderBanner = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '40px',
        backgroundColor: 'green',
        position: 'sticky',
        top: '0px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="base" sx={{ width: '100%' }}>
        Announcments go here
      </Typography>
    </Box>
  );
};
