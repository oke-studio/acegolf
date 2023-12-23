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
        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1152 627">
  
  <g id="Layer_1-2" data-name="Layer 1">
    <rect 
        style={{
        
            fill: "none",
            stroke:" #171717",
            strokeMiterlimit: "10"
          
        }}
        x=".5" y=".5" width="1151" height="626" rx="35.79" ry="35.79"/>
  </g>
</svg>


      <LandingVideo></LandingVideo>
    </Section>
  );
};
