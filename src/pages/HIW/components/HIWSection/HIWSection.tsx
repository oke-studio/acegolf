import { Link } from 'react-router-dom'
import { Button } from '../../../../components/Button/Button'
import { Spinner } from '../../../../components/LoadingStates/Spinner'
import { Section } from '../../../../components/Section/Section'
import { Typography } from '../../../../components/Typography/Typography'
import { useGetHowItWorks } from './hooks/useGetHIW.hook'
import { HIWInfoBox } from './components/HIWInfoBox'

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
      style={{ backgroundColor: 'rgb(var(--color-purple))' }}
    >
      <div className="flex flex-col gap-6">
        <div>
          {infoBoxData?.map((info, index) => {
            return (
              <HIWInfoBox
                number={(index + 1).toString()}
                key={`${info.title}`}
                description={<>{info.description}</>}
                label={<>{info.title}</>}
                miniInfoBox={info.relatedFAQs}
              />
            )
          })}
        </div>
        <Button
          buttonVariant="primary"
          buttonStyle={{ alignSelf: 'center', width: 'max-content' }}
        >
          <Link to="/book-now">
            <Typography fontVariant="base" fontWeight="500">
              Reserve a Bay &rarr;
            </Typography>
          </Link>
        </Button>
      </div>
    </Section>
  )
}
