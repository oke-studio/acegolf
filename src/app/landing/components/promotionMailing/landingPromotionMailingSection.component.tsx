import * as React from 'react';

import { Section } from '@/components/layout/section.component';

import { Promotions } from '../../components/promotions/promotions.component';
import { MailingList } from '../../components/mailingList/mailingList.component';

export default function LandingPromotionMailingSection() {
  return (
    <Section
      SectionName="Landing Promotion & Mailing Section"
      SectionWidth="fullViewport"
      SectionColor="#39775E"
      CornerRadius={true}
      ScrollAnimations={true}
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Promotions />

      <MailingList />
    </Section>
  );
}
