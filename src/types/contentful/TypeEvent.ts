import { CalendarItemContainerStyleType } from '../../pages/Events/components/CalendarSection/types/CalendarSection.types'

export interface TypeEventFields {
  eventTitle: string
  slugId: string
  eventDescription: string
  ctaText?: string
  ctaLink?: string
  eventDuration: string
  eventType: CalendarItemContainerStyleType
  eventPoster: {
    url: string
    description: string
    title: string
  }
}

export interface TypeEventItemFields {
  eventDate: string
  eventsCollection: { items: TypeEventFields[] }
}
