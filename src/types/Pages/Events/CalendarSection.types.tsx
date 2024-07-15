export type CalendarItemContainerStyleType =
  | 'promotion'
  | 'private_event'
  | 'event'
  | 'league'
  | 'closed'
  | 'adjusted'
  | 'hidden'
  | 'date'

export type CalendarItemContainerStyleContentfulType =
  | 'Promotion'
  | 'Private Event'
  | 'Event'
  | 'League'
  | 'Closed'
  | 'Adjusted Opening Time'

export const CalendarItemContainerStyleTypeMap: {
  [k in CalendarItemContainerStyleContentfulType]?: CalendarItemContainerStyleType
} = {
  'Adjusted Opening Time': 'adjusted',
  Closed: 'closed',
  Event: 'event',
  Promotion: 'promotion',
  League: 'league',
  'Private Event': 'private_event',
}

export interface EventsCalenderItem {
  title: string
  description: string
  imgSrc?: string
  type: CalendarItemContainerStyleType
  id?: string
}
