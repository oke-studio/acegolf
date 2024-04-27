import { TypeBayPricingAvailabilityFields } from '.'
import { TypeEventItemFields, TypeEventFields } from '.'
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
    }[]
  }
}

// export type TypeAceGolfBarCom = Entry<TypeAceGolfBarComFields>;
