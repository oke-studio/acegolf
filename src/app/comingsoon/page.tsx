'use client';

import * as React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material';

import GolfLogo from '../../../public/images/ace-golf-golf-logo2.svg';

import { ComingSoonInfoSectionMobile } from './components/comingSoonInfoSectionMobile/comingSoonInfoSectionMobile.component';
import { ComingSoonInfoSection } from './components/comingSoonInfoSection/comingSoonInfoSection.component';

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

const RelativePositionWrapper = styled('div')({
  position: 'relative',
});

const LogoMap = () => {
  let logoStack = [];

  // Array.from(
  //     Array(4).map((_, index) => {
  //         console.log(index);
  //         logoStack.push(<img src={GolfLogo} alt="temp" key={index} />);
  //     })
  // );

  for (let index = 0; index < 2; index++) {
    logoStack.push(
      // <Image
      //     src={golfLogo}
      //     width={width}
      //     height={height}
      //     alt="temp alt"
      //     key={index}
      // />

      <RelativePositionWrapper key={index}>
        <GolfLogo
          key={index}
          position="absolute"
          height="100%"
          //   style={{ transform: 'scale(0.2)' }}
        />
      </RelativePositionWrapper>,
    );
  }

  // return (
  //     <div
  //         style={{
  //             display: "flex",
  //             // gridTemplateColumns: "repeat(4, 1fr)",
  //             width: "100%",
  //         }}
  //     >
  //         <RelativePositionWrapper>
  //             <GolfLogoLeft
  //                 position="absolute"
  //                 height="100%"
  //                 // viewBox={viewBox}
  //             />
  //         </RelativePositionWrapper>
  //         <RelativePositionWrapper>
  //             <GolfLogoCentre
  //                 position="absolute"
  //                 height="100%"
  //                 // viewBox={viewBox}
  //             />
  //         </RelativePositionWrapper>
  //         <RelativePositionWrapper>
  //             <GolfLogoCentre
  //                 position="absolute"
  //                 height="100%"
  //                 // viewBox={viewBox}
  //             />
  //         </RelativePositionWrapper>
  //         <RelativePositionWrapper>
  //             <GolfLogoRight
  //                 position="absolute"
  //                 height="100%"
  //                 // viewBox={viewBox}
  //             />
  //         </RelativePositionWrapper>
  //     </div>
  // );

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'repeat(2, 1fr)',
        height: 'max-content',
      }}
    >
      {logoStack}
    </Box>
  );
};

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
