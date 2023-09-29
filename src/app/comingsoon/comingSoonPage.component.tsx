'use client';

import * as React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material';

import { ComingSoonInfoSectionMobile } from './components/comingSoonInfoSectionMobile/comingSoonInfoSectionMobile.component';
import { ComingSoonInfoSection } from './components/comingSoonInfoSection/comingSoonInfoSection.component';
import { LogoMap } from './components/logoMap/logoMap.component';
import { TopBanner } from '../../components/topBanner/topBanner.component';

const backgroundColor = '#E6E8E9';

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
          {/* <ComingSoonInfoSectionMobile /> */}
          <ComingSoonInfoSection />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              overflow: 'hidden',
              position: 'relative',
              top: '25px',
            }}
          >
            {[...Array(10)].map((_, index) => (
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
          <TopBanner
            width="100%"
            height="100%"
            viewBox="0 0 1973 293"
            pathProps={{
              d: 'M 0.3257 244.537 C 21 244.537 28.5 238.5 142.377 169.919 C 343 49.0589 549.615 31.5 474.992 123.111 C 380.659 238.919 596.811 193.13 832.992 123.11 C 1255 -1.9998 1630.81 38.1808 1413.49 179.111 C 1248.49 286.111 1913 102.502 1972 102.502',
            }}
            text=" · COMING SOON · TORONTO'S BEST INDOOR GOLF LOUNGE  "
            textCount={3}
            strokeColor="#EB8B32"
          />
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
          {[...Array(18)].map((_, index) => (
            <LogoMap key={index} />
          ))}
        </div>
      </PageLayout>
    </PageWrapper>
  );
}
