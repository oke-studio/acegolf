import { TypeFaqItemFields } from '.'
import { Document } from '@contentful/rich-text-types'

export interface TypeHowItWorksFields {
  title: string
  howItWorksStepsCollection: { items: TypeHowItWorksStepsFields[] }
}

export interface TypeHowItWorksStepsFields {
  stepTitle: string
  stepTextTitle: string
  textContent: {
    json: Document
  }
  stepCtaText?: string
  stepCtaLink?: string
  relatedFaqCollection?: { items: TypeFaqItemFields[] }
}
