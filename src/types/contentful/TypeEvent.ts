export interface TypeEventFields {
  eventTitle: string
  slugId: string
  eventStartDate: string
  eventEndDate?: string
  eventDescription: string
  ctaText?: string
  ctaLink: string
  eventPoster: {
    url: string
    description: string
    title: string
  }
}
