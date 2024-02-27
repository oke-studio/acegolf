import { TypeGeneralBayPriceFields } from '.'
import { TypePrivateBayPriceFields } from '.'

export interface TypeBayPricingAvailabilityFields {
  bayPricingScheduleName: string
  effectiveDateRangeStart: `${number}-${number}-${number}T${number}:${number}:${number}Z`
  effectiveDateRangeEnd: `${number}-${number}-${number}T${number}:${number}:${number}Z`
  announcement?: string
  generalBayScheduleCollection: { items: TypeGeneralBayPriceFields[] }
  privateBayScheduleCollection: { items: TypePrivateBayPriceFields[] }
}
