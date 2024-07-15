import { Document } from "@contentful/rich-text-types"
import { MediaItemFields as TypeMediaItemFields } from "./TypeMisc"
import { TypeHowItWorksStepsFields } from "./TypeHowItWorks"


export interface TypeTwoColAndMedia {
    "__typename": 'TwoColumnMediaAndText'
    sectionTitle: string
    textColumn: { json: Document}
    mediaColumn: TypeMediaItemFields
    columnOrder: boolean
}
export interface TypeGroupOfNumberedBlocks {
    "__typename": 'GroupOfNumberedBlocks'
    title: string
    howItWorksStepsCollection: TypeHowItWorksStepsFields
}
export interface TypeLargeTitleAndCTA {
    "__typename": 'LargeTitleAndCta'
    titleText: string
    textArea: string
    ctaText: string
    ctaLink: string
}

export type TypeUICollection = TypeGroupOfNumberedBlocks | TypeGroupOfNumberedBlocks | TypeLargeTitleAndCTA
