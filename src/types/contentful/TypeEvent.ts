import { CalendarItemContainerStyleContentfulType } from '../Pages/Events/CalendarSection.types'
import { MediaItemFields } from '../contentful/TypeMisc'
import { Document } from '@contentful/rich-text-types'
import { TypeUICollection } from './TypeUICollection'

export interface TypeEventFields {
  eventTitle: string
  slugId: string
  eventDescription: string
  ctaText?: string
  ctaLink?: string
  eventDuration: string
  startDateTime: string
  endDateTime: string
  eventType: CalendarItemContainerStyleContentfulType
  eventPoster?: MediaItemFields
  eventDesc?: {
    json: Document
  }
  eventPageContentStackCollection?: { items: TypeUICollection[] }
}

export interface TypeEventItemFields {
  eventDate: string
  eventsCollection: { items: TypeEventFields[] }
}
