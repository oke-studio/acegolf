'use client';

import { Box, Typography, useTheme, ButtonProps, Button } from '@mui/material';
import * as React from 'react';

interface TabCardProps {
  title: string;
  buttonOne: ButtonProps & { buttonLabel: string };
  buttonTwo?: ButtonProps & { buttonLabel: string };
  children: React.ReactNode;
}

export const TabCard = ({
  children,
  title,
  buttonOne,
  buttonTwo,
}: TabCardProps) => {
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
        padding: '42px',
        flexDirection: 'column',
        gap: '24px',
        maxWidth: '660px',
        width: '100%',
        minHeight: '550px',
      }}
    >
      <Typography
        component="h1"
        fontStyle={typography.hero_super.fontStyle}
        fontWeight={typography.hero_super.fontWeight}
        fontSize="48px"
        color="black"
      >
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexGrow: 2 }}>{children}</Box>
      <Box sx={{ display: 'flex', gap: '24px' }}>
        <Button {...buttonOne}>{buttonOne.buttonLabel} &rarr;</Button>
        {buttonTwo && (
          <Button {...buttonTwo}>{buttonTwo.buttonLabel} &rarr;</Button>
        )}
      </Box>
    </Box>
  );
};
