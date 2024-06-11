import { TypeServiceTimeFields } from '.'
export interface TypeGeneralBayPriceFields {
  dayOfWeek:
    | 'Friday'
    | 'Monday'
    | 'Saturday'
    | 'Sunday'
    | 'Thursday'
    | 'Tuesday'
    | 'Wednesday'
  serviceTime1: TypeServiceTimeFields
  serviceTime1Price: number
  serviceTime2: TypeServiceTimeFields
  serviceTime2Price: number
}
