import { Spinner } from '../../../../components/LoadingStates/Spinner'
import { Section } from '../../../../components/Section/Section'
import { useGetHowItWorks } from './hooks/useGetHIW.hook'
import { HIWInfoBox } from './components/HIWInfoBox'

const MockColorPalette = ['#EB8B32', '#9A92C5', '#FFFFFF']

export const HIWSection = () => {
  const { howItWorksData, isLoading } = useGetHowItWorks()

  if (isLoading || !howItWorksData) {
    return (
      <div className="flex w-full items-center justify-center">
        <Spinner />
      </div>
    )
  }

  const RelatedFAQOne = howItWorksData.step1RelatedFaqCollection.items
  const RelatedFAQTwo = howItWorksData.step2RelatedFaqCollection.items
  const RelatedFAQThree = howItWorksData.step3RelatedFaqCollection.items

  const infoBoxData = [
    {
      description: howItWorksData.step1Content,
      title: howItWorksData.step1Title,
      relatedFAQs: RelatedFAQOne,
    },
    {
      description: howItWorksData.step2Content,
      title: howItWorksData.step2Title,
      relatedFAQs: RelatedFAQTwo,
    },
    {
      description: howItWorksData.step3Content,
      title: howItWorksData.step3Title,
      relatedFAQs: RelatedFAQThree,
    },
  ]
  return (
    <Section
      borderRadiusVariant="pill"
      sectionWidth="fullViewport"
      style={{ backgroundColor: 'transparent', padding: '0', marginTop: '50px',}}
    >
      <div className="flex flex-col">
        {infoBoxData?.map((info, index) => {
          return (
            <HIWInfoBox
              number={(index + 1).toString()}
              key={`${info.title}`}
              description={<>{info.description}</>}
              label={<>{info.title}</>}
              miniInfoBox={info.relatedFAQs}
              prevBG={
                index === 0
                  ? 'rgb(var(--color-lightBlack))'
                  : MockColorPalette[index - 1]
              }
              curBG={MockColorPalette[index]}
            />
          )
        })}
      </div>
    </Section>
  )
}
