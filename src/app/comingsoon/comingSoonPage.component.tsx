'use client';

import * as React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material';

import { ComingSoonInfoSectionMobile } from './components/comingSoonInfoSectionMobile/comingSoonInfoSectionMobile.component';
import { ComingSoonInfoSection } from './components/comingSoonInfoSection/comingSoonInfoSection.component';
import { LogoMap } from './components/logoMap/logoMap.component';
import { TopBanner } from './components/topBanner/topBanner.component';

const backgroundColor = '#529DC8';

const PageWrapper = styled(Box)({
  backgroundColor: backgroundColor,
  height: '100vh',
  color: 'black',
  width: '100vw',
  overflow: 'hidden',
});

const PageLayout = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: 'repeat(3, 1fr)',

  height: '100%',
}));

const PageMobileLayout = styled(Box)({
  display: 'flex',
  //   justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export default function ComingSoonPage() {
  const isMobile = useMediaQuery('(max-width:640px)');

  if (isMobile) {
    return (
      <PageWrapper>
        <PageMobileLayout>
          {/* <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <TopBanner
              width="500"
              height="200"
              pathProps={{
                d: 'M-226.67 189.767C10.6358 -37.7211 137.918 30.6693 65.6475 110.218C-6.62282 189.767 155.177 166.73 323.088 110.218C491 53.7061 774.56 56.2762 618.282 157.731C499.629 234.761 972.802 118.497 1029.25 102.659',
              }}
              strokeWidth="80.534"
              text="TORONTO'S FIRST EVER INDOOR GOLF LOUNGE"
            />
          </div> */}
          <ComingSoonInfoSectionMobile />
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
            width: '100vw',
          }}
        >
          {/* <TopBanner
            width="1458"
            height="304"
            pathProps={{
              d: 'M-203 263.241C127 -52.7594 304 42.2406 203.5 152.741C103 263.241 328 231.24 561.5 152.741C795 74.2407 1189.32 77.8108 972 218.741C807 325.741 1465 164.241 1543.5 142.241',
            }}
            text="TORONTO'S FIRST EVER INDOOR GOLF LOUNGE"
            textCount={4}
          /> */}
          .
        </div>
        <ComingSoonInfoSection />

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
            position: 'relative',
            gap: '16px',
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
