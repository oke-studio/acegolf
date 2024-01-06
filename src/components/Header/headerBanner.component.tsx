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
        height: 'fit-content',
        backgroundColor: 'green',
        position: 'sticky',
        top: '0px',
        zIndex: '10',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: ' 8px 0px',
        mixBlendMode: 'normal',
      }}
    >
      <Typography variant="base" sx={{}}>
        Announcments go here about ace so that customers know
      </Typography>
    </Box>
  );
};
