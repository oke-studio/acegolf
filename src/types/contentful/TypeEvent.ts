import { CalendarItemContainerStyleContentfulType } from '../../pages/Events/components/CalendarSection/types/CalendarSection.types'
import { Document } from '@contentful/rich-text-types'

export interface TypeEventFields {
  eventTitle: string
  slugId: string
  eventDescription: string
  ctaText?: string
  ctaLink?: string
  eventDuration: string
  startDateTime: `${number}-${number}-${number}T${number}:${number}:${number}Z`
  endDateTime: `${number}-${number}-${number}T${number}:${number}:${number}Z`
  eventType: CalendarItemContainerStyleContentfulType
  eventPoster?: {
    url: string
    description: string
    title: string
    contentType: string
    fileName: string
  }
  eventDesc?: {
    json: Document
  }
}

// export type TypeEvent = Entry<TypeEventFields>;
