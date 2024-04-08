import { TypeBayPricingAvailabilityFields } from '.'
import { TypeEventItemFields } from '.'
import { TypeHowItWorksFields } from '.'
import { TypeMenuFields } from '.'
import { TypePromotionFields } from '.'

export interface TypeAceGolfBarComFields {
  aceGolfBarComCollection: {
    items: {
      name: string
      globalAnnouncementHeader: string
      activeDate: string
      activeMenu: TypeMenuFields
      activePriceGrid: TypeBayPricingAvailabilityFields
      activeHowItWorks: TypeHowItWorksFields
      activeEventsCollection: { items: TypeEventItemFields[] }
      activePromotionsCollection: { items: TypePromotionFields[] }
    }[]
  }
}

// export type TypeAceGolfBarCom = Entry<TypeAceGolfBarComFields>;
