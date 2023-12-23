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
import { LandingVideo } from '../../components/video/video.component';

export const VideoLandingHero = () => {
  return (
    <Section
      SectionName="Landing Hero"
      SectionWidth="normal"
      SectionColor="black"
      CornerRadius="on"
      sx={{}}
    >
      <LandingVideo></LandingVideo>
    </Section>
  );
};
