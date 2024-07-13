import type { TypeBayPricingAvailabilityFields } from './TypeBayPricingAvailability';
import type { TypeEventFields } from './TypeEvent';
import type { TypeHowItWorksFields } from './TypeHowItWorks';
import type { TypeMenuFields } from './TypeMenu';
import type { TypePromotionFields } from './TypePromotion';

export interface TypeAceHomePageFields {
  aceHomePageCollection: {
    items: {
      name: string
      globalAnnouncementHeader: string
      // featuredEventsPromotions:
      activeMenu: TypeMenuFields
      activePriceGrid: TypeBayPricingAvailabilityFields
      activeHowItWorks: TypeHowItWorksFields
      featuredEventsPromotionsCollection: { items: TypeEventFields[] }
      featuredUgcVideosCollection: {
        items: {
          nameOfPerson: string
          testimonialMessage: string
          type: 'UGC Video' | 'Testimonial'
          linkedUrl?: string
          imageVideo: { contentType: string; url: string; fileName: string }
        }[]
      }
      featuredTestimonialsCollection: {
        items: {
          nameOfPerson: string
          testimonialMessage: string
          type: 'UGC Video' | 'Testimonial'
          linkedUrl?: string
          imageVideo: { contentType: string; url: string; fileName: string }
        }[]
      }
    }[]
  }
}

// export type TypeAceGolfBarCom = Entry<TypeAceGolfBarComFields>;
