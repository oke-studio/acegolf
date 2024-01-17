import * as React from 'react';

import { Section } from '@/components/layout/section.component';

import { LandingCardsGrid } from '../landingCards/landingCardsGrid.component';

export const LandingInfoSection = (styleProp, other) => {
  // const stypeTest = styleProp[styleProp];

  return (
    <Section
      SectionName="Landing Info Section"
      SectionWidth="fullViewport"
      SectionColor="#EB8B32"
      CornerRadius={true}
      ScrollAnimations={true}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // ...styleProp['styleProp'],
      }}
    >
      <LandingCardsGrid />
      {/* <LandingCards /> */}
    </Section>
  );
};
