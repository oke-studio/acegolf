export type CalendarItemContainerStyleType =
  | 'black'
  | 'dark_orange'
  | 'light_orange'
  | 'green'
  | 'teal'
  | 'grey'
  | 'hidden'
  | 'date'

export interface EventsCalenderItem {
  title: string
  description: string
  imgSrc?: string
  type: CalendarItemContainerStyleType
  id?: string
}
