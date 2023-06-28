'use client';

import * as React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material';

import { ComingSoonInfoSectionMobile } from './components/comingSoonInfoSectionMobile/comingSoonInfoSectionMobile.component';
import { ComingSoonInfoSection } from './components/comingSoonInfoSection/comingSoonInfoSection.component';
import { LogoMap } from './components/logoMap/logoMap.component';

const SidebarImages = [
  '/images/ace-golf-card.svg',
  '/images/ace-golf-bar-lounge.svg',
  '/images/ace-golf-full.svg',
];

const backgroundColor = '#529DC8';

const ComingSoonInfoBox = styled('div')({
  display: 'flex',
  color: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  flexDirection: 'column',
  gap: '16px',
});

const PageWrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: 'repeat(3, 1fr)',

  height: '100%',
  // [theme.breakpoints.up('md')]: {

  // }
}));

export default function Page() {
  const isMobile = useMediaQuery('(max-width:640px)');

  let topLogoVertStack = [];

  for (let index = 0; index < 4; index++) {
    topLogoVertStack.push(<LogoMap key={index} />);
  }

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        height: '100vh',
        color: 'black',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <PageWrapper>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            // flexWrap: 'nowrap',
            // height: 'max-content',
            position: 'relative',
            // height: '20%',
            // top: '-20px',
          }}
        >
          .
        </div>
        {isMobile ? <ComingSoonInfoSectionMobile /> : <ComingSoonInfoSection />}

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {topLogoVertStack}
        </div>
      </PageWrapper>
    </div>
  );
}
