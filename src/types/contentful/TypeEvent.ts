import { CalendarItemContainerStyleContentfulType } from '../../pages/Events/components/CalendarSection/types/CalendarSection.types'
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
  startDateTime: `${number}-${number}-${number}T${number}:${number}:${number}Z`
  endDateTime: `${number}-${number}-${number}T${number}:${number}:${number}Z`
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
