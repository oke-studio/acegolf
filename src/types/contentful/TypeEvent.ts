import { CalendarItemContainerStyleContentfulType } from '../../pages/Events/components/CalendarSection/types/CalendarSection.types'
import { Document } from '@contentful/rich-text-types'

export interface TypeEventFields {
  eventTitle: string
  slugId: string
  eventDescription: string
  ctaText?: string
  ctaLink?: string
  eventDuration: string
  eventDesc: { json: Document }
  startDateTime: Date
  endDateTime: Date
  eventType: CalendarItemContainerStyleContentfulType
  eventPoster?: {
    url: string
    description: string
    title: string
    contentType: string
    fileName: string
  }
}

export interface TypeEventItemFields {
  eventDate: string
  eventsCollection: { items: TypeEventFields[] }
}
