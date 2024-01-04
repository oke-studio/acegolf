import * as React from 'react';
import {
  Button,
  Box,
  styled,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { Section } from '@/components/layout/section.component';

export const LandingCollage = () => {
  return (
    <Section
      SectionName="Landing Collage"
      SectionWidth="fullViewport"
      SectionColor=""
      CornerRadius={false}
      ScrollAnimations={false}
      sx={
        {
          //   display: 'flex',
          //   flexDirection: 'column',
        }
      }
    >
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-around',
          alignContent: 'space-around',
          width: '100vw',
          height: '1500px',
          flexWrap: 'wrap',
          // background: isSmallDesktop
          //   ? 'url(/images/background-collage_928.svg)'
          //   : 'url(/images/background-collage_1226.svg)',
          background: 'url(/images/background-collage_1226.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'fit',
        }}
      ></Box>
    </Section>
  );
};
