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
import { RoundedVideoPath } from '@/components/animated-paths/roundedVideoPath.component';

export const VideoLandingHero = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Section
      SectionName="Landing Hero"
      SectionWidth="normal"
      SectionColor="black"
      CornerRadius="on"
      sx={{
        /* centering video and path together  */
        display: 'grid',
        placeItems: 'center',
        gridTemplateAreas: 'videoWithPathArea',
      }}
    >
      <LandingVideo
        width={'100%'}
        height={'100%'}
        sx={{
          gridArea: 'videoWithPathArea',
        }}
      ></LandingVideo>

      <RoundedVideoPath
        sx={{
          gridArea: 'videoWithPathArea',
        }}
        width="100%"
        height="100%"
        viewBox={isMobile ? '0 0 400 600' : '0 0 1152 648'}
        pathProps={
          isMobile
            ? {
                d:
                  'm380.36,600.38H20.39c-11.05,0-20.02-11.2-20.02-25V25.38C.38,11.57,9.34.38,20.39.38h359.97c11.05,0,20.02,11.2,20.02,25v550c0,13.8-8.97,25-20.02,25Z',
              }
            : {
                d:
                  'M1116.5,648H35.5C15.9,648,0,631.6,0,611.4V36.6C0,16.4,15.9,0,35.5,0h1081c19.6,0,35.5,16.4,35.5,36.6v574.7 C1152,631.6,1136.1,648,1116.5,648z M35.5,1C16.5,1,1,17,1,36.6v574.7C1,631,16.5,647,35.5,647h1081c19,0,34.5-16,34.5-35.6V36.6 C1151,17,1135.5,1,1116.5,1H35.5z',
              }
        }
        text="WE BRING YOU GOLF, ALL-YEAR ROUND WITH STATE OF THE ART GOLF BAYS, THE BEST DRINKS IN THE CITY AND A CURATED SELECTION OF BITES TO FUEL YOUR SWING."
        textCount={1}
        strokeColor="#EB8B32"
      ></RoundedVideoPath>
    </Section>
  );
};
