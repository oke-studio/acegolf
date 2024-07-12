
import { Document } from '@contentful/rich-text-types'

export interface TypeLeagueFields {
  leagueTitle: string
  slugId: string
  leagueDescription: string
  ctaText?: string
  ctaLink?: string
  leagueDuration: string
  leagueDesc: { json: Document }
  startDateTime: `${number}-${number}-${number}T${number}:${number}:${number}Z`
  endDateTime: `${number}-${number}-${number}T${number}:${number}:${number}Z`
  leagueType: string
  leaguePoster?: {
    url: string
    description: string
    title: string
    contentType: string
    fileName: string
  }
}

export interface TypeEventItemFields {
    leagueDate: string
    leagueCollection: { items: TypeLeagueFields[] }
}
