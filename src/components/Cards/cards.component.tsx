'use client';

import * as React from 'react';
import {
  Box,
  styled,
  Button,
  ButtonProps,
  SxProps,
  Theme,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import { Typography } from '../Typography/typography.component';

type CardColorTypes = 'light' | 'dark';

const CardColorVariants = {
  light: { color: 'black', backgroundColor: 'white' },
  dark: { color: 'white', backgroundColor: 'black' },
};

const CardContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'variant',
  name: 'Card',
})({
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  color: 'black',
  gap: '12px',
  width: '100%',
  //   height: '100%',
  alignItems: 'center',
  borderRadius: '30px',
});

interface CardProps {
  buttonOne?: ButtonProps;
  buttonTwo?: ButtonProps;
  CardTitle: string;
  CardDescription?: string;
  ImageSrc?: string;
  BackgroundColor?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
  ColorVariant?: CardColorTypes;
  sx?: SxProps;
}

export const Card = ({
  CardTitle,
  buttonOne,
  buttonTwo,
  ImageSrc,
  CardDescription,
  BackgroundColor,
  ColorVariant = 'light',
  fullWidth = false,
  sx,
  children,
}: CardProps) => {
  const { typography, palette, breakpoints } = useTheme();

  const isMobile = useMediaQuery(breakpoints.down('sm'));

  const COLOR_VARIANT = CardColorVariants[ColorVariant];

  return (
    <CardContainer
      sx={{
        ...COLOR_VARIANT,
        ...(fullWidth && { alignItems: 'start' }),
        ...sx,
        ...(ImageSrc && {
          backgroundImage: `url(${ImageSrc})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          minHeight: '400px',
        }),
        ...(BackgroundColor && { backgroundColor: BackgroundColor }),
        ...(isMobile && {
          borderRadius: '16px',
          padding: '16px',
        }),
      }}
    >
      {/* Title Box --> Make this text Box */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '16px',
        }}
      >
        <Typography variant="headingThree" weight="600">
          {CardTitle}
        </Typography>
        <Typography variant="base" weight="400">
          {CardDescription}
        </Typography>
      </Box>

      {/* Content Box */}
      <Box sx={{ display: 'flex', flexGrow: 2, width: '100%' }}>{children}</Box>

      {/* Button Box */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {buttonOne && (
          <Button {...buttonOne} fullWidth>
            {buttonOne.children}
          </Button>
        )}
        {buttonTwo && (
          <Button {...buttonTwo} fullWidth>
            {buttonTwo.children}
          </Button>
        )}
      </Box>
    </CardContainer>
  );
};
