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
        viewBox="0 0 1152 628"
        pathProps={{
          d:
            'm1116.5,628H35.5c-19.57,0-35.5-15.92-35.5-35.5V35.5C0,15.93,15.93,0,35.5,0h1081c19.58,0,35.5,15.93,35.5,35.5v557c0,19.58-15.92,35.5-35.5,35.5ZM35.5,1C16.48,1,1,16.48,1,35.5v557c0,19.02,15.48,34.5,34.5,34.5h1081c19.02,0,34.5-15.48,34.5-34.5V35.5c0-19.02-15.48-34.5-34.5-34.5H35.5Z',
        }}
        text="WE BRING YOU GOLF, ALL-YEAR ROUND WITH STATE OF THE ART GOLF BAYS, THE BEST DRINKS IN THE CITY AND A CURATED SELECTION OF BITES TO FUEL YOUR SWING."
        textCount={1}
        strokeColor="#EB8B32"
      ></RoundedVideoPath>
    </Section>
  );
};
