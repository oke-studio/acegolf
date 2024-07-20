import { TypeFaqItemFields } from '.'

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
  stepContent: string
  stepCtaText?: string
  stepCtaLink?: string
  relatedFaqCollection?: { items: TypeFaqItemFields[] }
}
