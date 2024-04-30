import { TypeBayPricingAvailabilityFields } from '.'
import { TypeEventFields } from '.'
import { TypeHowItWorksFields } from '.'
import { TypeMenuFields } from '.'

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
          nameofPerson: string
          testimonialMessage: string
          type: 'UGC Video' | 'Testimonial'
          linkedUrl?: string
          imageVideo: { contentType: string; url: string; fileName: string }
        }[]
      }
    }[]
  }
}
