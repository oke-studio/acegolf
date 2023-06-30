'use client';

import * as React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material';

import { ComingSoonInfoSectionMobile } from './components/comingSoonInfoSectionMobile/comingSoonInfoSectionMobile.component';
import { ComingSoonInfoSection } from './components/comingSoonInfoSection/comingSoonInfoSection.component';
import { LogoMap } from './components/logoMap/logoMap.component';

const backgroundColor = '#529DC8';

const PageWrapper = styled(Box)({
  backgroundColor: backgroundColor,
  height: '100vh',
  color: 'black',
  width: '100vw',
  overflow: 'hidden',
});

const ComingSoonInfoBox = styled('div')({
  display: 'flex',
  color: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  flexDirection: 'column',
  gap: '16px',
});

const PageLayout = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: 'repeat(3, 1fr)',

  height: '100%',
  // [theme.breakpoints.up('md')]: {

  // }
}));

const PageMobileLayout = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

export default function Page() {
  const isMobile = useMediaQuery('(max-width:640px)');

  let topLogoVertStack = [];

  for (let index = 0; index < 11; index++) {
    topLogoVertStack.push(<LogoMap key={index} />);
  }

  if (isMobile) {
    return (
      <PageWrapper>
        <PageMobileLayout>
          <ComingSoonInfoSectionMobile />
        </PageMobileLayout>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <PageLayout>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',

            position: 'relative',
          }}
        >
          .
        </div>
        <ComingSoonInfoSection />

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {[...Array(11)].map((_, index) => (
            <LogoMap key={index} />
          ))}
        </div>
      </PageLayout>
    </PageWrapper>
  );
}
