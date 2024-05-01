import { TypeFaqItemFields } from '.'

export interface TypeHowItWorksFields {
  title: string
  howItWorksStepsCollection: { items: TypeHowItWorksStepsFields[] }
}

interface TypeHowItWorksStepsFields {
  stepTitle: string
  stepTextTitle: string
  stepContent: string
  stepCtaText: string
  stepCtaLink: string
  relatedFaqCollection: { items: TypeFaqItemFields[] }
}
