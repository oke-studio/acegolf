import { TypeBayPricingAvailabilityFields } from '.'
import { TypeEventItemFields, TypeEventFields } from '.'
import { TypeHowItWorksFields } from '.'
import { TypeMenuFields } from '.'

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
      activePromotionsCollection: { items: TypeEventFields[] }
    }[]
  }
}

// export type TypeAceGolfBarCom = Entry<TypeAceGolfBarComFields>;
